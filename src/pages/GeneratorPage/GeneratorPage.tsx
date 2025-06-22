import React, { useState } from "react";
import styles from "./GeneratorPage.module.css";

export const GeneratorPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsLoading(true);
    setError(null);
    setIsGenerated(false);

    try {
      const params = new URLSearchParams({
        size: "0.1", 
        withErrors: "off",
        maxSpend: "1000",
      });

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = `http://localhost:3000/report?${params}`;
      document.body.appendChild(iframe);
      
    
      iframe.onload = () => {
        setIsLoading(false);
        setIsGenerated(true);
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 5000); 
      };
      
      iframe.onerror = () => {
        setError("Ошибка при скачивании файла");
        setIsLoading(false);
        document.body.removeChild(iframe);
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Генератор</h1>
      <p className={styles.description}>
        Сгенерируйте готовый csv-файл нажатием одной кнопки
      </p>

      <button
        className={styles.generateButton}
        onClick={handleGenerate}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className={styles.loader} />
        ) : isGenerated ? (
          "Done!"
        ) : (
          "Начать генерацию"
        )}
      </button>

      {isGenerated && (
        <p className={styles.successMessage}>
          Файл сгенерирован! Если скачивание не началось автоматически, 
          <a 
            href={`http://localhost:3000/report?size=0.1&withErrors=off&maxSpend=1000`}
            download="report.csv"
          >
            нажмите здесь
          </a>
        </p>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};