"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { username: "admin", password: "123456", role: "admin" },
    { username: "kasir", password: "654321", role: "kasir" },
  ];

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("Username atau password salah");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", user.role);
    localStorage.setItem("username", user.username);

    router.push(user.role === "admin" ? "/admin" : "/kasir");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg flex overflow-hidden">
        {/* Left side */}
        <div className="hidden md:flex w-1/2 bg-pink-600 text-white flex-col justify-center p-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Milky Ice Drink!
          </h1>
          <p className="text-lg opacity-90">
            Silakan masuk untuk mulai menggunakan sistem
          </p>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <img
              src="/logoice.png"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6">
            Milky Ice Drink
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block font-medium mb-1">Username</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
