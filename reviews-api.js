const REVIEW_STATUSES = new Set(['PENDING', 'APPROVED', 'HIDDEN']);
const PAID_ORDER_STATUSES = new Set(['COMPLETED', 'PAID']);

/**
 * Express-style controller factory.
 * Replace the repository methods with the project's ORM implementation.
 */
function createReviewController({ Review, Order }) {
  return {
    async create(req, res) {
      const actor = req.user;
      if (!actor) return res.status(401).json({ error: 'AUTH_REQUIRED' });
      if (actor.role === 'admin' || req.baseUrl.startsWith('/admin')) {
        return res.status(403).json({ error: 'ADMIN_REVIEW_FORBIDDEN' });
      }

      const itemId = String(req.body?.item_id || '');
      const rating = Number(req.body?.rating);
      const body = String(req.body?.body || '').trim();
      if (!itemId || !Number.isInteger(rating) || rating < 1 || rating > 5 || body.length < 10 || body.length > 4000) {
        return res.status(400).json({ error: 'INVALID_REVIEW' });
      }

      // The client cannot assert verified_purchase. The server derives it from orders.
      const paidOrder = await Order.findOne({
        user_id: actor.id,
        status: { $in: [...PAID_ORDER_STATUSES] },
        items: { $elemMatch: { item_id: itemId } }
      });
      if (!paidOrder) return res.status(403).json({ error: 'VERIFIED_PURCHASE_REQUIRED' });

      const duplicate = await Review.findOne({ user_id: actor.id, item_id: itemId });
      if (duplicate) return res.status(409).json({ error: 'REVIEW_ALREADY_EXISTS' });

      const review = await Review.create({
        user_id: actor.id,
        item_id: itemId,
        order_id: paidOrder.id,
        rating,
        body,
        photo_urls: [],
        status: 'PENDING',
        verified_purchase: true
      });
      return res.status(201).json(review);
    },

    async updateOwn(req, res) {
      const actor = req.user;
      if (!actor) return res.status(401).json({ error: 'AUTH_REQUIRED' });
      if (actor.role === 'admin') return res.status(403).json({ error: 'ADMIN_REVIEW_FORBIDDEN' });
      const body = String(req.body?.body || '').trim();
      const rating = Number(req.body?.rating);
      if (!Number.isInteger(rating) || rating < 1 || rating > 5 || body.length < 10 || body.length > 4000) {
        return res.status(400).json({ error: 'INVALID_REVIEW' });
      }
      const review = await Review.findOneAndUpdate(
        { id: req.params.id, user_id: actor.id },
        { rating, body, status: 'PENDING', updated_at: new Date() },
        { new: true }
      );
      if (!review) return res.status(404).json({ error: 'REVIEW_NOT_FOUND' });
      return res.json(review);
    },

    async moderate(req, res) {
      if (!req.user || req.user.role !== 'admin') return res.status(403).json({ error: 'ADMIN_REQUIRED' });
      const status = String(req.body?.status || '');
      if (!REVIEW_STATUSES.has(status)) return res.status(400).json({ error: 'INVALID_STATUS' });
      const review = await Review.findOneAndUpdate({ id: req.params.id }, { status, updated_at: new Date() }, { new: true });
      if (!review) return res.status(404).json({ error: 'REVIEW_NOT_FOUND' });
      return res.json(review);
    }
  };
}

function registerReviewRoutes(app, dependencies) {
  const controller = createReviewController(dependencies);
  app.post('/api/reviews', controller.create);
  app.patch('/api/reviews/:id', controller.updateOwn);
  app.patch('/api/admin/reviews/:id', controller.moderate);
  return controller;
}

module.exports = { createReviewController, registerReviewRoutes, PAID_ORDER_STATUSES, REVIEW_STATUSES };
