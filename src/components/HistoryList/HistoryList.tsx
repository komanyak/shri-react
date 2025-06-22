import React from "react";
import { HistoryItem } from "../HistoryItem/HistoryItem";
import styles from "./HistoryList.module.css";
import { useHistoryStore } from "../../store/historyStore"; 
import type { FileCheckResult } from "../../api/history"; 

export const HistoryList: React.FC = () => {
  const items = useHistoryStore((state) => state.items);

  return (
    <div className={styles.historyList}>
      {items.length === 0 ? (
        <p>История пуста</p>
      ) : (
        items.map((item: FileCheckResult) => (
          <HistoryItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
};
