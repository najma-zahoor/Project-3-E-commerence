import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // fake login (store user)
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded font-semibold transition"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;