export const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

export const isSameDay = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.toDateString() === d2.toDateString();
};

export const isInRange = (date, start, end) => {
  if (!start || !end) return false;
  return date >= start && date <= end;
};
export const getStartDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};