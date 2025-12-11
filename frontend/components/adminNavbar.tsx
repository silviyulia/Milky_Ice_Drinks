"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(true); // default sidebar terbuka

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <aside className="bg-teal-600 fixed left-0 top-0 h-screen w-64 border-r border-teal-700 shadow-md flex flex-col">
      {/* LOGO */}
      <div
        onClick={() => router.push("/admin")}
        className="flex items-center space-x-3 cursor-pointer p-4 border-b border-teal-700"
      >
        <img src="/logoice.png" className="h-12" />
        <span className="self-center text-lg font-bold text-white">
          Milky Ice Drink- Admin
        </span>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4">
        <ul className="flex flex-col space-y-4 font-medium text-white">
          <li>
            <a href="/admin" className="block hover:text-gray-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/produk" className="block hover:text-gray-200">
              Produk
            </a>
          </li>
          <li>
            <a href="/admin/transaksi" className="block hover:text-gray-200">
              Transaksi
            </a>
          </li>
          <li>
            <a href="/admin/profile" className="block hover:text-gray-200">
              Profile
            </a>
          </li>
        </ul>
      </nav>

      {/* LOGOUT BUTTON */}
      <div className="p-4 border-t border-teal-700">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 hover:shadow-md transition-all"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}