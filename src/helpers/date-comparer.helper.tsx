export const dateComparer = (fromDate: string, howManyDays: number) => {
  const publishedDate = new Date(fromDate);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference <= howManyDays;
};
