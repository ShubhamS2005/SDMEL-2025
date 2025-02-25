import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { studentItems } from "./CommitteeItems";
import Footer from "./footer/footer";

const StudentCommittee = () => {
  
  return (
    <>
      <div>
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="pt-20 text-center">
          <h1 className="text-2xl font-bold">
            <span className="text-[#f07c00]">STUDENT'S </span>
            <span className="text-[#0d5d77]">COMMITEE</span>
          </h1>
        </div>
        <div className="md:max-w-7xl w-full mx-auto pt-20 flex gap-8 flex-wrap mb-5 ">
          {studentItems.map((item) => {
            return (
              <div key={item.id} className=" bg-gray-100 hover:bg-gray-200 hover:translate-y-1 p-5 rounded-md shadow-xl cursor-pointer transition-all duration-300">
                <img
                  className="rounded-full shadow-xl h-64 w-64 object-cover"
                  src={`${item.photo}`}
                  alt="student"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />

                <div className="pt-5">
                  <h1 className="text-2xl font-bold pb-2">{item.name}</h1>
                  <p className="text-base font-medium pb-2 text-gray-600">
                    {item.Branch}
                  </p>
                  <p className="text-sm font-semibold text-gray-400">
                    {item.Batch}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        <div className="mt-12">
        <Footer/>
        </div>
    </>
  );
};

export default StudentCommittee;
