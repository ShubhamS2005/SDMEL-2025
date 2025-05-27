import React from "react";
import Navbar from "./Navbar";
import { studentItems } from "./CommitteeItems";
import Footer from "./footer/Footer";

const StudentCommittee = () => {
  return (
    <>
      <div>
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="pt-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[#f07c00]">STUDENT'S </span>
            <span className="text-[#0d5d77]">COMMITTEE</span>
          </h1>
        </div>
        <div className="max-w-7xl w-full mx-auto pt-10 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8">
          {studentItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 hover:bg-gray-200 hover:translate-y-1 p-5 rounded-md shadow-xl cursor-pointer transition-all duration-300 w-full sm:w-[90%] md:w-[250px] lg:w-[280px] flex flex-col items-center"
            >
              <img
                className="rounded-full shadow-xl h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover transition-transform duration-300 hover:scale-105"
                src={item.photo}
                alt={item.name}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div className="pt-5 text-center">
                <h1 className="text-lg sm:text-xl font-bold pb-2 text-[#0d5d77] hover:text-[#f07c00]">
                  {item.name}
                </h1>
                <p className="text-sm sm:text-base font-medium pb-2 text-gray-600">
                  {item.Branch}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-400">
                  {item.Batch}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default StudentCommittee;
