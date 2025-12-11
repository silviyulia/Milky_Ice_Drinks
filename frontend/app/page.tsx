"use client";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import "./globals.css";
import "flowbite/dist/flowbite.css";
import Link from "next/link";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    {
      name: "Milky Strawberry",
      price: "18.000",
      img: "https://img.freepik.com/premium-photo/strawberry-bliss_1013369-114.jpg",
      tag: "Best Seller",
    },
    {
      name: "Milky Taro",
      price: "17.000",
      img: "https://static.vecteezy.com/system/resources/previews/007/953/378/large_2x/iced-taro-tea-with-milk-in-a-plastic-cup-photo.jpg",
      tag: "Favorite",
    },
    {
      name: "Milky Matcha",
      price: "19.000",
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg",
      tag: "New",
    },
    {
      name: "Milky Chocolate",
      price: "18.000",
      img: "https://img.freepik.com/premium-photo/iced-cocoa-latte-iced-chocolate-latte_282791-568.jpg?w=2000",
    },
    {
      name: "Milky Vanilla",
      price: "16.000",
      img: "https://tse3.mm.bing.net/th/id/OIP.bxO1-9jpSiM_1lGD9Kws3QHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Milky Mango",
      price: "20.000",
      img: "https://tse1.mm.bing.net/th/id/OIP.CECrxMKqVXx4xWGpaj-Y0AHaHa?cb=ucfimg2&ucfimg=1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag: "Seasonal",
    },
    {
      name: "Milky Coffee",
      price: "21.000",
      img: "https://img.freepik.com/premium-photo/iced-coffee-with-milk-plastic-cup-wooden-table-coffee-shop_1015980-581377.jpg",
    },
    {
      name: "Milky Blueberry",
      price: "19.000",
      img: "https://i.pinimg.com/originals/b5/7a/48/b57a4883300d829e1f58f5ab1c4819c2.jpg",
      tag: "Limited",
    },
    {
      name: "Milky Oreo",
      price: "22.000",
      img: "https://149463714.cdn6.editmysite.com/uploads/1/4/9/4/149463714/s224081272926232501_p46_i1_w714.png",
    },
    {
      name: "Milky Avocado",
      price: "23.000",
      img: "https://mocktail.net/wp-content/uploads/2022/10/Avocado-Smoothie_2.jpg",
      tag: "Healthy",
    },
  ];

  function handleLogout() {
    console.log("logout");
  }

  return (
    <>
      {/* ================= NAVBAR CUSTOMER ================= */}
      <nav className="bg-pink-600 fixed w-full z-20 top-0 start-0 border-b border-pink-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img src="/logoice.png" className="h-12" />
            <span className="self-center text-xl font-semibold text-white">
              Milky Ice Drinks
            </span>
          </div>

          {/* BUTTON RIGHT */}
          <div className="inline-flex md:order-2 space-x-3 md:space-x-0">
            {/* LOGIN BUTTON */}
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Login
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="inline-flex items-center p-2 w-9 h-9 justify-center 
        text-sm text-white rounded-lg md:hidden hover:bg-pink-700 
        focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:block md:w-auto">
            <ul className="font-medium flex space-x-8">
              <li>
                <a className="text-white hover:text-gray-200" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-200" href="#menu">
                  Menu
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-200" href="#promo">
                  Promo
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-200" href="#contact">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* MENU MOBILE */}
          {openMenu && (
            <div className="w-full md:hidden mt-4 bg-pink-500 rounded-lg shadow-md">
              <ul className="flex flex-col p-4 space-y-3 text-white">
                <li>
                  <a href="#" className="block hover:text-gray-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="block hover:text-gray-200">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#promo" className="block hover:text-gray-200">
                    Promo
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block hover:text-gray-200">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <div className="pt-28 pb-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-md border border-pink-200">
            {/* carousel */}
            <div className="h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[420px] w-full">
              <Carousel slide={true}>
                <img
                  src="https://img.freepik.com/premium-photo/cold-soft-drinks-beverage_845014-13133.jpg"
                  className="object-cover w-full h-full"
                />
                <img
                  src="https://img.freepik.com/premium-photo/milkshakes-with-whipped-cream-cherry-topjpg-digital-art-illustration_783299-1016.jpg"
                  className="object-cover w-full h-full"
                />
                <img
                  src="https://i.pinimg.com/originals/61/25/ad/6125adb9797919a434cfc402ccde32e4.jpg"
                  className="object-cover w-full h-full"
                />
              </Carousel>
            </div>
          </div>

          <h2 className="text-center text-3xl font-bold text-pink-700 mt-8">
            Milky Ice Drinks Menu
          </h2>

          <p className="text-center text-gray-500 mt-2">
            Fresh • Creamy • Affordable • Lovely
          </p>
        </div>
      </div>

      {/* ================= MENU LIST ================= */}
      <section id="menu">
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

      {/* ================= KATAGORI ================= */}
      <section className="max-w-screen-xl mx-auto px-4 mt-10">
        <h2 className="text-center text-3xl font-bold text-pink-700">
          Kategori Minuman 🥤
        </h2>

        <p className="text-center text-gray-500 mt-1">
          Pilih sesuai selera kamu!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-pink-500 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-3 text-2xl text-pink-500 font-semibold tracking-tight leading-8">
              Ice Blend
            </h5>
            <p className="text-gray-700">
              Minuman segar yang diblender sesuai dengan rasa favoritmu, dan
              tambahan topping seperti Oreo, Seres, dan Jeli.{" "}
            </p>
          </a>
          <a
            href="#"
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-pink-500 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-3 text-2xl text-pink-500 font-semibold tracking-tight leading-8">
              With Milk
            </h5>
            <p className="text-gray-700">
              Segarnya minuman berpadu dengan susu full cream, cocok untuk
              pecinta rasa creamy.
            </p>
          </a>
          <a
            href="#"
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-pink-500 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-3 text-2xl text-pink-500 font-semibold tracking-tight leading-8">
              Soda{" "}
            </h5>
            <p className="text-gray-700">
              Minuman berkarbonasi yang menyegarkan, cocok untuk menemani
              aktivitas sehari-hari.
            </p>
          </a>
        </div>
      </section>

      {/* ================= PROMO SECTION ================= */}
      <section id="promo" className="max-w-screen-xl mx-auto px-4 mt-16">
        <h2 className="text-center text-3xl font-bold text-pink-700">
          Promo Hari Ini 💗
        </h2>

        <p className="text-center text-gray-500 mt-1">
          Nikmati diskon spesial & paket bundling!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* CARD PROMO */}
          <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">Promo Valentine</h3>
            <p className="mt-2 text-sm">
              Beli 2 Milky Strawberry Gratis 1 topping!
            </p>
            <span className="block mt-4 text-sm bg-white/20 px-3 py-1 rounded-full w-max">
              Berlaku hingga: 14 Februari
            </span>
          </div>

          <div className="bg-gradient-to-br from-pink-300 to-pink-500 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">Diskon 20%</h3>
            <p className="mt-2 text-sm">Untuk semua varian Milky Matcha.</p>
            <span className="block mt-4 text-sm bg-white/20 px-3 py-1 rounded-full w-max">
              Hanya hari ini!
            </span>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">Paket Bundling</h3>
            <p className="mt-2 text-sm">3 Cup Mix Any Flavor cuma Rp 45.000!</p>
            <span className="block mt-4 text-sm bg-white/20 px-3 py-1 rounded-full w-max">
              Limited Time!
            </span>
          </div>
        </div>
      </section>

      {/* ================= KONTAK SECTION ================= */}
      <section id="contact" className="bg-pink-50 mt-20 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-pink-700">
            Kontak & Lokasi 📍
          </h2>

          <p className="text-center text-gray-600 mt-2">
            Hubungi kami untuk pemesanan & informasi lainnya
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* CONTACT INFO */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                📞 WhatsApp:
                <a
                  href="https://wa.me/6281234567890"
                  className="text-pink-600 font-semibold ml-2"
                >
                  0812-3456-7890
                </a>
              </p>

              <p className="text-lg">
                📍 Alamat:
                <span className="text-gray-700 font-medium ml-1">
                  Tg.Sengkuang atas No.26 Batu ampar, Kota Batam.
                </span>
              </p>

              <p className="text-lg">
                🕒 Jam Buka:
                <span className="ml-2 text-pink-600 font-semibold">
                  10:00 - 22:00
                </span>
              </p>

              <p className="text-lg">
                📧 Email:
                <span className="ml-2 text-gray-700 font-medium">
                  milkyicedrinks@gmail.com
                </span>
              </p>
            </div>

            {/* GOOGLE MAP IFRAME */}
            <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26426.94292319071!2d103.98403783219406!3d1.1797867552774237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989f9a1da6449%3A0x27ff497db30fc125!2sBatu%20Ampar%2C%20Batam%20City%2C%20Riau%20Islands%2C%20Indonesia!5e1!3m2!1sen!2sus!4v1765449834977!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-pink-600 text-white py-6 text-center mt-10">
        <p className="font-medium">Milky Ice Drinks © 2025</p>
        <p className="text-sm text-pink-200 mt-1">Fresh & sweet everyday 💗</p>
        <p className="text-sm text-pink-200 mt-1"> by silvi yulia</p>
      </footer>
    </>
  );
}
