import React from "react";
import { HistoryList } from "../../components/HistoryList/HistoryList";
import styles from "./HistoryPage.module.css";
import { Button } from "../../components/Button/Button";
import { useHistoryStore } from "../../store/historyStore"; 

export const HistoryPage: React.FC = () => {
  const clear = useHistoryStore((state) => state.clear);

  const handleClear = () => {
    clear();
  };
  
  return (
    <div className={styles.historyPage}>
      <HistoryList />
      <Button className={styles.clearButton} onClick={handleClear}>
        Очистить все
      </Button>
    </div>
  );
};
