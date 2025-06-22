import React from "react";
import { HighlightItem } from "../HighlightItem/HighlightItem";
import { useCsvAnalyticsStore } from "../../store/csvAnalyticsStore";
import styles from "./HighlightsList.module.css";
import { getDateFromDayOfYear } from "../../services/getDateFromDayOfYear";

export const HighlightsList: React.FC = () => {
  const stats = useCsvAnalyticsStore((state) => state.stats);

  if (!stats) {
    return <p>Здесь появятся хайлайты</p>;
  }

  const highlights = [
    {
      id: 1,
      value: Math.round(stats.total_spend_galactic),
      description: "общие расходы в галактических кредитах",
    },
    {
      id: 2,
      value: stats.rows_affected,
      description: "количество обработанных записей",
    },
    {
      id: 3,
      value: getDateFromDayOfYear(stats.less_spent_at),
      description: "день года с минимальными расходами",
    },
    {
      id: 4,
      value: stats.big_spent_civ,
      description: "цивилизация с максимальными расходами",
    },
    {
      id: 5,
      value: stats.less_spent_civ,
      description: "цивилизация с минимальными расходами",
    },
    {
      id: 6,
      value: getDateFromDayOfYear(stats.big_spent_at),
      description: "день года с максимальными расходами",
    },
    {
      id: 7,
      value: Math.round(stats.big_spent_value),
      description: "максимальная сумма расходов за день",
    },
    {
      id: 8,
      value: Math.round(stats.average_spend_galactic),
      description: "средние расходы в галактических кредитах",
    },
  ];

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
