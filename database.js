(function () {
    const DB_NAME = 'doublesmart-db';
    const DB_VERSION = 1;
    const STORES = ['products', 'reviews', 'users', 'orders'];

    function open() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = () => {
                const database = request.result;
                STORES.forEach(storeName => {
                    if (!database.objectStoreNames.contains(storeName)) {
                        database.createObjectStore(storeName, { keyPath: 'id' });
                    }
                });
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async function replace(storeName, records) {
        const database = await open();
        return new Promise((resolve, reject) => {
            const transaction = database.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            store.clear();
            records.forEach(record => store.put({ ...record, id: String(record.id) }));
            transaction.oncomplete = () => { database.close(); resolve(); };
            transaction.onerror = () => { database.close(); reject(transaction.error); };
        });
    }

    async function all(storeName) {
        const database = await open();
        return new Promise((resolve, reject) => {
            const request = database.transaction(storeName, 'readonly').objectStore(storeName).getAll();
            request.onsuccess = () => { database.close(); resolve(request.result); };
            request.onerror = () => { database.close(); reject(request.error); };
        });
    }

    window.appDatabase = {
        name: DB_NAME,
        stores: STORES,
        replace,
        all,
        backup(storeName, records) {
            if (!STORES.includes(storeName) || !Array.isArray(records)) return;
            replace(storeName, records).catch(error => console.warn(`IndexedDB: не удалось сохранить ${storeName}`, error));
        }
    };
}());
