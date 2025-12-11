"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KasirNavbar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "Kasir");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <nav className="bg-pink-600 fixed w-full z-20 top-0 start-0 border-b border-pink-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img src="/logoice.png" className="h-12" />
          <span className="self-center text-xl font-semibold text-white">
            Milky Ice Drinks
          </span>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="inline-flex items-center space-x-3 md:order-2">
          {/* ADD BUTTON */}
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-white text-pink-600 font-semibold shadow hover:bg-pink-300 transition-all"
          >
            + ADD
          </button>

          {/* PROFILE ICON */}
          <div className="relative">
            <button
              onClick={() => setOpenProfile(!openProfile)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-700 text-white focus:outline-none"
            >
              {/* User Icon */}
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            {/* DROPDOWN PROFILE */}
            {openProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-30">
                <div className="px-4 py-2 text-gray-700 border-b">
                  <span className="font-semibold">{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-white rounded-base md:hidden hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
