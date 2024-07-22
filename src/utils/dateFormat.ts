// Fri, 28 Jun 2024 08:30:19 GMT -> 28 Jun

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const options = { day: "numeric", month: "short" };
  //@ts-ignore
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};
