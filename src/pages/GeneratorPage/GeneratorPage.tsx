import React, { useState } from "react";

export const GeneratorPage: React.FC = () => {
  const [loading, setLoading] = useState(false); // Состояние для индикатора загрузки
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null); // Ссылка для скачивания файла

  const handleGenerateReport = async () => {
    setLoading(true); // Включаем лоадер
    setDownloadUrl(null); // Очищаем старую ссылку для скачивания, если она была

    try {
      const response = await fetch(
        "http://localhost:3000/report?size=0.1&withErrors=off&maxSpend=1000"
      );

      if (!response.ok) {
        throw new Error("Ошибка при генерации отчета");
      }

      // Для дебага: Логируем заголовки
      const contentDisposition = response.headers.get("Content-Disposition");
      console.log("Content-Disposition:", contentDisposition);

      // Прочитаем данные как Blob
      const blob = await response.blob();
      console.log(blob);

      // Создаем объект URL для скачивания
      const url = URL.createObjectURL(blob);
      console.log(url);

      setDownloadUrl(url); // Устанавливаем ссылку для скачивания
    } catch (error) {
      console.error("Ошибка при генерации отчета:", error);
    } finally {
      setLoading(false); // Выключаем лоадер
    }
  };

  return (
    <div>
      <h1>Генератор</h1>
      <p>Сгенерируйте готовый csv-файл нажатием одной кнопки</p>

      {/* Кнопка для начала генерации */}
      {!loading && !downloadUrl && (
        <button onClick={handleGenerateReport}>Начать генерацию</button>
      )}

      {/* Лоадер, показываем, если файл еще генерируется */}
      {loading && <p>Генерация файла... Пожалуйста, подождите.</p>}

      {/* Кнопка для скачивания, если файл готов */}
      {downloadUrl && (
        <a href={downloadUrl} download="report.csv">
          <button>Скачать</button>
        </a>
      )}
    </div>
  );
};
