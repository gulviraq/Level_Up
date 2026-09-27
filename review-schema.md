# Review schema

The review is owned by the user and item, never by the browser payload alone.

```sql
CREATE TYPE review_status AS ENUM ('PENDING', 'APPROVED', 'HIDDEN');

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  item_id UUID NOT NULL REFERENCES catalog_items(id) ON DELETE CASCADE,
  order_id UUID NOT NULL REFERENCES orders(id),
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body VARCHAR(4000) NOT NULL CHECK (char_length(trim(body)) >= 10),
  photo_urls JSONB NOT NULL DEFAULT '[]'::jsonb,
  status review_status NOT NULL DEFAULT 'PENDING',
  verified_purchase BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX one_review_per_user_item
  ON reviews(user_id, item_id);
CREATE INDEX reviews_item_status_index
  ON reviews(item_id, status, created_at DESC);
```

`verified_purchase` is set by the API after checking the order. It must not be accepted from the client. `order_id` makes the purchase evidence auditable and prevents a review from being detached from a paid order.
