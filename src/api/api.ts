interface GenerateReportParams {
  size: number;
  withErrors?: "on" | "off"; 
  maxSpend?: string;    
}

interface AggregateDataParams {
  rows: number;
  file: File;           
}

const API_BASE_URL = 'http://localhost:3000';  

// Функция для генерации отчета 
export const generateReport = async ({ size, withErrors = 'on', maxSpend = '1000' }: GenerateReportParams) => {
  const url = `${API_BASE_URL}/report?size=${size}&withErrors=${withErrors}&maxSpend=${maxSpend}`;

  try {
    const response = await fetch(url, { method: 'GET' });
    
    if (!response.ok) {
      throw new Error('Ошибка при генерации отчета');
    }
    
    const data = await response.blob();  
    return data;
  } catch (error) {
    console.error(error);
    return { error: 'Не удалось получить отчет' };
  }
};

// Функция для агрегации данных 
export const aggregateData = async ({ rows, file }: AggregateDataParams) => {
  const formData = new FormData();
  formData.append('file', file);

  // Формируем URL с параметром rows
  const url = `${API_BASE_URL}/aggregate?rows=${rows}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Ошибка при агрегации данных');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: 'Не удалось выполнить агрегацию' };
  }
};

