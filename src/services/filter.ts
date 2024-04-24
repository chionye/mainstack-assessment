/** @format */

const isToday = (date: string) => {
  const today = new Date();
  const todayDateString = today.toISOString().slice(0, 10);
  return date === todayDateString;
};

const getDatesOfMonth = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth();
  const currentDate: number = today.getDate();

  const dates: string[] = [];
  for (let day = 1; day <= currentDate; day++) {
    const date: Date = new Date(year, month, day);
    const formattedDate: string = date.toISOString().slice(0, 10);
    dates.push(formattedDate);
  }
  return dates;
};

const getDatesOfLastThreeMonths = () => {
  const today: Date = new Date();
  const dates: string[] = [];

  for (let i = 0; i < 3; i++) {
    const month: number = today.getMonth() - i;
    const year: number = today.getFullYear();
    const daysInMonth: number = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date: Date = new Date(year, month, day);
      const formattedDate: string = date.toISOString().slice(0, 10);
      dates.push(formattedDate);
    }
  }

  dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return dates;
};

const getDateRange = (data: any, startDate: string, endDate: string) => {
  const filteredTransactions = data.filter((transaction: any) => {
    const currentDate: Date = new Date(transaction.date);
    return (
      currentDate >= new Date(startDate) && currentDate <= new Date(endDate)
    );
  });
  return filteredTransactions;
};

const isWithinLastSevenDays = (date: string) => {
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const transactionDate = new Date(date);
  return transactionDate >= sevenDaysAgo && transactionDate <= today;
};

const matchTransactionTypes = (
  transactions: any,
  transactionTypesToCheck: string[]
) => {
  const matchingTransactions = transactions.filter((transaction: any) =>
    transactionTypesToCheck.includes(transaction.type)
  );

  return matchingTransactions;
};

const matchTransactionStatus = (transactions: any, statusToCheck: string[]) => {
  const matchingTransactions = transactions.filter((transaction: any) =>
    statusToCheck.includes(transaction.status.toLowerCase())
  );

  return matchingTransactions;
};

export const filterData = (
  transactions: any,
  dateRange: string,
  startDate: string | undefined,
  endDate: string | undefined,
  trans_type: string[],
  trans_status: string[]
) => {
  const result = new Set();

  if (dateRange) {
    if (dateRange.toLocaleLowerCase() === "today") {
      const todayData = transactions.find((item: any) =>
        isToday(item.date)
      );
      if (todayData) {
        result.add(todayData);
      }
    }
    if (dateRange.toLocaleLowerCase() === "last 7 days") {
      const lastSevenDays = transactions.filter((item: any) =>
        isWithinLastSevenDays(item.date)
      );
      if (lastSevenDays.length > 0) {
        lastSevenDays.forEach((item: any) => result.add(item));
      }
    }
    if (dateRange.toLocaleLowerCase() === "this month") {
      const lastMonthDates = getDatesOfMonth().slice(0, -1);
      const lastMonthTransactions = transactions.filter((item: any) =>
        lastMonthDates.includes(item.date)
      );
      if (lastMonthTransactions.length > 0) {
        lastMonthTransactions.forEach((item: any) => result.add(item));
      }
    }
    if (dateRange.toLocaleLowerCase() === "last 3 months") {
      const lastThreeMonthsDates = getDatesOfLastThreeMonths();
      const lastThreeMonthsTransactions = transactions.filter((item: any) =>
        lastThreeMonthsDates.includes(item.date)
      );
      if (lastThreeMonthsTransactions.length > 0) {
        lastThreeMonthsTransactions.forEach((item: any) => result.add(item));
      }
    }
  }
  if (startDate && endDate) {
    const start = new Date(startDate).toUTCString();
    const end = new Date(endDate).toUTCString();
    const transactionsInRange = getDateRange(transactions, start, end);
    if (transactionsInRange.length > 0) {
      transactionsInRange.forEach((item:any) => result.add(item));
    }
  }
  if (trans_type.length > 0) {
    const transaction_type = trans_type.map((item) =>
      item === "Withdrawals"
        ? item.replace("s", "").toLocaleLowerCase()
        : item.replace(" ", "_").toLocaleLowerCase()
    );
    console.log(transaction_type);
    const matchingTransactions = matchTransactionTypes(
      transactions,
      transaction_type
    );
    if (matchingTransactions.length > 0) {
      matchingTransactions.forEach((item: any) => result.add(item));
    }
  }
  if (trans_status.length > 0) {
    const matchingTransactions = matchTransactionStatus(
      transactions,
      trans_status
    );
    if (matchingTransactions.length > 0) {
      matchingTransactions.forEach((item: any) => result.add(item));
    }
  }
  console.log(result);

  return Array.from(result);
};
