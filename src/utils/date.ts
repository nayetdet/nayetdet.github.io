export const formatDate = (date: string, locale: string): string => {
  const [year, month]: [string, string] = date.split('-') as [string, string];

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
  }).format(new Date(Number(year), Number(month) - 1));
};
