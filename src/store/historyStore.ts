import { create } from "zustand";
import { filesCheckResultsStorage } from "../api/history"; 
import type { FileCheckResult } from "../api/history";

interface HistoryStore {
  items: FileCheckResult[];
  addItem: (item: FileCheckResult) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  load: () => void;
}

export const useHistoryStore = create<HistoryStore>((set) => ({
  items: filesCheckResultsStorage.getItems(),
  addItem: (item) =>
    set((state) => {
      filesCheckResultsStorage.setItem(item);
      return { items: filesCheckResultsStorage.getItems() };
    }),
  removeItem: (id) =>
    set(() => {
      filesCheckResultsStorage.removeItem(id);
      return { items: filesCheckResultsStorage.getItems() };
    }),
  clear: () =>
    set(() => {
      filesCheckResultsStorage.clear();
      return { items: [] };
    }),
  load: () =>
    set(() => ({ items: filesCheckResultsStorage.getItems() })),
}));
