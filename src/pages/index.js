// pages/index.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const tabOptions = ["Mẫu theo công việc", "Mẫu phong cách"];

  return (
    <div>
      <Header />
      <Tabs tabs={tabOptions} />
      {/* Rest of your page content */}
      <div className="bg-white">
        {" "}
        <div className="container p-5 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
            <div className="border-2 rounded-lg border-slate-400 shadow-2xl">
              <Image
                src="/cv_template_33.png"
                alt="My Image"
                width={500}
                height={200}
              />
            </div>
          </div>
          <Pagination/>
          <div className="flex justify-center flex-wrap mt-10 mb-5 flex-col	m-auto	">
            <div className="m-auto">
              <Image
                src="/logo-text.png"
                alt="My Image"
                width={300}
                height={200}
              />
            </div>
            <p className="text-gray-500 text-2xl mt-5 mb-5">Những vị trí đáng tin cậy đang chờ bạn lựa chọn</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/cac-mau-logo-dep-nhat.jpg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Pepsi</p>
                    <p className="text-black text-sm">Phần cứng thông minh</p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg  rounded-lg bg-white shadow-2xl m-auto">
                    <Image
                      src="/logo-dep.png"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Bird</p>
                    <p className="text-black text-sm">Đầu tư và tài chính</p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/Logo-1.jpg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Tập đoàn</p>
                    <p className="text-black text-sm">Phần mềm máy tính</p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/images.png"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Skill</p>
                    <p className="text-black text-sm">Trí tuệ nhân tạo </p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/mau-logo-dep.jpg"
                      alt="My Image"
                      width={100}
                      height={100}
                      className="item-center"
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Apple</p>
                    <p className="text-black text-sm">Quản lý bán hàng</p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/logo-su-tu-Little-Lion.jpg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Little Lion</p>
                    <p className="text-black text-sm">
                      Phát triển điện thoại di động
                    </p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/image(4701).png"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Bluewolf</p>
                    <p className="text-black text-sm">Phát triển front end</p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
              <div className="rounded-lg bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center border-lg m-auto rounded-lg bg-white shadow-2xl">
                    <Image
                      src="/thiet-ke-logo-sao-kim-7-1.webp"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid items-center justify-start">
                    <p className="text-left font-bold text-black">Green</p>
                    <p className="text-black text-sm">Thương mại điện tử</p>
                  </div>
                </div>
                <hr className="mt-2" />
                <Link href="#" className="text-gray-500 text-sm">
                  Xin vị trí việc làm hot
                </Link>
              </div>
            </div>
          </div>
          <div className="m-5">
            <button className="rounded-full border bg-teal-500 p-2">Xem thêm doanh nghiệp</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
