import React, { useState } from "react";
import { themeItems } from "../navItems";
import { Link } from "react-router-dom";

const ThemeDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="dropdown mt-[2px] shadow-2xl absolute top-[-2px] left-[221px]">
        <ul
          className={dropdown ? "hidden" : "block"}
          onClick={() => setDropdown(!dropdown)}
        >
          {themeItems.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[280px] cursor-pointer bg-[#f07c00] text-black"
              >
                <li className="list-none h-10 m-0 pl-2 pt-2 bg-[#f07c00] text-white hover:bg-[#0d5d77] ">
                  <Link>
                    {item.title}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ThemeDropdown;
