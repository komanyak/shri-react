import React from "react";
import { HighlightItem } from "../HighlightItem/HighlightItem";
import styles from "./HighlightsList.module.css"; // Импортируем стили

interface Highlight {
  id: number;
  value: string | number;
  description: string;
}

interface HighlightsListProps {
  highlights: Highlight[];
}

export const HighlightsList: React.FC<HighlightsListProps> = ({ highlights }) => {
  if (highlights.length === 0) {
    return <p>Здесь появятся хайлайты</p>;
  }

  return (
    <div className={styles.highlightsList}>
      {highlights.map((highlight) => (
        <HighlightItem
          key={highlight.id}
          value={highlight.value}
          description={highlight.description}
        />
      ))}
    </div>
  );
};


