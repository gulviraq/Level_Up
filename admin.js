const ADMIN_SESSION_KEY = 'ds_admin_session';
const THEME_KEY = 'app-theme';
const categoryNames = { smart: 'Smart Home', kitchen: 'Кухня', cleaning: 'Уборка' };

const fallbackProducts = [
  { id: 1, name: 'Yale Linus Smart Lock', category: 'smart', price: 120000, oldPrice: 142000, image: 'https://gw-assets.assaabloy.com/is/image/assaabloy/5052847131336.MAIN-6', badge: '-15%', desc: 'Умный замок для доступа без ключа.', visible: true },
  { id: 2, name: 'Roborock S7 MaxV Ultra', category: 'cleaning', price: 450000, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hc1/65052476243998.jpg?format=gallery-medium', badge: 'HIT', desc: 'Робот-пылесос с самоочищающейся станцией.', visible: true },
  { id: 3, name: 'Dyson Purifier Cool TP07', category: 'smart', price: 320000, image: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/hero/385278-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640', desc: 'Очиститель воздуха и вентилятор.', visible: true },
  { id: 4, name: 'Smeg Espresso Machine', category: 'kitchen', price: 180000, image: 'https://cdn.entero.ru/mp@2x/77/e2/77e2bbce525230cd6cc4ffa1137f0dde.jpg', badge: 'Design', desc: 'Итальянская кофемашина в стиле 50-х.', visible: true }
];

const seedUsers = [
  { id: 'DS-001', name: 'Азамат К.', handle: '@azamat', email: 'azamat@example.com', date: '2026-08-23', role: 'User', status: 'active' },
  { id: 'DS-002', name: 'Елена С.', handle: '@elena_s', email: 'elena@example.com', date: '2026-08-28', role: 'User', status: 'active' },
  { id: 'DS-003', name: 'Алексей К.', handle: '@admin', email: 'admin@doublesmart.local', date: '2026-01-12', role: 'Admin', status: 'active' },
  { id: 'DS-004', name: 'Дмитрий В.', handle: '@dmitryv', email: 'dmitry@example.com', date: '2026-08-31', role: 'User', status: 'blocked' }
];

const seedOrders = [
  { id: '#DS-1048', customer: 'Азамат К.', items: 'Yale Linus Smart Lock', total: 120000, status: 'new', date: 'Сегодня, 10:42' },
  { id: '#DS-1047', customer: 'Елена С.', items: 'Roborock S7 MaxV Ultra', total: 450000, status: 'processing', date: 'Сегодня, 09:18' },
  { id: '#DS-1046', customer: 'Дмитрий В.', items: 'Samsung Bespoke Fridge', total: 850000, status: 'completed', date: 'Вчера, 18:04' },
  { id: '#DS-1045', customer: 'Алина М.', items: 'Smeg Espresso Machine', total: 180000, status: 'cancelled', date: 'Вчера, 14:26' }
];

const state = { products: [], users: [], orders: [], reviews: [], route: 'dashboard', page: 1, pageSize: 6, pendingConfirm: null };

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);
const money = value => `${Number(value || 0).toLocaleString('ru-RU')} ₸`;
const categoryTitle = value => categoryNames[value] || value || 'Другое';

function getSession() {
  try { return JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || 'null'); } catch { return null; }
}

function isAdmin() {
  return getSession()?.role === 'admin';
}

// In production this guard must be duplicated by the server/API middleware.
function requireAdmin() {
  if (!isAdmin()) {
    $('#adminShell').hidden = true;
    $('#authGate').hidden = false;
    return false;
  }
  $('#authGate').hidden = true;
  $('#adminShell').hidden = false;
  return true;
}

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}

function loadData() {
  state.products = readStorage('ds_db', fallbackProducts).map(product => ({ ...product, visible: product.visible !== false, updatedAt: product.updatedAt || 'Сегодня' }));
  state.users = readStorage('ds_users', seedUsers);
  state.orders = readStorage('ds_orders', seedOrders);
  state.reviews = readStorage('ds_reviews', [{ id: 'review-demo', userId: 'user-demo', name: 'Азамат К.', product: 'Yale Linus Smart Lock', rating: 5, status: 'approved', verifiedPurchase: true, text: 'Замок Yale работает с HomeKit.' }]);
}

