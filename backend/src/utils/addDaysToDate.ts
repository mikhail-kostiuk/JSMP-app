function addDaysToDate(date: Date, days: number): Date {
  const result: Date = new Date(date);
  result.setDate(result.getDate() + days);

  return result;
}

export default addDaysToDate;
