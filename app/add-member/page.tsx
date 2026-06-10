"use client";

import { useEffect, useState } from "react";

export default function AddMemberPage() {
  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    const savedMembers = localStorage.getItem("members");

    if (savedMembers) {
      setMembers(JSON.parse(savedMembers));
    }
  }, []);

  const handleAddMember = () => {
    if (!memberName.trim()) return;

    const updatedMembers = [...members, memberName];

    setMembers(updatedMembers);

    localStorage.setItem(
      "members",
      JSON.stringify(updatedMembers)
    );

    setMemberName("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-xl shadow max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Add Member
        </h1>

        <input
          type="text"
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={handleAddMember}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Add Member
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Members
        </h2>

        <div className="grid gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow"
            >
              👤 {member}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}