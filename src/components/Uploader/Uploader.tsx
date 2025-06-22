import React, { useState } from "react";
import styles from "./Uploader.module.css";
import { DropZone } from "../DropZone/DropZone";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const Uploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log("Отправка файла:", selectedFile.name);
      // Здесь будет логика отправки на сервер
    }
  };

  return (
    <>
      <div className={styles.uploader}>
        <span className={styles.description}>
          Загрузите <b>csv</b> файл и получите <b>полную информацию</b> о нём за сверхнизкое
          время
        </span>
        <DropZone onFilesSelected={handleFilesSelected} />

        <SubmitButton onClick={handleSubmit} disabled={!selectedFile} />
      </div>
    </>
  );
};
