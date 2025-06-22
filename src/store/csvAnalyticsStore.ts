import { create } from "zustand";

export interface HighlightStats {
  total_spend_galactic: number;
  rows_affected: number;
  less_spent_at: number;
  big_spent_at: number;
  big_spent_value: number;
  average_spend_galactic: number;
  big_spent_civ: string;
  less_spent_civ: string;
}

interface CsvAnalyticsState {
  stats: HighlightStats | null;
  isLoading: boolean;
  error: string | null;

  setStats: (stats: HighlightStats) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
  
}
export const useCsvAnalyticsStore = create<CsvAnalyticsState>((set) => ({
  stats: null,
  isLoading: false,
  error: null,
  setStats: (stats) => set({ stats }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set({ stats: null, isLoading: false, error: null }),
}));
