// AnalyticsPage.tsx
import React, { useEffect, useState } from "react";
import { Uploader } from "../../components/Uploader/Uploader";
import { HighlightsList } from "../../components/HighlightsList/HighlightsList";
import styles from "./AnalyticsPage.module.css"; // Подключаем стили

interface Highlight {
  id: number;
  value: string | number;
  description: string;
}

export const AnalyticsPage: React.FC = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Эмуляция загрузки данных с сервера
    setTimeout(() => {
      const fetchedHighlights = [
        {
          id: 1,
          value: 1000,
          description: "Общие расходы в галактических кредитах",
        },
        {
          id: 2,
          value: "1 апреля",
          description: "День года с минимальными расходами",
        },
        {
          id: 3,
          value: 500,
          description: "Сумма ожидаемых доходов в следующем квартале",
        },
        { id: 4, value: "150", description: "Средняя стоимость 1 заказа" },
        { id: 5, value: 200, description: "Средняя сумма транзакции" },
        { id: 6, value: "10%", description: "Процент возвратов" },
        { id: 7, value: 30, description: "Среднее количество заказов в день" },
        { id: 8, value: "15% ", description: "Процент отказов от подписки" },
      ];
      setHighlights(fetchedHighlights);
      setLoading(false);
    }, 2000); // Задержка для имитации асинхронной загрузки
  }, []);

  return (
    <div>
      <Uploader />

      <div className={styles.highlightsContainer}>
        {loading ? (
          <p>Загрузка хайлайтов...</p>
        ) : (
          <HighlightsList highlights={highlights} />
        )}
      </div>
    </div>
  );
};
