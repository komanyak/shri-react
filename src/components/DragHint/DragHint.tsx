import React from "react";
import styles from "./DragHint.module.css";
import {type HighlightStats} from "../../store/csvAnalyticsStore"

interface DragHintProps {
  isLoading: boolean;
   stats: HighlightStats | null;
}

export const DragHint: React.FC<DragHintProps> = ({ isLoading, stats }) => {
  return (
    <p className={styles.dragHint}>
      {isLoading
        ? "Идёт парсинг файла..."
        : stats
        ? "Готово!"
        : "или перетащите сюда"}
    </p>
  );
};
