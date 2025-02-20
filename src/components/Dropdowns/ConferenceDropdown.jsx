import React, { useState } from "react";
import { conferenceItems } from "../navItems";
import { Link } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";
import { ArrowRight } from "lucide-react";

const ConferenceDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  
  return (
    <>
      <div className="dropdown mt-[2px] shadow-2xl absolute top-15 right-100">
        <ul
          className={dropdown ? "hidden" : "block"}
          onClick={() => setDropdown(!dropdown)}
        >
          {conferenceItems.map((item) => {
            if (item.title === "Conference Theme") {
              return (
                <li
                  className="list-none h-10 m-0 pl-2 pt-2 bg-[#f07c00] text-white hover:bg-[#0d5d77]"
                  key={item.id}
                  onMouseEnter={() => setThemeDropdown(true)}
                  onMouseLeave={() => setThemeDropdown(false)}
                >
                  <Link to={item.path} className="flex justify-between items-center" onClick={() => setDropdown(false)}>{item.title} <ArrowRight/> </Link>
                  {themeDropdown && <ThemeDropdown />}
                </li>
              );
            }
            return (
              <div
                key={item.id}
                className="w-[220px] cursor-pointer bg-[#f07c00] text-black"
              >
                <li className="list-none h-10 m-0 pl-2 pt-2 bg-[#f07c00] text-white hover:bg-[#0d5d77] ">
                  <Link to={item.path} onClick={() => setDropdown(false)}>{item.title}</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ConferenceDropdown;
