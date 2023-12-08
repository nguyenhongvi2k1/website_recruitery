// pages/about.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

const TemplatePage = (category) => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    // console.log(category)
    console.log("category: ", router.query.category);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/join/${router.query.category}`
        );
        console.log(response);

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Chạy một lần khi component được tạo

  return (
    <div>
      <Header />
      <div className="bg-white w-full">
        {" "}
        <div className="flex justify-center flex-wrap pt-10 mb-5 flex-col	m-auto	">
          <div className="m-auto">
            <Image
              src="/logo-text.png"
              alt="My Image"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="container p-5 text-center">
          {data ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {data.map((data) => (
                <div className="border-2 rounded-lg border-slate-400 shadow-2xl relative">
                  <Image
                    src={data.image_data}
                    alt="My Image"
                    width={500}
                    height={200}
                  />
                  <div className=" absolute top-0 left-0 w-full h-full flex items-end justify-center">
                    <p className="bg-white text-sm text-black font-normal">
                      {data.role} {data.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps({ query }) {
  return {
    props: {
      query,
    },
  };
}

export default TemplatePage;
