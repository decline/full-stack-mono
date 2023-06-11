export const sortDates = (a: { date: string }, b: { date: string }) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
};
