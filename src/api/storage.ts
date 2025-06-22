export const createStorage = (key: string, storage = localStorage) => ({
  setItem(data) {
    storage.setItem(key, JSON.stringify(data));
  },

  getItem() {
    return JSON.parse(storage.getItem(key));
  },
});

export const storage = createStorage();
