import React, { useState, useCallback } from "react";
import styles from "./FileUploadButton.module.css";
import {
  useCsvAnalyticsStore,
  type HighlightStats,
} from "../../store/csvAnalyticsStore";

interface FileUploadButtonProps {
  isLoading: boolean;
  stats: HighlightStats | null;
  onFilesSelected: (files: File[]) => void;
}

export const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  isLoading,
  stats,
  onFilesSelected,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelection = useCallback(
    (files: File[]) => {
      if (files.length > 0) {
        setSelectedFile(files[0]);
        onFilesSelected(files);
      }
    },
    [onFilesSelected]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files ? Array.from(e.target.files) : [];
      handleFileSelection(files);
    },
    [handleFileSelection]
  );

  const handleReset = useCallback(() => {
    setSelectedFile(null);
    onFilesSelected([]);
    useCsvAnalyticsStore.getState().reset();
  }, [onFilesSelected]);

  return (
    <div className={styles.fileSelection}>
      <input
        type="file"
        id="file-upload"
        className={styles.fileInput}
        accept=".csv"
        onChange={handleFileInput}
      />
      <label
        htmlFor="file-upload"
        className={`${styles.uploadButton} ${selectedFile ? styles.hasFile : ""} ${isLoading ? styles.loading : ""}`}
      >
        {isLoading ? (
          <div className={styles.loader} />
        ) : selectedFile ? (
          <span className={styles.fileName}>
            {selectedFile.name.length > 20
              ? `${selectedFile.name.substring(0, 17)}...`
              : selectedFile.name}
          </span>
        ) : (
          "Загрузить файл"
        )}
      </label>
      {selectedFile && !isLoading && (
        <button className={styles.resetButton} onClick={handleReset}>
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
      )}
    </div>
  );
};
