import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="text-center bg-slate-900 p-10 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-blue-400">
          Welcome to Online Store
        </h1>

        {user && (
          <p className="mt-4 text-gray-300">
            Hello, {user.username}
          </p>
        )}

      </div>
    </div>
  );
}

export default Dashboard;