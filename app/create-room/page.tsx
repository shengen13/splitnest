"use client";

import { useEffect, useState } from "react";

export default function CreateRoomPage() {
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");

  const [rooms, setRooms] = useState<
    { name: string; description: string }[]
  >([]);

  useEffect(() => {
    const savedRooms = localStorage.getItem("rooms");

    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
    }
  }, []);

  const handleCreateRoom = () => {
    if (!roomName) return;

    const updatedRooms = [
      ...rooms,
      {
        name: roomName,
        description,
      },
    ];

    setRooms(updatedRooms);

    localStorage.setItem(
      "rooms",
      JSON.stringify(updatedRooms)
    );

    setRoomName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-xl shadow max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Create Room
        </h1>

        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Room Name"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={handleCreateRoom}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Create Room
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Your Rooms
        </h2>

        <div className="grid gap-4">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold">
                {room.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {room.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}