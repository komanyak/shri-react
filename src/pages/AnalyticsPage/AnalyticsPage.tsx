import React from "react";
import { Uploader } from "../../components/Uploader/Uploader";
import { HighlightsList } from "../../components/HighlightsList/HighlightsList";
import { useCsvAnalyticsStore } from "../../store/csvAnalyticsStore";
import styles from "./AnalyticsPage.module.css";

export const AnalyticsPage: React.FC = () => {
  const stats = useCsvAnalyticsStore((state) => state.stats);
  const error = useCsvAnalyticsStore((state) => state.error);

  return (
    <div>
      <Uploader />

      <div className={styles.highlightsContainer}>
        {!stats && (
          <span>
            Здесь появятся <br />
            хайлайты
          </span>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {stats && <HighlightsList />}
      </div>
    </div>
  );
};
