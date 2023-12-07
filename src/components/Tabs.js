// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-gradient-to-t from-cyan-100 to-cyan-200">
      <div className="container">
        <div className="w-3/6 md:w-full">
          <Image src="/logo-text.png"  alt="My Image" width={300} height={200} className="p-5" />
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
                <div>
                  <p className="text-gray-500">Vai trò: </p>
                  <p className="text-black"></p>
                </div>
                <div>
                  <p className="text-gray-500">Ngành nghề: </p>
                  <p className="text-black"></p>
                </div>
              </div>
            )}
            {activeTab === "Mẫu phong cách" && <div><div>
                <div>
                  <p className="text-gray-500">Vai trò: </p>
                  <p className="text-black"></p>
                </div>
                <div>
                  <p className="text-gray-500">Ngành nghề: </p>
                  <p className="text-black"></p>
                </div>
              </div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
