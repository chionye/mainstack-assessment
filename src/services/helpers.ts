/** @format */

import { format } from "date-fns";

export const generateUserInitials = (name: string) => {
  if (!name) {
    return "";
  }
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const sentenceCase = (word: string) => {
  if (!word) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatAmount = (amount: number) => {
  if (!amount) {
    return "0.00";
  }

  if (Number.isInteger(amount)) {
    return amount.toFixed(2);
  }

  return amount.toLocaleString();
};

export const generatePascalCase = (word: string) => {
  if (!word) {
    return "";
  }
  return word
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const filterAndSortGraphData = (data: any) => {
  if (!data) {
    return "";
  }
  return data
    .map((transaction: any) => ({
      date: new Date(transaction.date),
      amount: transaction.amount,
    }))
    .sort((a: any, b: any) => a.date.getTime() - b.date.getTime())
    .map((transaction: any, index: 0) => {
      if (index == 0 || data.length - 1 == index) {
        return {
          date: format(transaction.date, "MMM d yyyy"),
          amount: transaction.amount,
        };
      }
      if (index > 0 && index < data.length) {
        return {
          amount: transaction.amount,
        };
      }
    });
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};