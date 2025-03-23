import { useState } from "react";

export function useTransactions() {
  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);

    if (newTransaction.type === "income") {
      setTotalIncome((prev) => prev + newTransaction.amount);
      setBalance((prev) => prev + newTransaction.amount);
    } else {
      setTotalExpenses((prev) => prev + newTransaction.amount);
      setBalance((prev) => prev - newTransaction.amount);
    }
  };

  const handleDeleteTransaction = (id) => {
    const transactionToDelete = transactions.find((t) => t.id === id);

    if (transactionToDelete) {
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );

      if (transactionToDelete.type === "income") {
        setTotalIncome((prev) => prev - transactionToDelete.amount);
        setBalance((prev) => prev - transactionToDelete.amount);
      } else {
        setTotalExpenses((prev) => prev - transactionToDelete.amount);
        setBalance((prev) => prev + transactionToDelete.amount);
      }
    }
  };

  return {
    description,
    setDescription,
    amount,
    setAmount,
    type,
    setType,
    transactions,
    balance,
    totalIncome,
    totalExpenses,
    handleAddTransaction,
    handleDeleteTransaction,
  };
}