function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  const storeName = { ds_db: 'products', ds_reviews: 'reviews', ds_users: 'users', ds_orders: 'orders' }[key];
  if (storeName) window.appDatabase?.backup(storeName, value);
}
function saveProducts() { persist('ds_db', state.products); }
function toast(message, isError = false) { const node = $('#toast'); node.textContent = message; node.className = `toast${isError ? ' error' : ''}`; setTimeout(() => { node.textContent = ''; }, 2800); }

function applyTheme(theme = localStorage.getItem(THEME_KEY) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) {
  const validTheme = ['light', 'dark', 'oled'].includes(theme) ? theme : 'light';
  document.documentElement.dataset.theme = validTheme;
  document.documentElement.style.colorScheme = validTheme;
  $$('.theme-switcher button').forEach(button => button.classList.toggle('active', button.dataset.theme === validTheme));
}

function renderRoute() {
  if (!requireAdmin()) return;
  const requested = location.hash.replace('#', '') || 'dashboard';
  state.route = ['dashboard', 'catalog', 'users', 'orders', 'reviews', 'settings'].includes(requested) ? requested : 'dashboard';
  $$('.view').forEach(view => { view.hidden = view.dataset.view !== state.route; });
  $$('.side-nav a').forEach(link => link.classList.toggle('active', link.dataset.route === state.route));
  if (state.route === 'dashboard') renderDashboard();
  if (state.route === 'catalog') renderProducts();
  if (state.route === 'users') renderUsers();
  if (state.route === 'orders') renderOrders();
  if (state.route === 'reviews') renderReviews();
}

function renderDashboard() {
  const revenue = state.orders.filter(order => order.status === 'completed').reduce((sum, order) => sum + order.total, 0);
  const activeOrders = state.orders.filter(order => !['completed', 'cancelled'].includes(order.status)).length;
  const metrics = [
    ['Пользователи', state.users.length.toLocaleString('ru-RU'), '+12.5% за месяц', '◎'],
    ['Активные заказы', activeOrders, '+8.2% за неделю', '▤'],
    ['Выручка', money(revenue), '+18.4% за месяц', '₸'],
    ['Конверсия', '4.86%', '+0.9% за неделю', '↗']
  ];
  $('#metrics').innerHTML = metrics.map(([label, value, change, icon]) => `<article class="metric-card"><span class="metric-icon">${icon}</span><span class="metric-label">${label}</span><div class="metric-value">${value}</div><span class="metric-change">${change}</span></article>`).join('');
  $('#revenueTotal').textContent = money(revenue);
  const daily = [42, 58, 35, 74, 62, 88, 69];
  $('#revenueChart').innerHTML = daily.map((height, index) => `<div class="bar-column"><div class="bar" style="height:${height}%" title="${height * 1000} ₸"></div><small>${['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][index]}</small></div>`).join('');
  const activities = [
    ['Новый заказ #DS-1048', 'Азамат К. оформил заказ на Yale Linus', '10 минут назад'],
    ['Новый пользователь', 'Елена С. создала аккаунт', '34 минуты назад'],
    ['Статус изменён', 'Заказ #DS-1047 передан в обработку', '1 час назад'],
    ['Каталог обновлён', 'Изменены данные Roborock S7 MaxV Ultra', '2 часа назад']
  ];
  $('#activityList').innerHTML = activities.map(([title, text, time]) => `<div class="activity-item"><i class="activity-dot"></i><div><b>${title}</b><small>${text} · ${time}</small></div></div>`).join('');
}

function filteredProducts() {
  const query = ($('#productSearch')?.value || '').toLowerCase().trim();
  const category = $('#categoryFilter')?.value || 'all';
  const visibility = $('#visibilityFilter')?.value || 'all';
  return state.products.filter(product => {
    const matchesQuery = !query || `${product.name} ${categoryTitle(product.category)}`.toLowerCase().includes(query);
    const matchesCategory = category === 'all' || product.category === category;
    const matchesVisibility = visibility === 'all' || (visibility === 'active' ? product.visible : !product.visible);
    return matchesQuery && matchesCategory && matchesVisibility;
  });
}

