import { createContext, useState, useContext } from "react";

const TransactionContext = createContext();

export const useTransactions = () => {
  return useContext(TransactionContext);
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
