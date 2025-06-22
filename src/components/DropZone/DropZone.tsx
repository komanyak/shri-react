import React, { useCallback, useState } from "react";
import styles from "./DropZone.module.css";
import { useCsvAnalyticsStore } from "../../store/csvAnalyticsStore";
import { FileUploadButton } from "../FileUploadButton/FileUploadButton";
import { DragHint } from "../DragHint/DragHint";

interface DropZoneProps {
  onFilesSelected: (files: File[]) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const { isLoading, stats } = useCsvAnalyticsStore();

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const files = Array.from(e.dataTransfer.files);
      onFilesSelected(files);
    },
    [onFilesSelected]
  );

  return (
    <div
      className={`${styles.dropZone} ${isDragging ? styles.dragging : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={styles.uploadContainer}>
        <FileUploadButton
          isLoading={isLoading}
          stats={stats}
          onFilesSelected={onFilesSelected}
        />
        <DragHint isLoading={isLoading} stats={stats} />
      </div>
    </div>
  );
};
