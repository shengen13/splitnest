export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-10">🏠 SplitNest</h1>

        <nav className="space-y-4">
          <div className="p-3 rounded-lg bg-gray-100 cursor-pointer">
            Dashboard
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            Rooms
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            Expenses
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            Settlements
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            Profile
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Dashboard
          </h2>

          <button className="bg-black text-white px-4 py-2 rounded-lg">
            + Add Expense
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Expenses</p>
            <h3 className="text-3xl font-bold mt-2">
              ₹12,500
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">You Owe</p>
            <h3 className="text-3xl font-bold text-red-500 mt-2">
              ₹850
            </h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">You Are Owed</p>
            <h3 className="text-3xl font-bold text-green-500 mt-2">
              ₹1,200
            </h3>
          </div>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">
            Recent Expenses
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span>🍕 Pizza Night</span>
              <span>₹600</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>🛒 Groceries</span>
              <span>₹2,300</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>💡 Electricity Bill</span>
              <span>₹1,500</span>
            </div>

            <div className="flex justify-between">
              <span>🌐 WiFi Recharge</span>
              <span>₹800</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}