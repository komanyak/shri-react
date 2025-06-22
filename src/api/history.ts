
import type { HighlightStats } from "../store/csvAnalyticsStore";

export interface FileCheckResult {
  id: string;
  fileName: string;
  dateChecked: string;
  success: boolean;
  stat: HighlightStats | null;  
}

export const createStorage = (key: string, storage = localStorage) => ({
  setItem(data: FileCheckResult) {
    const currentData = JSON.parse(storage.getItem(key) || "[]");
    currentData.push(data);
    storage.setItem(key, JSON.stringify(currentData));
  },

  getItems(): FileCheckResult[] {
    return JSON.parse(storage.getItem(key) || "[]");
  },

  removeItem(id: string) {
    let currentData = JSON.parse(storage.getItem(key) || "[]");
    currentData = currentData.filter((item: FileCheckResult) => item.id !== id);  // Удаляем запись по id
    storage.setItem(key, JSON.stringify(currentData));
  },

  clear() {
    storage.removeItem(key); 
  },
});


export const filesCheckResultsStorage = createStorage("filesCheckResults");