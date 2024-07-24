export function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("LogoDB", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("logos", { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export function saveLogo(id, base64String) {
  return openDatabase().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["logos"], "readwrite");
      const store = transaction.objectStore("logos");
      store.put({ id, data: base64String });

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
}

export function getLogo(id) {
  return openDatabase().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["logos"], "readonly");
      const store = transaction.objectStore("logos");
      const request = store.get(id);

      request.onsuccess = (event) => {
        resolve(event.target.result?.data);
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
}
