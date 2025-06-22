const API_BASE_URL = "http://localhost:3000";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("files", file);

  const response = await fetch(`${API_BASE_URL}/aggregate?rows=10000`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok || !response.body) {
    throw new Error("Ошибка отправки файла или получения данных");
  }

  return response.body.getReader();
};