function renderProducts() {
  const products = filteredProducts();
  const pages = Math.max(1, Math.ceil(products.length / state.pageSize));
  state.page = Math.min(state.page, pages);
  const rows = products.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
  $('#productsTable').innerHTML = rows.length ? rows.map(product => `<tr><td><div class="product-cell"><img class="product-thumb" src="${escapeHTML(product.image || 'https://placehold.co/80x80/f4f4f5/2481cc?text=DS')}" alt=""><span><b>${escapeHTML(product.name)}</b><small>ID ${product.id}</small></span></div></td><td>${escapeHTML(categoryTitle(product.category))}</td><td><b>${money(product.price)}</b>${product.oldPrice ? `<small class="muted"><s>${money(product.oldPrice)}</s></small>` : ''}</td><td><span class="status-pill ${product.visible ? 'active' : ''}">${product.visible ? 'Активен' : 'Скрыт'}</span></td><td>${escapeHTML(product.updatedAt)}</td><td><div class="row-actions"><button class="row-action" data-action="edit-product" data-id="${product.id}">Изменить</button><button class="row-action danger" data-action="delete-product" data-id="${product.id}">Удалить</button></div></td></tr>`).join('') : '<tr><td colspan="6"><div class="empty-state">Товары не найдены</div></td></tr>';
  $('#productPagination').innerHTML = Array.from({ length: pages }, (_, index) => `<button class="page-button ${index + 1 === state.page ? 'active' : ''}" data-page="${index + 1}">${index + 1}</button>`).join('');
}

function renderUsers() {
  const query = ($('#userSearch')?.value || '').toLowerCase().trim();
  const status = $('#userStatusFilter')?.value || 'all';
  const users = state.users.filter(user => (!query || `${user.name} ${user.handle} ${user.email}`.toLowerCase().includes(query)) && (status === 'all' || user.status === status));
  $('#usersTable').innerHTML = users.map(user => `<tr><td><div class="product-cell"><span class="avatar">${escapeHTML(user.name.slice(0, 2).toUpperCase())}</span><span><b>${escapeHTML(user.name)}</b><small>${escapeHTML(user.handle)} · ${escapeHTML(user.id)}</small></span></div></td><td>${escapeHTML(user.email)}</td><td>${escapeHTML(user.date)}</td><td><select class="row-select" data-user-role="${user.id}"><option ${user.role === 'User' ? 'selected' : ''}>User</option><option ${user.role === 'Admin' ? 'selected' : ''}>Admin</option></select></td><td><span class="status-pill ${user.status === 'active' ? 'active' : 'blocked'}">${user.status === 'active' ? 'Активен' : 'Заблокирован'}</span></td><td><div class="row-actions"><button class="row-action" data-action="toggle-user" data-id="${user.id}">${user.status === 'active' ? 'Заблокировать' : 'Разблокировать'}</button><button class="row-action" data-action="user-history" data-id="${user.id}">История</button></div></td></tr>`).join('');
}

const orderStatusNames = { new: 'Новый', processing: 'В обработке', completed: 'Завершён', cancelled: 'Отменён' };
function renderOrders() {
  const selected = $('#orderStatusFilter')?.value || 'all';
  const orders = state.orders.filter(order => selected === 'all' || order.status === selected);
  $('#ordersTable').innerHTML = orders.map(order => `<tr><td><b>${escapeHTML(order.id)}</b><small class="muted">${escapeHTML(order.date)}</small></td><td>${escapeHTML(order.customer)}</td><td>${escapeHTML(order.items)}</td><td><b>${money(order.total)}</b></td><td><select class="row-select" data-order-status="${order.id}">${Object.entries(orderStatusNames).map(([key, label]) => `<option value="${key}" ${order.status === key ? 'selected' : ''}>${label}</option>`).join('')}</select></td><td><button class="row-action" data-action="order-details" data-id="${order.id}">Подробнее</button></td></tr>`).join('');
}

