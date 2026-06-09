export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="text-2xl font-bold">🏠 SplitNest</h1>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Create Room
        </button>
      </nav>

      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">
          Expense Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Expenses</h3>
            <p className="text-3xl font-bold">₹12,500</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">You Owe</h3>
            <p className="text-3xl font-bold text-red-500">
              ₹850
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">You Are Owed</h3>
            <p className="text-3xl font-bold text-green-500">
              ₹1,200
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">
            Recent Expenses
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>🍕 Pizza Night</span>
              <span>₹600</span>
            </div>

            <div className="flex justify-between">
              <span>🛒 Groceries</span>
              <span>₹2,300</span>
            </div>

            <div className="flex justify-between">
              <span>💡 Electricity Bill</span>
              <span>₹1,500</span>
            </div>

            <div className="flex justify-between">
              <span>🌐 WiFi Recharge</span>
              <span>₹800</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}