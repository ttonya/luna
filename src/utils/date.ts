const monthes = [
  "Jan",
  "Fed",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = monthes[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day + 1}`;
};