function renderReviews() {
  const selected = $('#reviewStatusFilter')?.value || 'all';
  const reviews = state.reviews.filter(review => selected === 'all' || review.status === selected);
  $('#reviewsTable').innerHTML = reviews.length ? reviews.map(review => `<tr><td><div class="product-cell"><span class="avatar">${escapeHTML((review.name || '?').slice(0, 2).toUpperCase())}</span><span><b>${escapeHTML(review.name)}</b><small>${escapeHTML(review.createdAt || 'Недавно')}</small></span></div></td><td>${escapeHTML(review.product || review.productId)}</td><td><span class="stars">${'★'.repeat(Number(review.rating || 0))}</span></td><td><span class="verified-badge">${review.verifiedPurchase ? '✓ Проверена' : 'Не подтверждена'}</span></td><td><span class="status-pill ${review.status === 'approved' ? 'active' : review.status === 'hidden' ? 'blocked' : 'processing'}">${review.status === 'approved' ? 'Опубликован' : review.status === 'hidden' ? 'Скрыт' : 'На проверке'}</span></td><td><div class="row-actions">${review.status !== 'approved' ? `<button class="row-action" data-action="approve-review" data-id="${review.id}">Одобрить</button>` : `<button class="row-action" data-action="hide-review" data-id="${review.id}">Скрыть</button>`}<button class="row-action danger" data-action="delete-review" data-id="${review.id}">Удалить</button></div></td></tr>`).join('') : '<tr><td colspan="6"><div class="empty-state">Отзывов с таким статусом нет</div></td></tr>';
}

function openProductModal(product = null) {
  $('#productModal').hidden = false;
  $('#productModalTitle').textContent = product ? 'Изменить товар' : 'Добавить товар';
  $('#productModalEyebrow').textContent = product ? 'Редактирование каталога' : 'Новый объект';
  $('#productId').value = product?.id || '';
  $('#productName').value = product?.name || '';
  $('#productCategory').value = product?.category || 'smart';
  $('#productPrice').value = product?.price || '';
  $('#productOldPrice').value = product?.oldPrice || '';
  $('#productImage').value = product?.image || '';
  $('#productDescription').value = product?.desc || '';
  $('#productBadge').value = product?.badge || '';
  $('#productVisibility').value = product?.visible === false ? 'hidden' : 'active';
}

function closeModals() { $$('.modal-backdrop').forEach(modal => { modal.hidden = true; }); }
function confirmAction(title, text, action) { $('#confirmTitle').textContent = title; $('#confirmText').textContent = text; state.pendingConfirm = action; $('#confirmModal').hidden = false; }

function saveProduct(event) {
  event.preventDefault();
  if (!isAdmin()) return toast('Сессия администратора истекла', true);
  const id = $('#productId').value;
  const data = { name: $('#productName').value.trim(), category: $('#productCategory').value, price: Number($('#productPrice').value), oldPrice: Number($('#productOldPrice').value) || null, image: $('#productImage').value.trim(), desc: $('#productDescription').value.trim(), badge: $('#productBadge').value.trim(), visible: $('#productVisibility').value === 'active', updatedAt: 'Только что' };
  if (!data.name || !data.price) return toast('Заполните название и цену', true);
  if (id) state.products = state.products.map(product => String(product.id) === id ? { ...product, ...data } : product);
  else state.products.unshift({ ...data, id: Date.now() });
  saveProducts(); closeModals(); renderProducts(); renderDashboard(); toast(id ? 'Товар обновлён' : 'Товар добавлен');
}

