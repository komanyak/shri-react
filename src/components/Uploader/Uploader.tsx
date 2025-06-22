import React from "react";
import styles from "./Uploader.module.css";
import { DropZone } from "../DropZone/DropZone";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useFileUpload } from "../../services/useFileUpload";

export const Uploader: React.FC = () => {
  const {
    selectedFile,
    isLoading,
    stats,
    handleFilesSelected,
    handleSubmit,
  } = useFileUpload();

  return (
    <div className={styles.uploader}>
      <span className={styles.description}>
        Загрузите <b>csv</b> файл и получите <b>полную информацию</b> о нём за
        сверхнизкое время
      </span>
      <DropZone onFilesSelected={handleFilesSelected} />

      {selectedFile && !stats && (
        <SubmitButton
          onClick={handleSubmit}
          disabled={!selectedFile || isLoading}
        />
      )}
    </div>
  );
};
