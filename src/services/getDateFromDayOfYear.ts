export  const getDateFromDayOfYear = (dayOfYear: number): string => {
    const year = new Date().getFullYear();
    const date = new Date(year, 0, dayOfYear);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
  };