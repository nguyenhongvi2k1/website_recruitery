// pages/index.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../components/Pagination";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const tabOptions = ["Mẫu theo công việc", "Mẫu phong cách"];
  const [job, setJob] = useState(null);
  const [template, setTemplate] = useState(null);
  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    // Gọi fetchData cho địa chỉ đầu tiên
    fetchData("http://localhost:8000/job", setJob);

    // Gọi fetchData cho địa chỉ thứ hai
    fetchData("http://localhost:8000/join", setTemplate);
  }, []); // Dependency array rỗng để chỉ gọi useEffect một lần khi component được mount

  // Render dữ liệu hoặc thông báo loading nếu dữ liệu chưa sẵn sàng
  return (
    <div>
      <Header />
      <Tabs tabs={tabOptions} />
      {/* Rest of your page content */}
      <div className="bg-white">
        {" "}
        <div className="container p-5 text-center">
          {template ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {template.map((template) => (
                <div className="border-2 rounded-lg border-slate-400 shadow-2xl relative">
                  <Image
                    src={template.image_data}
                    alt="My Image"
                    width={500}
                    height={200}
                  />
                  <div className=" absolute top-0 left-0 w-full h-full flex items-end justify-center">
                    <p className="bg-white text-sm text-black font-normal">
                      {template.role} {template.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <Pagination />
          <div className="flex justify-center flex-wrap mt-10 mb-5 flex-col	m-auto	">
            <div className="m-auto">
              <Image
                src="/logo-text.png"
                alt="My Image"
                width={300}
                height={200}
              />
            </div>
            <p className="text-gray-500 text-2xl mt-5 mb-5">
              Những vị trí đáng tin cậy đang chờ bạn lựa chọn
            </p>
            {job ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {job.map((item) => (
                  <div className="rounded-lg bg-white shadow-2xl">
                    <div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                          <Image
                            src={item.logo}
                            alt="My Image"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="grid items-center justify-start">
                          <p className="text-left font-bold text-black">
                            {item.title}
                          </p>
                          <p className="text-black text-sm">{item.demain}</p>
                        </div>
                      </div>
                      <hr className="mt-2" />
                      <Link href="#" className="text-gray-500 text-sm">
                        Xin vị trí việc làm hot
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="m-5">
            <button className="rounded-full border bg-teal-500 p-2">
              Xem thêm doanh nghiệp
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
