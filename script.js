const db = [
            {
                id: 1, name: "Yale Linus Smart Lock", category: "smart", price: 120000, oldPrice: 142000,
                image: "https://gw-assets.assaabloy.com/is/image/assaabloy/5052847131336.MAIN-6",
                badge: "-15%",
                desc: "Yale Linus® Smart Lock — это умный замок, который позволяет закрывать и открывать дверь без ключа. Он устанавливается поверх существующего цилиндра с внутренней стороны двери, поэтому снаружи ваша дверь выглядит так же, как и раньше. Управляйте доступом со смартфона, выдавайте виртуальные ключи гостям и просматривайте историю входов.",
                specs: { "Тип устройства": "Умный дверной замок", "Совместимость": "Apple HomeKit, Google Home", "Протокол": "Bluetooth 4.2, Wi-Fi", "Питание": "4 батарейки AA", "Материал": "Металл", "Цвет": "Серебристый" }
            },
            {
                id: 2, name: "Roborock S7 MaxV Ultra", category: "cleaning", price: 450000, oldPrice: null,
                image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/hc1/65052476243998.jpg?format=gallery-medium",
                badge: "HIT",
                desc: "Флагманский робот-пылесос с самой продвинутой док-станцией Empty Wash Fill Dock. Он не только пылесосит и моет пол (виброшвабра), но и сам очищает пылесборник, стирает тряпку и наполняет бак водой. Встроенная камера с ИИ и 3D-сканированием распознает провода, носки и экскременты животных, объезжая их даже в полной темноте.",
                specs: { "Мощность": "5100 Па", "Навигация": "LiDAR + RGB + 3D", "Влажная уборка": "Sonic Mopping", "Станция": "Самоочистка (мусор/вода/тряпка)", "Аккумулятор": "5200 мАч", "Шум": "67 дБ" }
            },
            {
                id: 3, name: "Dyson Purifier Cool™ TP07", category: "smart", price: 320000, oldPrice: null,
                image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/hero/385278-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640",
                badge: null,
                desc: "Интеллектуальный очиститель воздуха с функцией вентилятора. Улавливает 99.95% мельчайших частиц, включая аллергены и вирусы H1N1. Полностью герметичен по стандарту HEPA H13. Автоматически распознает и удаляет загрязнители, отображая информацию на LCD-экране в реальном времени. Работает тихо в ночном режиме.",
                specs: { "Фильтр": "HEPA H13 + Угольный", "Площадь": "до 40 м²", "Управление": "Пульт, Dyson Link App", "Функции": "Очистка, Охлаждение", "Вращение": "350°", "Вес": "4.65 кг" }
            },
            {
                id: 4, name: "Smeg Espresso Machine", category: "kitchen", price: 180000, oldPrice: null,
                image: "https://cdn.entero.ru/mp@2x/77/e2/77e2bbce525230cd6cc4ffa1137f0dde.jpg",
                badge: "Design",
                desc: "Эспрессо-кофемашина в стиле 50-х годов. Идеальное сочетание итальянского дизайна и современных технологий. Приготовьте настоящий эспрессо или капучино с густой пенкой благодаря профессиональному давлению 15 бар. Термоблок обеспечивает быстрый нагрев воды до идеальной температуры.",
                specs: { "Давление": "15 Бар", "Тип": "Рожковая", "Капучинатор": "Ручной (паровая трубка)", "Корпус": "Нержавеющая сталь", "Объем бака": "1 л", "Страна": "Италия" }
            },
            {
                id: 5, name: "Samsung Bespoke Fridge", category: "kitchen", price: 850000, oldPrice: 940000,
                image: "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/bespoke/rf23bb8600qlaa/RF23BB8600QL_01_Stainless_Steel_SCOM.jpg?$product-details-jpg$?$product-details-jpg$",
                badge: "SALE",
                desc: "Холодильник, который подстраивается под вас. Система Bespoke позволяет менять цвета и фактуру внешних панелей, чтобы идеально вписать технику в интерьер вашей кухни. Технология Metal Cooling сохраняет свежесть продуктов дольше, удерживая холод внутри даже при частом открывании дверцы.",
                specs: { "Объем": "350 л", "Система": "Full No Frost", "Особенность": "Сменные панели", "Компрессор": "Инверторный", "Шум": "35 дБ (Тихий)", "Класс": "A+" }
            },
            {
                id: 6, name: "Sonos One Gen 2", category: "smart", price: 110000, oldPrice: null,
                image: "https://m.media-amazon.com/images/I/71dJ0HXTD0L._AC_SL1500_.jpg",
                badge: null,
                desc: "Компактная умная колонка с мощным звуком, заполняющим комнату. Идеально подходит для кухни или ванной благодаря влагозащите. Поддерживает Apple AirPlay 2 и голосовое управление. Можно объединить две колонки в стереопару или подключить к саундбару Sonos для домашнего кинотеатра.",
                specs: { "Подключение": "Wi-Fi, Ethernet, AirPlay 2", "Влагозащита": "Есть (устойчив к пару)", "Микрофоны": "Дальнего поля", "Аудио": "2 цифровых усилителя", "Габариты": "161x119 мм" }
            }
        ];

        const initialReviews = [
            { id: "review-1", userId: "user-azamat", name: "Азамат К.", rating: 5, text: "Замок Yale - топ. Работает с HomeKit.", product: "Yale Linus Smart Lock", productId: 1, photo: "", status: "approved", verifiedPurchase: true, createdAt: "2026-08-30" },
            { id: "review-2", userId: "user-elena", name: "Елена С.", rating: 5, text: "Робот спасение от шерсти. Карта точная.", product: "Roborock S7 MaxV Ultra", productId: 2, photo: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=200&auto=format&fit=crop", status: "approved", verifiedPurchase: true, createdAt: "2026-08-28" },
            { id: "review-3", userId: "user-dmitry", name: "Дмитрий В.", rating: 2, text: "Доставка опоздала на 2 дня. Упаковка была помята, но холодильник цел.", product: "Samsung Bespoke Fridge", productId: 5, photo: "", status: "approved", verifiedPurchase: true, createdAt: "2026-08-24" },
            { id: "review-4", userId: "user-alina", name: "Алина М.", rating: 5, text: "Smeg - украшение кухни. Кофе варит вкусный.", product: "Smeg Espresso Machine", productId: 4, photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=200&auto=format&fit=crop", status: "approved", verifiedPurchase: true, createdAt: "2026-08-21" }
        ];

        const PRODUCT_IMAGE_PLACEHOLDER = "https://placehold.co/600x400/ffffff/34145c?text=No+Photo";

        const app = {
            cart: [],
            isProcessingPayment: false,
            isVip: false,
            currentPaymentMethod: 'Карта',
            currentFilter: 'all',
            searchQuery: '',
            editingReviewId: null,

            initTheme: function () {
                const savedTheme = localStorage.getItem('app-theme') || localStorage.getItem('ds_theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                this.setTheme(savedTheme || systemTheme, false);
                if (!savedTheme) {
                    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                        this.setTheme(event.matches ? 'dark' : 'light', false);
                    });
                }
            },

            setTheme: function (theme, persist = true) {
                const nextTheme = ['light', 'dark', 'oled'].includes(theme) ? theme : 'light';
                document.documentElement.dataset.theme = nextTheme;
                document.documentElement.style.colorScheme = nextTheme;
                document.querySelectorAll('[data-theme-option]').forEach(option => {
                    const isActive = option.dataset.themeOption === nextTheme;
                    option.classList.toggle('active', isActive);
                    option.setAttribute('aria-pressed', String(isActive));
                });
                if (persist) localStorage.setItem('app-theme', nextTheme);
            },

            init: function () {
                this.initTheme();
                this.renderRoleSwitcher();
                this.loadCart();
                this.loadDb();
                this.renderProducts('all');
                this.renderReviews();
                this.populateProductSelect();
                this.updateCartUI();
                this.initReviewPicker();
                document.getElementById('revProduct')?.addEventListener('change', event => this.selectReviewForEdit(event.target.value));
                document.getElementById('catalogSearch')?.addEventListener('input', event => this.searchProducts(event.target.value));
                document.querySelectorAll('.modal-overlay').forEach(modal => modal.addEventListener('click', event => {
                    if (event.target === modal) this.closeModal(modal.id);
                }));
                document.addEventListener('keydown', event => {
                    if (event.key === 'Escape') document.querySelectorAll('.modal-overlay.active').forEach(modal => this.closeModal(modal.id));
                });
            },

            loadCart: function () {
                try {
                    const saved = JSON.parse(localStorage.getItem('ds_cart') || '[]');
                    this.cart = Array.isArray(saved) ? saved : [];
                } catch (error) { this.cart = []; }
            },

            saveCart: function () {
                localStorage.setItem('ds_cart', JSON.stringify(this.cart));
            },

            renderRoleSwitcher: function () {
                const switcher = document.getElementById('roleSwitcher');
                if (!switcher) return;
                let session = null;
                try { session = JSON.parse(sessionStorage.getItem('ds_admin_session') || 'null'); } catch (error) { session = null; }
                if (session?.role !== 'admin') {
                    switcher.hidden = true;
                    return;
                }
                switcher.hidden = false;
                switcher.innerHTML = '<a class="role-option active" href="admin.html">Админ</a><button class="role-option" data-click="app.switchToUser()" type="button">Пользователь</button>';
            },

            switchToUser: function () {
                sessionStorage.removeItem('ds_admin_session');
                this.renderRoleSwitcher();
                this.showToast('Режим пользователя включён');
            },

            escapeHTML: function (value) {
                return String(value ?? '')
                    .replaceAll('&', '&amp;')
                    .replaceAll('<', '&lt;')
                    .replaceAll('>', '&gt;')
                    .replaceAll('"', '&quot;')
                    .replaceAll("'", '&#039;');
            },

            getProductImage: function (product) {
                return product && product.image ? product.image : PRODUCT_IMAGE_PLACEHOLDER;
            },

            getProductById: function (id) {
                return db.find(x => String(x.id) === String(id));
            },

            getCategoryTitle: function (cat) {
                const names = { smart: 'Smart Home', kitchen: 'Кухня', cleaning: 'Уборка' };
                return names[cat] || cat || 'Другое';
            },

            specsToText: function (specs) {
                return Object.entries(specs || {}).map(([key, value]) => `${key}: ${value}`).join('\n');
            },

            specsFromText: function (text) {
                const specs = {};
                String(text || '').split('\n').forEach(line => {
                    const separatorIndex = line.indexOf(':');
                    if (separatorIndex === -1) return;
                    const key = line.slice(0, separatorIndex).trim();
                    const value = line.slice(separatorIndex + 1).trim();
                    if (key && value) specs[key] = value;
                });
                return specs;
            },

            refreshCatalog: function () {
                this.renderProducts(this.currentFilter || 'all');
                this.populateProductSelect();
                this.updateCartUI();
            },

            renderProducts: function (cat) {
                this.currentFilter = cat || this.currentFilter || 'all';
                const products = db.filter(p => {
                    const matchesCategory = this.currentFilter === 'all' || p.category === this.currentFilter;
                    const query = this.searchQuery.toLowerCase();
                    const matchesSearch = !query || `${p.name} ${p.desc || ''} ${this.getCategoryTitle(p.category)}`.toLowerCase().includes(query);
                    return matchesCategory && matchesSearch;
                });
                document.querySelectorAll('.filter-btn').forEach(button => {
                    button.classList.toggle('active', button.dataset.category === this.currentFilter);
                });
                const resultCount = document.getElementById('catalogResultCount');
                if (resultCount) resultCount.textContent = `Найдено товаров: ${products.length}`;

                document.getElementById('productsContainer').innerHTML = products.length ? products.map(p => {
                    const safeName = this.escapeHTML(p.name);
                    const safeCategory = this.escapeHTML(this.getCategoryTitle(p.category));
                    const safeImage = this.escapeHTML(this.getProductImage(p));
                    const safeBadge = this.escapeHTML(p.badge || '');
                    const price = Number(p.price || 0);
                    const oldPrice = p.oldPrice ? Number(p.oldPrice) : null;
                    const priceHtml = oldPrice
                        ? `<div class="product-price-block"><span class="price-old">${oldPrice.toLocaleString()} ₸</span><span class="price-current">${price.toLocaleString()} ₸</span></div>`
                        : `<div class="product-price-block"><span class="price-current">${price.toLocaleString()} ₸</span></div>`;

                    return `
                        <div class="product-card" onclick="app.openProductModal(${p.id})">
                            ${p.badge ? `<div class="sale-badge">${safeBadge}</div>` : ''}
                            <div class="product-image-wrapper"><img src="${safeImage}" alt="${safeName}" onerror="this.src='${PRODUCT_IMAGE_PLACEHOLDER}'"></div>
                            <div class="product-info">
                                <span class="product-cat">${safeCategory}</span>
                                <div class="product-title">${safeName}</div>
                                ${priceHtml}
                                <div class="card-buttons">
                                    <div class="btn-details">Детали</div>
                                    <button class="btn" onclick="event.stopPropagation(); app.addToCart(${p.id})">В корзину</button>
                                </div>
                            </div>
                        </div>`;
                }).join('') : '<div class="empty-catalog">По выбранным условиям товары не найдены.</div>';
            },

            filterProducts: function (cat, btn) {
                this.currentFilter = cat || 'all';
                this.renderProducts(this.currentFilter);
            },

            searchProducts: function (query) {
                this.searchQuery = String(query || '').trim();
                this.renderProducts(this.currentFilter);
            },

            clearSearch: function () {
                const input = document.getElementById('catalogSearch');
                if (input) input.value = '';
                this.searchProducts('');
            },

            openProductModal: function (id) {
                const p = this.getProductById(id);
                if (!p) return this.showToast('Товар не найден');

                let specs = '';
                for (let k in (p.specs || {})) {
                    specs += `<tr><td class="specs-key">${this.escapeHTML(k)}</td><td class="specs-val">${this.escapeHTML(p.specs[k])}</td></tr>`;
                }
                if (!specs) specs = '<tr><td class="specs-key">Характеристики</td><td class="specs-val">Не указаны</td></tr>';

                const price = Number(p.price || 0);
                let priceDisplay = `<div class="pd-price-lg">${price.toLocaleString()} ₸</div>`;
                if (p.oldPrice) {
                    priceDisplay = `<div style="display:flex;gap:15px;align-items:baseline;margin-bottom:20px;"><div style="text-decoration:line-through;color:var(--text-muted);font-size:20px;">${Number(p.oldPrice).toLocaleString()} ₸</div><div class="pd-price-lg">${price.toLocaleString()} ₸</div></div>`;
                }

                document.getElementById('productModalBody').innerHTML = `
                    <div class="pd-grid">
                        <div class="pd-image-col"><img src="${this.escapeHTML(this.getProductImage(p))}" alt="${this.escapeHTML(p.name)}" onerror="this.src='${PRODUCT_IMAGE_PLACEHOLDER}'"></div>
                        <div class="pd-info-col">
                            <div class="pd-header"><div class="pd-title-lg">${this.escapeHTML(p.name)}</div>${priceDisplay}</div>
                            <div class="pd-description">${this.escapeHTML(p.desc || '')}</div>
                            <h4 style="margin-bottom:15px; color:white;">Характеристики</h4>
                            <table class="specs-table">${specs}</table>
                            <div class="pd-actions">
                                <button class="btn" onclick="app.addToCart(${p.id}); app.closeModal('productModal')">Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById('productModal').classList.add('active');
                document.body.classList.add('modal-open');
            },

            closeModal: function (id) {
                const modal = document.getElementById(id);
                if (modal) {
                    modal.classList.remove('active');
                    if (!document.querySelector('.modal-overlay.active')) document.body.classList.remove('modal-open');
                }
            },

            addToCart: function (id) {
                const p = this.getProductById(id);
                if (!p) return this.showToast('Товар не найден');
                const existing = this.cart.find(item => String(item.id) === String(id));
                if (existing) existing.quantity = Number(existing.quantity || 1) + 1;
                else this.cart.push({ ...p, quantity: 1, tId: Date.now() + Math.random() });
                this.saveCart();
                this.updateCartUI();
                this.showToast('✅ Добавлено');
            },

            removeFromCart: function (tId) {
                this.cart = this.cart.filter(x => String(x.tId) !== String(tId));
                this.saveCart();
                this.updateCartUI();
            },

            changeCartQuantity: function (tId, delta) {
                const item = this.cart.find(entry => String(entry.tId) === String(tId));
                if (!item) return;
                item.quantity = Math.max(1, Number(item.quantity || 1) + delta);
                this.saveCart();
                this.updateCartUI();
            },

            clearCart: function () {
                this.cart = [];
                this.saveCart();
                this.updateCartUI();
                this.showToast('Корзина очищена');
            },

            updateCartUI: function () {
                const itemCount = this.cart.reduce((sum, item) => sum + Number(item.quantity || 1), 0);
                document.getElementById('headerCartCount').innerText = itemCount;
                let html = this.cart.length ? this.cart.map(i => `<div class="cart-item"><div><div>${this.escapeHTML(i.name)}</div><div style="font-size:12px; color:var(--text-muted);">${Number(i.price || 0).toLocaleString()} ₸ × ${i.quantity || 1}</div><div class="cart-quantity"><button onclick="app.changeCartQuantity('${i.tId}', -1)" aria-label="Уменьшить количество">−</button><strong>${i.quantity || 1}</strong><button onclick="app.changeCartQuantity('${i.tId}', 1)" aria-label="Увеличить количество">+</button></div></div><button onclick="app.removeFromCart('${i.tId}')" class="cart-remove" aria-label="Удалить товар">✕</button></div>`).join('') : '<p style="text-align:center;color:var(--text-muted)">Пусто</p>';
                document.getElementById('cartItemsList').innerHTML = html;
                let total = this.cart.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
                if (this.isVip) {
                    total *= 0.8;
                    document.getElementById('cartVipLine').style.display = 'flex';
                    document.getElementById('cartDiscount').innerText = '-20%';
                } else {
                    document.getElementById('cartVipLine').style.display = 'none';
                }
                document.getElementById('cartTotal').innerText = total.toLocaleString() + ' ₸';
                document.querySelectorAll('.final-price').forEach(e => e.innerText = total.toLocaleString() + ' ₸');
            },

            toggleCart: function () {
                document.getElementById('cartModal').classList.toggle('active');
                document.body.classList.toggle('modal-open', document.getElementById('cartModal').classList.contains('active'));
            },

            openCheckout: function () {
                if (!this.cart.length) return this.showToast('Пусто');
                this.toggleCart();
                document.getElementById('checkoutModal').classList.add('active');
                document.body.classList.add('modal-open');
                document.getElementById('stepContacts').classList.add('active');
                document.getElementById('stepPayment').classList.remove('active');
                document.getElementById('stepSuccess').classList.remove('active');
            },

            goToPayment: function () {
                const name = document.getElementById('clientName').value.trim();
                const phone = document.getElementById('clientPhone').value.trim();
                if (name.length < 2 || phone.length < 5) return this.showToast('Укажите имя и корректный телефон');
                const delivery = document.getElementById('deliveryMethod').value;
                localStorage.setItem('ds_checkout_contact', JSON.stringify({ name, phone, delivery }));
                document.getElementById('stepContacts').classList.remove('active');
                document.getElementById('stepPayment').classList.add('active');
            },

            backToContacts: function () {
                document.getElementById('stepPayment').classList.remove('active');
                document.getElementById('stepContacts').classList.add('active');
            },

            selectPayment: function (type, btn) {
                this.currentPaymentMethod = type === 'card' ? 'Банковская карта' : (type === 'kaspi' ? 'Kaspi QR' : 'Halyk QR');
                document.querySelectorAll('.pay-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('payContentCard').style.display = type === 'card' ? 'block' : 'none';
                document.getElementById('payContentQR').style.display = type !== 'card' ? 'block' : 'none';
                if (type !== 'card') {
                    document.getElementById('qrTitle').innerText = type === 'kaspi' ? 'Kaspi QR' : 'Halyk QR';
                    document.getElementById('qrImage').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DS-${type.toUpperCase()}-PAY`;
                    setTimeout(() => { if (document.getElementById('checkoutModal').classList.contains('active')) this.finishPayment(); }, 4000);
                }
            },

            processPayment: function (btn) {
                if (this.isProcessingPayment || !this.cart.length) return this.showToast('Корзина пуста');
                this.isProcessingPayment = true;
                btn.disabled = true;
                btn.classList.add('is-loading');
                btn.innerText = 'Обработка...';
                setTimeout(() => { this.finishPayment(); btn.disabled = false; btn.classList.remove('is-loading'); btn.innerText = 'Оплатить'; this.isProcessingPayment = false; }, 1500);
            },

            finishPayment: function () {
                const date = new Date().toLocaleString('ru-RU');
                const orderId = Math.floor(Math.random() * 1000000000);

                let rawTotal = this.cart.reduce((a, b) => a + Number(b.price || 0) * Number(b.quantity || 1), 0);
                let discount = this.isVip ? rawTotal * 0.2 : 0;
                let finalTotal = rawTotal - discount;

                let itemsHtml = '';
                this.cart.forEach(i => { itemsHtml += `<div class="receipt-row"><span>${this.escapeHTML(i.name)} × ${i.quantity || 1}</span><span>${(Number(i.price || 0) * Number(i.quantity || 1)).toLocaleString()}</span></div>`; });

                let pricingHtml = this.isVip
                    ? `<div class="receipt-row"><span>Подытог:</span><span>${rawTotal.toLocaleString()}</span></div><div class="receipt-row"><span>Скидка VIP:</span><span>-${discount.toLocaleString()}</span></div><div class="receipt-line"></div><div class="receipt-row receipt-bold"><span>ИТОГО:</span><span>${finalTotal.toLocaleString()} ₸</span></div>`
                    : `<div class="receipt-row receipt-bold"><span>ИТОГО:</span><span>${finalTotal.toLocaleString()} ₸</span></div>`;

                document.getElementById('receiptPlace').innerHTML = `
                    <div class="receipt-container">
                        <div class="receipt-header"><h2>DoubleSmart LLP</h2><p>БИН 240540008899</p><p>г. Астана, ул. Туран 42</p><p class="receipt-bold">ЧЕК ПРОДАЖИ №${orderId}</p></div>
                        <div class="receipt-line"></div>${itemsHtml}<div class="receipt-line"></div>${pricingHtml}<div class="receipt-line"></div>
                        <div class="receipt-row"><span>Оплата:</span><span>${this.currentPaymentMethod}</span></div>
                        <div class="receipt-row"><span>Дата:</span><span>${date}</span></div>
                        <div class="receipt-footer"><p>ФИСКАЛЬНЫЙ ЧЕК</p><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=CHECK-${orderId}" class="receipt-qr"><p>Спасибо за покупку!</p></div>
                    </div>
                `;
                const purchasedItemIds = this.cart.map(item => item.id);
                this.cart = [];
                this.updateCartUI();
                let currentUser = null;
                try { currentUser = JSON.parse(localStorage.getItem('ds_current_user') || 'null'); } catch (error) { currentUser = null; }
                const savedOrders = (() => {
                    try { return JSON.parse(localStorage.getItem('ds_orders') || '[]'); } catch (error) { return []; }
                })();
                const checkoutContact = JSON.parse(localStorage.getItem('ds_checkout_contact') || '{}');
                if (!currentUser?.id && checkoutContact.name) {
                    currentUser = { id: `guest-${orderId}`, name: checkoutContact.name, role: 'user' };
                    localStorage.setItem('ds_current_user', JSON.stringify(currentUser));
                }
                savedOrders.unshift({ id: `order-${orderId}`, userId: currentUser?.id || 'guest', status: 'COMPLETED', items: purchasedItemIds, total: finalTotal, createdAt: date });
                localStorage.setItem('ds_orders', JSON.stringify(savedOrders));
                window.appDatabase?.backup('orders', savedOrders);
                document.getElementById('stepPayment').classList.remove('active');
                document.getElementById('stepSuccess').classList.add('active');
            },

            checkLoyalty: function () {
                if (document.getElementById('contractInput').value.toUpperCase().startsWith('DS')) {
                    this.isVip = true;
                    document.getElementById('loyaltySuccess').style.display = 'block';
                    this.updateCartUI();
                }
            },

            getReviews: function () {
                try {
                    const saved = JSON.parse(localStorage.getItem('ds_reviews'));
                    return Array.isArray(saved) ? saved : initialReviews;
                } catch (error) {
                    return initialReviews;
                }
            },

            getReviewUser: function () {
                try { return JSON.parse(localStorage.getItem('ds_current_user') || 'null'); } catch (error) { return null; }
            },

            getReviewEligibility: function () {
                const user = this.getReviewUser();
                if (!user || !user.id) return { user: null, products: [], reason: 'auth' };
                if (user.role === 'admin') return { user, products: [], reason: 'admin' };
                let orders = [];
                try { orders = JSON.parse(localStorage.getItem('ds_orders') || '[]'); } catch (error) { orders = []; }
                const products = orders
                    .filter(order => String(order.userId) === String(user.id) && ['completed', 'paid', 'COMPLETED', 'PAID'].includes(order.status))
                    .flatMap(order => order.items || [order.productId || order.item_id])
                    .map(item => String(item));
                return { user, products: [...new Set(products)], reason: products.length ? 'eligible' : 'purchase' };
            },

            initReviewPicker: function () {
                document.querySelectorAll('#ratingPicker [data-rating]').forEach(button => {
                    button.addEventListener('click', () => {
                        document.getElementById('revRating').value = button.dataset.rating;
                        document.querySelectorAll('#ratingPicker [data-rating]').forEach(item => item.classList.toggle('active', Number(item.dataset.rating) <= Number(button.dataset.rating)));
                    });
                });
                document.querySelector('#ratingPicker [data-rating="5"]')?.click();
            },

            selectReviewForEdit: function (productName) {
                const eligibility = this.getReviewEligibility();
                const review = this.getReviews().find(item => String(item.userId) === String(eligibility.user?.id) && item.product === productName);
                this.editingReviewId = review?.id || null;
                if (review) {
                    document.getElementById('revText').value = review.text || '';
                    document.getElementById('revRating').value = Number(review.rating || 5);
                    document.querySelectorAll('#ratingPicker [data-rating]').forEach(item => item.classList.toggle('active', Number(item.dataset.rating) <= Number(review.rating || 5)));
                    document.querySelector('#reviewForm button[type="submit"]').innerText = 'Обновить отзыв';
                }
            },

            renderReviews: function () {
                const reviews = this.getReviews().filter(review => !review.status || review.status === 'approved');
                const average = reviews.length ? reviews.reduce((sum, review) => sum + Number(review.rating || String(review.rating || '').split('★').length - 1), 0) / reviews.length : 0;
                document.getElementById('reviewsSummary').innerHTML = `<div class="reviews-score"><strong>${average.toFixed(1)}</strong><span class="stars">${'★'.repeat(Math.round(average))}${'☆'.repeat(5 - Math.round(average))}</span><small>${reviews.length} отзывов</small></div><span class="verified-summary">✓ Только проверенные покупки</span>`;
                document.getElementById('reviewsList').innerHTML = reviews.length ? reviews.map(r => this.createReviewHTML(r)).join('') : '<div class="review-notice">Пока нет опубликованных отзывов.</div>';
                const eligibility = this.getReviewEligibility();
                const form = document.getElementById('reviewForm');
                const notice = document.getElementById('reviewNotice');
                if (eligibility.reason === 'eligible') {
                    form.hidden = false;
                    notice.hidden = true;
                    document.getElementById('revName').value = eligibility.user.name || eligibility.user.email || '';
                } else {
                    form.hidden = true;
                    notice.hidden = false;
                    notice.textContent = eligibility.reason === 'admin'
                        ? 'Администраторы не могут публиковать отзывы через этот интерфейс.'
                        : 'Оставить отзыв могут только покупатели, оформившие и оплатившие заказ.';
                    if (eligibility.reason === 'auth') {
                        notice.innerHTML += ' <button class="review-login-button" data-click="app.demoBuyerLogin()" type="button">Войти как покупатель</button>';
                    }
                }
            },

            demoBuyerLogin: function () {
                localStorage.setItem('ds_current_user', JSON.stringify({ id: 'demo-buyer', name: 'Демо-покупатель', role: 'user' }));
                localStorage.setItem('ds_orders', JSON.stringify([{ id: 'demo-order-1', userId: 'demo-buyer', status: 'COMPLETED', items: [1] }]));
                this.renderReviews();
                this.populateProductSelect();
                this.showToast('Вы вошли как покупатель. Доступен отзыв на Yale Linus Smart Lock');
            },

            createReviewHTML: function (r) {
                const imgHTML = r.photo ? `<img src="${this.escapeHTML(r.photo)}" class="review-img-preview" onclick="window.open('${this.escapeHTML(r.photo)}')">` : '';
                const rating = Number(r.rating) || String(r.rating || '').split('★').length - 1;
                return `<article class="review-card"><div class="review-card-head"><div><strong>${this.escapeHTML(r.name)}</strong><small>${this.escapeHTML(r.createdAt || 'Недавно')}</small></div><span class="verified-badge">✓ Проверенная покупка</span></div><div class="stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div><span class="review-product">${this.escapeHTML(r.product)}</span><p>“${this.escapeHTML(r.text)}”</p>${imgHTML}</article>`;
            },

            populateProductSelect: function () {
                const select = document.getElementById('revProduct');
                if (!select) return;
                select.innerHTML = '<option disabled selected value="">Выберите купленный товар</option>';
                const eligibility = this.getReviewEligibility();
                const reviews = this.getReviews();
                db.filter(p => eligibility.products.includes(String(p.id))).forEach(p => {
                    const hasReview = reviews.some(review => String(review.userId) === String(eligibility.user?.id) && String(review.productId) === String(p.id));
                    const o = document.createElement('option');
                    o.value = p.name;
                    o.dataset.productId = p.id;
                    o.innerText = p.name;
                    if (hasReview) o.innerText += ' — редактировать отзыв';
                    select.appendChild(o);
                });
            },

            handleFileSelect: function (input) {
                if (input.files[0]) document.getElementById('fileName').innerText = input.files[0].name;
            },

            submitReview: function (e) {
                e.preventDefault();
                const eligibility = this.getReviewEligibility();
                if (eligibility.reason !== 'eligible') return this.showToast('Отзыв доступен только после оплаченной покупки');
                const name = document.getElementById('revName').value;
                const prod = document.getElementById('revProduct').value;
                const text = document.getElementById('revText').value;
                const rating = Number(document.getElementById('revRating').value);
                const product = db.find(item => item.name === prod);
                const file = document.getElementById('revPhoto').files[0];
                if (!product || !eligibility.products.includes(String(product.id))) return this.showToast('Этот товар отсутствует среди ваших оплаченных покупок');
                if (text.trim().length < 10) return this.showToast('Отзыв должен содержать минимум 10 символов');
                const reviews = this.getReviews();
                const existingIndex = reviews.findIndex(review => String(review.userId) === String(eligibility.user.id) && String(review.productId) === String(product.id));
                if (existingIndex !== -1 && !this.editingReviewId) return this.showToast('Вы уже оставляли отзыв на этот товар');
                if (this.editingReviewId) {
                    const existing = reviews.find(review => String(review.id) === String(this.editingReviewId));
                    if (existing) Object.assign(existing, { rating, text: text.trim(), status: 'pending', updatedAt: new Date().toLocaleDateString('ru-RU') });
                } else {
                    reviews.unshift({ id: `review-${Date.now()}`, userId: eligibility.user.id, name, product: prod, productId: product.id, rating, text: text.trim(), photo: file ? URL.createObjectURL(file) : '', status: 'pending', verifiedPurchase: true, createdAt: new Date().toLocaleDateString('ru-RU') });
                }
                localStorage.setItem('ds_reviews', JSON.stringify(reviews));
                window.appDatabase?.backup('reviews', reviews);
                this.renderReviews();
                this.populateProductSelect();
                e.target.reset();
                this.editingReviewId = null;
                document.querySelector('#reviewForm button[type="submit"]').innerText = 'Опубликовать отзыв';
                this.showToast('Отзыв отправлен на модерацию');
            },

            openAddProductModal: function () {
                document.getElementById('addProductModal').classList.add('active');
            },

            submitNewProduct: function (e) {
                e.preventDefault();
                const name = document.getElementById('newProdName').value.trim();
                const cat = document.getElementById('newProdCat').value;
                const price = parseInt(document.getElementById('newProdPrice').value, 10);
                const image = document.getElementById('newProdImage').value.trim();
                const desc = document.getElementById('newProdDesc').value.trim();
                const specs = this.specsFromText(document.getElementById('newProdSpecs').value);

                if (!name || !cat || !price || !image) return this.showToast('Заполните название, категорию, цену и фото');

                db.push({
                    id: Date.now(),
                    name,
                    category: cat,
                    price,
                    oldPrice: null,
                    image,
                    badge: 'NEW',
                    desc,
                    specs
                });

                this.saveDb();
                this.currentFilter = 'all';
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                document.querySelector('.filter-btn')?.classList.add('active');
                this.refreshCatalog();
                this.closeModal('addProductModal');
                e.target.reset();
                this.showToast('Товар добавлен');
            },

            openEditProductModal: function (id) {
                const p = this.getProductById(id);
                if (!p) return this.showToast('Товар не найден');
                this.closeModal('productModal');

                document.getElementById('editProdId').value = p.id;
                document.getElementById('editProdName').value = p.name || '';
                document.getElementById('editProdCat').value = p.category || 'smart';
                document.getElementById('editProdPrice').value = p.price || '';
                document.getElementById('editProdImage').value = p.image || '';
                document.getElementById('editProdDesc').value = p.desc || '';
                document.getElementById('editProdSpecs').value = this.specsToText(p.specs || {});
                document.getElementById('editPhotoName').innerText = 'Можно вставить URL или выбрать файл';
                document.getElementById('editProdPhotoFile').value = '';
                document.getElementById('editPhotoPreview').src = this.getProductImage(p);
                document.getElementById('editProductModal').classList.add('active');
            },

            previewEditProductPhoto: function (input) {
                const file = input.files && input.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                    document.getElementById('editPhotoPreview').src = reader.result;
                    document.getElementById('editPhotoName').innerText = file.name;
                };
                reader.readAsDataURL(file);
            },

            getSelectedEditPhoto: function () {
                const fileInput = document.getElementById('editProdPhotoFile');
                const file = fileInput.files && fileInput.files[0];
                if (!file) return Promise.resolve(document.getElementById('editProdImage').value.trim());

                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(new Error('Не удалось прочитать фото'));
                    reader.readAsDataURL(file);
                });
            },

            submitEditProduct: async function (e) {
                e.preventDefault();
                const id = document.getElementById('editProdId').value;
                const p = this.getProductById(id);
                if (!p) return this.showToast('Товар не найден');

                const newPrice = parseInt(document.getElementById('editProdPrice').value, 10);
                if (!newPrice || newPrice < 0) return this.showToast('Цена указана неверно');

                let selectedImage = '';
                try {
                    selectedImage = await this.getSelectedEditPhoto();
                } catch (err) {
                    return this.showToast(err.message);
                }

                p.name = document.getElementById('editProdName').value.trim() || p.name;
                p.category = document.getElementById('editProdCat').value;
                p.price = newPrice;
                p.image = selectedImage || p.image || PRODUCT_IMAGE_PLACEHOLDER;
                p.desc = document.getElementById('editProdDesc').value.trim();
                p.specs = this.specsFromText(document.getElementById('editProdSpecs').value);

                this.cart = this.cart.map(item => String(item.id) === String(p.id) ? { ...item, ...p, tId: item.tId } : item);
                this.saveDb();
                this.refreshCatalog();
                this.closeModal('editProductModal');
                e.target.reset();
                document.getElementById('editProdPhotoFile').value = '';
                this.showToast('Товар обновлён');
            },

            deleteProduct: function (id) {
                const p = this.getProductById(id);
                if (!p) return this.showToast('Товар не найден');
                const ok = confirm(`Удалить товар «${p.name}»?`);
                if (!ok) return;

                const index = db.findIndex(x => String(x.id) === String(id));
                if (index !== -1) db.splice(index, 1);
                this.cart = this.cart.filter(item => String(item.id) !== String(id));
                this.saveDb();
                this.closeModal('productModal');
                this.closeModal('editProductModal');
                this.refreshCatalog();
                this.showToast('Товар удалён');
            },

            saveDb: function () {
                localStorage.setItem('ds_db', JSON.stringify(db));
                window.appDatabase?.backup('products', db);
            },

            loadDb: function () {
                const saved = localStorage.getItem('ds_db');
                if (!saved) return;
                try {
                    const parsed = JSON.parse(saved);
                    db.length = 0;
                    parsed.forEach(p => db.push(p));
                } catch (err) {
                    console.warn('Не удалось загрузить каталог из localStorage', err);
                }
                window.appDatabase?.backup('products', db);
            },

            showToast: function (msg) {
                const t = document.createElement('div');
                t.className = 'toast';
                t.innerText = msg;
                document.body.appendChild(t);
                setTimeout(() => { t.classList.add('show'); }, 10);
                setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
            }
        };

        window.app = app;

        const style = document.createElement('style'); style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`; document.head.appendChild(style);
        window.onload = () => app.init();

document.addEventListener('click', function (event) {
    const target = event.target.closest('[data-click]');
    if (!target) return;
    event.preventDefault();
    Function('event', 'element', target.dataset.click)(event, target);
});

document.addEventListener('submit', function (event) {
    const target = event.target.closest('[data-submit]');
    if (!target) return;
    Function('event', 'element', target.dataset.submit)(event, target);
});

document.addEventListener('change', function (event) {
    const target = event.target.closest('[data-change]');
    if (!target) return;
    Function('event', 'element', target.dataset.change)(event, target);
});
