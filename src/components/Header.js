// components/Header.js
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      <div className="container flex justify-between items-center ">
        <nav className="w-full ">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
            <div>
              <div className="grid grid-cols-4 gap-4 items-center justify-between py-3 md:py-5 ">
                <div className="w-max ">
                  <Link href='/'>                 <Image
                    src="/logo-text.png"
                    alt="My Image"
                    width={150}
                    height={100}
                  /></Link>
 
                </div>
                <div className="col-span-2 ">
                  <ul className="xl:flex hidden sm:hidden justify-evenly wrap ">
                    <li>
                      <Link href="/">Trang chủ</Link>
                    </li>
                    <li>
                      <Link href="/example_cv">Mẫu CV</Link>
                    </li>
                    <li>
                      <Link href="/background">Lý lịch của tôi</Link>
                    </li>
                    <li>
                      <Link href="/help">Hướng dẫn</Link>
                    </li>
                    <li>
                      <Link href="/example_ppt">Mẫu PPT</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row-reverse">
                  <div className="xl:flex hidden sm:hidden text-teal-400 font-medium rounded-lg border-2 p-2 border-teal-500 ">
                    <div className="lg:flex md:hidden sm:hidden">
                      {" "}
                      <Link href="/login" className="hover:text-teal-500 ">
                        Đăng nhập
                      </Link>
                    </div>
                    <p>/</p>
                    <div>
                      {" "}
                      <Link href="/register" className="hover:text-teal-500">
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                  <div className="lg:hidden flex flex-row-reverse">
                    {" "}
                    <button
                      className="  p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={` flex-1 justify-self-center pb-3 mt-8 md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="flex wrap flex-col items-center justify-center space-y-8  md:space-x-6 md:space-y-0">
                  <li>
                    <Link href="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link href="/example_cv">Mẫu CV</Link>
                  </li>
                  <li>
                    <Link href="/background">Lý lịch của tôi</Link>
                  </li>
                  <li>
                    <Link href="/help">Hướng dẫn</Link>
                  </li>
                  <li>
                    <Link href="/example_ppt">Mẫu PPT</Link>
                  </li>
                </ul>
                <div className="flex justify-center text-teal-400 font-medium  ">
                  <div className="flex rounded-lg border-2 p-2 border-teal-500 ">
                    {" "}
                    <Link href="/login" className="hover:text-teal-500">
                      Đăng nhập
                    </Link>
                    <p>/</p>
                    <Link href="/register" className="hover:text-teal-500">
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
       
      </div>
    </header>
  );
};

export default Header;
