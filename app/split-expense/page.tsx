"use client";

import { useState } from "react";

export default function SplitExpensePage() {
  const [amount, setAmount] = useState("");
  const [members, setMembers] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateSplit = () => {
    const totalAmount = Number(amount);
    const totalMembers = Number(members);

    if (!totalAmount || !totalMembers) return;

    setResult(totalAmount / totalMembers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Split Expense
        </h1>

        <input
          type="number"
          placeholder="Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="number"
          placeholder="Number of Members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={calculateSplit}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <h2 className="font-bold text-lg">
              Each Person Owes
            </h2>

            <p className="text-2xl font-bold mt-2">
              ₹{result.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}