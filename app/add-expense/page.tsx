"use client";

import { useState, useEffect } from "react";

export default function AddExpensePage() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState<
    { title: string; amount: string }[]
  >([]);

  useEffect(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  const handleAddExpense = () => {
    if (!title || !amount) return;

    const updatedExpenses = [
      ...expenses,
      {
        title,
        amount,
      },
    ];

    setExpenses(updatedExpenses);

    localStorage.setItem(
      "expenses",
      JSON.stringify(updatedExpenses)
    );

    setTitle("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-xl shadow max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Add Expense
        </h1>

        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={handleAddExpense}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Add Expense
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Expense History
        </h2>

        <div className="grid gap-4">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow flex justify-between"
            >
              <span>{expense.title}</span>

              <span className="font-bold">
                ₹{expense.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}