function bindEvents() {
  $('#new-product-button')?.addEventListener('click', () => openProductModal());
  $('#loginForm').addEventListener('submit', event => { event.preventDefault(); if ($('#loginEmail').value === 'admin@doublesmart.local' && $('#loginPassword').value === 'admin123') { sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ role: 'admin', email: $('#loginEmail').value })); requireAdmin(); renderRoute(); toast('Добро пожаловать в админку'); } else toast('Неверные данные для demo-входа', true); });
  $('#logoutButton').addEventListener('click', () => { sessionStorage.removeItem(ADMIN_SESSION_KEY); requireAdmin(); });
  $('#productForm').addEventListener('submit', saveProduct);
  window.addEventListener('hashchange', renderRoute);
  document.addEventListener('click', event => {
    const route = event.target.closest('[data-route]');
    if (route) { $('#sidebar').classList.remove('open'); return; }
    const theme = event.target.closest('[data-theme]');
    if (theme) { localStorage.setItem(THEME_KEY, theme.dataset.theme); applyTheme(theme.dataset.theme); return; }
    const action = event.target.closest('[data-action]');
    if (!action) return;
    const type = action.dataset.action;
    if (type === 'new-product') openProductModal();
    if (type === 'close-modal') closeModals();
    if (type === 'edit-product') openProductModal(state.products.find(product => String(product.id) === action.dataset.id));
    if (type === 'delete-product') { const product = state.products.find(item => String(item.id) === action.dataset.id); confirmAction('Удалить товар?', `«${product?.name}» будет удалён из каталога.`, () => { state.products = state.products.filter(item => String(item.id) !== action.dataset.id); saveProducts(); renderProducts(); renderDashboard(); toast('Товар удалён'); }); }
    if (type === 'toggle-user') { const user = state.users.find(item => item.id === action.dataset.id); user.status = user.status === 'active' ? 'blocked' : 'active'; persist('ds_users', state.users); renderUsers(); toast(user.status === 'active' ? 'Пользователь разблокирован' : 'Пользователь заблокирован'); }
    if (type === 'user-history') toast(`История действий ${action.dataset.id}: 4 события`);
    if (type === 'order-details') toast(`Заказ ${action.dataset.id}: данные клиента доступны менеджеру`);
    if (type === 'approve-review' || type === 'hide-review') { const review = state.reviews.find(item => String(item.id) === action.dataset.id); if (review) { review.status = type === 'approve-review' ? 'approved' : 'hidden'; persist('ds_reviews', state.reviews); renderReviews(); toast(type === 'approve-review' ? 'Отзыв опубликован' : 'Отзыв скрыт'); } }
    if (type === 'delete-review') { const review = state.reviews.find(item => String(item.id) === action.dataset.id); confirmAction('Удалить отзыв?', `Отзыв ${review?.name || ''} будет удалён навсегда.`, () => { state.reviews = state.reviews.filter(item => String(item.id) !== action.dataset.id); persist('ds_reviews', state.reviews); renderReviews(); toast('Отзыв удалён'); }); }
    if (type === 'refresh') { loadData(); renderRoute(); toast('Данные обновлены'); }
    if (type === 'save-settings') toast('Настройки сохранены');
    if (type === 'export-users') toast('Экспорт пользователей подготовлен');
    if (type === 'switch-user') { sessionStorage.removeItem(ADMIN_SESSION_KEY); }
  });
  $('#confirmButton').addEventListener('click', () => { if (state.pendingConfirm) state.pendingConfirm(); state.pendingConfirm = null; closeModals(); });
  $('#openSidebar').addEventListener('click', () => $('#sidebar').classList.add('open'));
  $('#closeSidebar').addEventListener('click', () => $('#sidebar').classList.remove('open'));
  ['productSearch', 'categoryFilter', 'visibilityFilter'].forEach(id => document.getElementById(id)?.addEventListener('input', () => { state.page = 1; renderProducts(); }));
  ['userSearch', 'userStatusFilter'].forEach(id => document.getElementById(id)?.addEventListener('input', renderUsers));
  $('#orderStatusFilter').addEventListener('change', renderOrders);
  $('#reviewStatusFilter').addEventListener('change', renderReviews);
  document.addEventListener('change', event => {
    if (event.target.dataset.userRole) { const user = state.users.find(item => item.id === event.target.dataset.userRole); user.role = event.target.value; persist('ds_users', state.users); toast('Роль пользователя обновлена'); }
    if (event.target.dataset.orderStatus) { const order = state.orders.find(item => item.id === event.target.dataset.orderStatus); order.status = event.target.value; persist('ds_orders', state.orders); renderOrders(); renderDashboard(); toast('Статус заказа обновлён'); }
  });
  document.addEventListener('click', event => { const pageButton = event.target.closest('[data-page]'); if (pageButton) { state.page = Number(pageButton.dataset.page); renderProducts(); } });
}

function init() { applyTheme(); loadData(); bindEvents(); requireAdmin(); renderRoute(); }
init();
