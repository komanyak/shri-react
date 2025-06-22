// HighlightItem.tsx
import React from 'react';
import styles from './HighlightItem.module.css'; // Импортируем стили

interface HighlightItemProps {
  value: string | number;
  description: string;
}

export const HighlightItem: React.FC<HighlightItemProps> = ({ value, description }) => {
  return (
    <div className={styles.highlightItem}>
      <div className={styles.highlightValue}>{value}</div>
      <div className={styles.highlightDescription}>{description}</div>
    </div>
  );
};


