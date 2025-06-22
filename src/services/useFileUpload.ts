import { useState } from "react";
import { useCsvAnalyticsStore } from "../store/csvAnalyticsStore";
import { uploadFile } from "../api/serverApi";
import { useHistoryStore } from "../store/historyStore"; 

export const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { isLoading, stats, setIsLoading, setStats, setError, reset } =
    useCsvAnalyticsStore();

  const addItem = useHistoryStore((state) => state.addItem);

  const handleFilesSelected = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    reset();
    setIsLoading(true);

    let isSuccess = false;

    try {
      const reader = await uploadFile(selectedFile);
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.trim()) {
            try {
              const parsedData = JSON.parse(line);
              setStats(parsedData);
              isSuccess = true;
            } catch (err) {
              console.error("Ошибка парсинга данных:", err);
              isSuccess = false;
            }
          }
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Неизвестная ошибка");
      } else {
        setError("Неизвестная ошибка");
      }
    } finally {
      setIsLoading(false);

      const resultItem = {
        id: Date.now().toString(),
        fileName: selectedFile?.name || "",
        dateChecked: new Date().toLocaleDateString("ru-RU"),
        success: isSuccess,
        stat: stats!,
      };
      addItem(resultItem);
    }
  };

  return {
    selectedFile,
    isLoading,
    stats,
    handleFilesSelected,
    handleSubmit,
  };
};
