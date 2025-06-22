import React from "react";
import styles from "./Modal.module.css";
import type { HighlightStats } from "../../store/csvAnalyticsStore";
import { getDateFromDayOfYear } from "../../services/getDateFromDayOfYear";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemDetails: HighlightStats;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  itemDetails,
}) => {
  if (!isOpen) return null;

  const highlights = [
    {
      id: 1,
      value: Math.round(itemDetails.total_spend_galactic),
      description: "общие расходы в галактических кредитах",
    },
    {
      id: 2,
      value: itemDetails.rows_affected,
      description: "количество обработанных записей",
    },
    {
      id: 3,
      value: getDateFromDayOfYear(itemDetails.less_spent_at),
      description: "день года с минимальными расходами",
    },
    {
      id: 4,
      value: itemDetails.big_spent_civ,
      description: "цивилизация с максимальными расходами",
    },
    {
      id: 5,
      value: itemDetails.less_spent_civ,
      description: "цивилизация с минимальными расходами",
    },
    {
      id: 6,
      value: getDateFromDayOfYear(itemDetails.big_spent_at),
      description: "день года с максимальными расходами",
    },
    {
      id: 7,
      value: Math.round(itemDetails.big_spent_value),
      description: "максимальная сумма расходов за день",
    },
    {
      id: 8,
      value: Math.round(itemDetails.average_spend_galactic),
      description: "средние расходы в галактических кредитах",
    },
  ];

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          <div className={styles.detailsList}>
            {highlights.map(({ id, value, description }) => (
              <div key={id} className={styles.detailItem}>
                <span className={styles.value}>{value}</span>
                <span className={styles.description}>{description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.resetButtonWrapper} onClick={onClose}>
          <button className={styles.resetButton}>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16663 20.3334L10.5 11.0001M10.5 11.0001L19.8333 1.66675M10.5 11.0001L1.16663 1.66675M10.5 11.0001L19.8333 20.3334"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
