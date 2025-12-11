"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import KasirNavbar from "../../components/kasirNavbar";
import Footer from "../../components/footer";

export default function KasirDashboard() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
 const menuItems = [
    {
      name: "Milky Strawberry",
      price: "18.000",
      img: "https://img.freepik.com/premium-photo/strawberry-bliss_1013369-114.jpg",
      tag: "Best Seller",
    },
    { name: "Milky Taro", price: "17.000", img: "https://static.vecteezy.com/system/resources/previews/007/953/378/large_2x/iced-taro-tea-with-milk-in-a-plastic-cup-photo.jpg", tag: "Favorite" },
    { name: "Milky Matcha", price: "19.000", img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg", tag: "New" },
    { name: "Milky Chocolate", price: "18.000", img: "https://img.freepik.com/premium-photo/iced-cocoa-latte-iced-chocolate-latte_282791-568.jpg?w=2000" },
    { name: "Milky Vanilla", price: "16.000", img: "https://tse3.mm.bing.net/th/id/OIP.bxO1-9jpSiM_1lGD9Kws3QHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Milky Mango", price: "20.000", img: "https://tse1.mm.bing.net/th/id/OIP.CECrxMKqVXx4xWGpaj-Y0AHaHa?cb=ucfimg2&ucfimg=1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3", tag: "Seasonal"},
    { name: "Milky Coffee", price: "21.000", img: "https://img.freepik.com/premium-photo/iced-coffee-with-milk-plastic-cup-wooden-table-coffee-shop_1015980-581377.jpg" },
    { name: "Milky Blueberry", price: "19.000", img: "https://i.pinimg.com/originals/b5/7a/48/b57a4883300d829e1f58f5ab1c4819c2.jpg", tag: "Limited" },
    { name: "Milky Oreo", price: "22.000", img: "https://149463714.cdn6.editmysite.com/uploads/1/4/9/4/149463714/s224081272926232501_p46_i1_w714.png" },
    { name: "Milky Avocado", price: "23.000", img: "https://mocktail.net/wp-content/uploads/2022/10/Avocado-Smoothie_2.jpg", tag: "Healthy"},
  ];



  return (
    <>
    <KasirNavbar />

      {/* === KONTEN DASHBOARD === */}
      <div className="mt-28 p-4">
        <form className="max-w-2xl mx-auto">
          <div className="flex shadow-xs rounded-base -space-x-0.5">

            {/* Button Kategori */}
            <button
              id="dropdown-button"
              type="button"
              onClick={() => setOpenCategory(!openCategory)}
              className="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none"
            >
              <svg
                className="w-4 h-4 me-1.5"
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
                  d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
                />
              </svg>
              All categories
              <svg
                className="w-4 h-4 ms-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Kategori */}
            {openCategory && (
              <div className="absolute mt-12 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 z-20">
                <ul className="p-2 text-sm text-body font-medium">
                  <li>
                    <button className="w-full text-left block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                      Milky
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                      Soda
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                      Ice Blend
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                      Topping
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Input Search */}
            <input
              type="search"
              id="search-dropdown"
              className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
              placeholder="Search for products"
              required
            />

            {/* Tombol Search */}
            <button
              type="button"
              className="inline-flex items-center text-white bg-pink-600 hover:bg-pink-700 box-border border border-transparent focus:ring-4 focus:ring-pink-300 shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none"
            >
              <svg
                className="w-4 h-4 me-1.5 text-white"
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
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </div>
        </form>
</div>


  {/* ================= MENU LIST ================= */}
      <section id="menu-list" className="mt-4">
        <div className="bg-pink-100 py-6">
          <div
            className="
            max-w-screen-xl mx-auto px-4 mt-6 
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
            gap-4 pb-16"
          >
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-pink-200 rounded-xl shadow 
              overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:scale-110 
              transition transform duration-300 p-2"
              >
                <img
                  src={item.img}
                  className="w-full aspect-square object-cover bg-pink-50 rounded-lg"
                />
                <div className="p-2">
                  {item.tag && (
                    <span className="inline-block mb-1 text-[10px] sm:text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}

                  <h3 className="text-sm sm:text-lg font-bold text-pink-700">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Rp {item.price}
                  </p>

                  <button
                    disabled
                    className="mt-2 w-full bg-pink-300 text-white 
          py-1 sm:py-2 rounded-lg opacity-60 cursor-not-allowed
          text-xs sm:text-sm"
                  ></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

  <Footer />
    </>


  );
}
