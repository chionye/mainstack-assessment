import { filterData } from "../services/filter";

describe("filterData function", () => {
  const transactions = [
    {
      amount: 500,
      metadata: {
        name: "John Doe",
        type: "digital_product",
        email: "johndoe@example.com",
        quantity: 1,
        country: "Nigeria",
        product_name: "Rich Dad Poor Dad",
      },
      payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
      status: "successful",
      type: "deposit",
      date: "2022-03-03",
    },
    {
      amount: 400,
      metadata: {
        name: "Fibi Brown",
        type: "coffee",
        email: "fibibrown@example.com",
        quantity: 8,
        country: "Ireland",
      },
      payment_reference: "d28db158-0fc0-40cd-826a-4243923444f7",
      status: "successful",
      type: "deposit",
      date: "2022-03-02",
    },
    {
      amount: 350.56,
      metadata: {
        name: "Delvan Ludacris",
        type: "webinar",
        email: "johndoe@example.com",
        quantity: 1,
        country: "Kenya",
        product_name: "How to build an online brand",
      },
      payment_reference: "73f45bc0-8f41-4dfb-9cae-377a32b71d1e",
      status: "successful",
      type: "deposit",
      date: "2022-03-01",
    },
    {
      amount: 300,
      status: "successful",
      type: "withdrawal",
      date: "2024-03-01",
    },
    {
      amount: 300,
      metadata: {
        name: "Shawn kane",
        type: "webinar",
        email: "shawnkane@example.com",
        quantity: 1,
        country: "United Kingdom",
        product_name: "Support my outreach",
      },
      payment_reference: "c22055e5-8f47-4059-a1e9-51124d325992",
      status: "successful",
      type: "deposit",
      date: "2022-02-28",
    },
    {
      amount: 200,
      status: "successful",
      type: "withdrawal",
      date: "2024-03-24",
    },
    {
      amount: 200,
      metadata: {
        name: "Ada Eze",
        type: "webinar",
        email: "adaeze1@example.com",
        quantity: 1,
        country: "Nigeria",
        product_name: "Learn how to pitch your idea",
      },
      payment_reference: "5b2988d9-395e-4a91-984b-8b02f0d12df9",
      status: "successful",
      type: "deposit",
      date: "2024-02-20",
    },
  ];

  it("should return an empty array if no transactions match the filter criteria", () => {
    const filteredTransactions = filterData(
      transactions,
      "today",
      "",
      "",
      [],
      []
    );
    expect(filteredTransactions.length).toBe(0);
  });

  it("should filter transactions for today", () => {
    const filteredTransactions: any = filterData(
      transactions,
      "today",
      "",
      "",
      [],
      []
    );
    expect(filteredTransactions.length).toBe(0);
  });

  it("should filter transactions for the last 7 days", () => {
    const filteredTransactions = filterData(
      transactions,
      "last 7 days",
      "",
      "",
      [],
      []
    );
    expect(filteredTransactions.length).toBe(0);
    filteredTransactions.forEach((transaction: any) => {
      const transactionDate = new Date(transaction.date);
      const today = new Date();
      const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(transactionDate >= sevenDaysAgo && transactionDate <= today).toBe(
        true
      );
    });
  });

  it("should filter transactions for this month", () => {
    const filteredTransactions = filterData(
      transactions,
      "this month",
      "",
      "",
      [],
      []
    );
    expect(filteredTransactions.length).toBe(0);
    filteredTransactions.forEach((transaction: any) => {
      const transactionDate = new Date(transaction.date);
      const today = new Date();
      const firstDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );
      expect(
        transactionDate >= firstDayOfMonth && transactionDate <= today
      ).toBe(true);
    });
  });

  it("should filter transactions for the last 3 months", () => {
    const filteredTransactions = filterData(
      transactions,
      "last 3 months",
      "",
      "",
      [],
      []
    );
    expect(filteredTransactions.length).toBeGreaterThan(0);
    filteredTransactions.forEach((transaction: any) => {
      const transactionDate = new Date(transaction.date);
      const today = new Date();
      const threeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 3,
        1
      );
      expect(
        transactionDate >= threeMonthsAgo && transactionDate <= today
      ).toBe(true);
    });
  });

  it("should filter transactions based on transaction type", () => {
    const filteredTransactions = filterData(
      transactions,
      "",
      "",
      "",
      ["deposit"],
      []
    );
    expect(filteredTransactions.length).toBeGreaterThan(0);
    filteredTransactions.forEach((transaction: any) => {
      expect(transaction.type).toBe("deposit");
    });
  });

  it("should filter transactions based on transaction status", () => {
    const filteredTransactions = filterData(
      transactions,
      "",
      "",
      "",
      [],
      ["successful"]
    );
    expect(filteredTransactions.length).toBeGreaterThan(0);
    filteredTransactions.forEach((transaction: any) => {
      expect(transaction.status).toBe("successful");
    });
  });
});
