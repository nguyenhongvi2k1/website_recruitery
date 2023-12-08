// components/Header.js
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState(null);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const fetchData = async () => {
      try {
        console.log(activeTab)
        const response = await fetch(`http://localhost:8000/website/${tab}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(activeTab)
        const response = await fetch(`http://localhost:8000/website/${activeTab}`);
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Chạy một lần khi component được tạo

  return (
    <div className="bg-gradient-to-t from-cyan-100 to-cyan-200">
      <div className="container">
        <div className="w-3/6 md:w-full">
          <Image
            src="/logo-text.png"
            alt="My Image"
            width={300}
            height={200}
            className="p-5"
          />
        </div>
        <div className="tabs">
          <div className="tab-list flex">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="tab-content">
            {/* Render content based on the activeTab */}
            {activeTab === "Mẫu theo công việc" && (
              <div>
                <div className="flex">
                  <p className="text-gray-500">Vai trò: </p>
                  {data?.map((item) => (
                    <div className="text-black">
                      <p className="pr-2 pl-2">{item.role}</p>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <p className="text-gray-500">Ngành nghề: </p>
                  {data?.map((item) => (
                  <Link href={`/template?category=${item.category}`} className="text-black pr-2 pl-2">{item.category}</Link>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "Mẫu phong cách" && (
              <div>
                <div className="flex">
                  <p className="text-gray-500">Vai trò: </p>
                  {data?.map((item) => (
                    <div className="text-black">
                      <p className="pr-2 pl-2">{item.role}</p>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <p className="text-gray-500">Ngành nghề: </p>
                  {data?.map((item) => (
                  <Link href={`/template?category=${item.category}`} className="text-black pr-2 pl-2">{item.category}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
