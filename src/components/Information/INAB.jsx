import React, { useEffect } from "react";
import "./Inab.css";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";

function INAB() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <div className="pt-20">
        <div id="international" className="title">
          <h2>
            <span className="text-[#f07c00]">INTERNATIONAL</span> ADVISORY BOARD
          </h2>
        </div>
        <div className="board">
          <ul>
            <li>
              Prof. Ajay Kumar Poddar, Vice Chancellor, Texila American
              University Lusaka, Zambia.
            </li>
            <li>
              Prof. Ashish Malik, Professor, University of Newcastle, Australia
            </li>
            <li>
              Prof. Brandon Randolph-Seng, Professor, Texas A&M University,
              Rockwall, Texas, United States
            </li>
            <li>
              Dr. Harpreet Grewal, Professor and Dean, School of Business,
              Claflin University, USA
            </li>
            <li>Prof. Fushuan Wen, Zhejiang University, Sanya, China</li>
            <li>
              Dr. Jyotsana GB, Professor and Head – Academic Quality, School of
              Management, British University, Vietnam
            </li>
            <li>
              Prof. Ilkyeong Moon, Professor, Seoul National University, Korea
            </li>
            <li>
              Mr. Pooran Chandra Pandey, Advisor, UNESCO Inclusive Policy Lab,
              Paris, France
            </li>
            <li>
              Prof. Ramayah T., Professor, Universiti Sains Malaysia, Gelugor,
              Malaysia
            </li>
            <li>Prof. Ramesh Bansal, University of Sharjah, UAE</li>
            <li>
              Ms. Shubhra Aurita Roy, Director, Australian Government, Canberra,
              Australian Capital Territory, Australia
            </li>
            <li>
              Prof. Suneel Maheshwari, Professor, Indiana University of
              Pennsylvania, Delmont, Pennsylvania, United States
            </li>
            <li>Prof. Valentina Emilia Balas, University of Arad, Romania</li>
            <li>
              Prof. Yehuda Baruch, Professor, University of Southampton, United
              Kingdom
            </li>
            <li>Dr. Yuvika Gupta, Southampton</li>
          </ul>
        </div>

        <div id="national" className="title">
          <h2>
            <span className="text-[#f07c00]">NATIONAL</span> ADVISORY BOARD
          </h2>
        </div>

        <div className="board">
          <ul>
            <li>Prof. Indrajit Mukherjee, IIT Bombay</li>
            <li>Prof. Ravikant Saini, IIT Jammu</li>
            <li>Prof. Ashwani Kumar, NIT Kurukshetra</li>
            <li>Dr. Ajit P Singh, Vice President, Hitachi Energy</li>
            <li>Prof. Amit Kumar Manocha, PIT Institute, Mogha</li>
            <li>Prof. Amit Gautam, FMS, BHU Varanasi</li>
            <li>Prof. Anubhav Singh, Alliance University, Bangalore</li>
            <li>
              Prof. Ashutosh Agrawal, Trinity Institute of Professional Studies,
              Delhi
            </li>
            <li>
              Mr. Ambrish Kela, Scientech Technologies Pvt. Ltd, Indore, MP
            </li>
            <li>Prof. Bindeshwar Singh, KNIT Sultanpur</li>
            <li>Prof. Chander Prakash, Chandigarh University</li>
            <li>Prof. Rashmi P John, KGMU College of Nursing</li>
            <li>
              Prof. Jayendra Kumar, SRM Institute of Science and Technology,
              Modinagar
            </li>
            <li>
              Mr. Manish Agrawal, MD, Stock Holding Corporation of India Limited
            </li>
            <li>Prof. Maninder Singh, Thapar University</li>
            <li>Prof. Neeraj Kumar Sethiya, DIT University Dehradun</li>
            <li>
              Prof. Neelam Dass, Mohan Dai Oswal College of Nursing, Ludhiana
            </li>
            <li>
              Dr. Piyush Pratap Singh, Scientist, Reliance Industries Limited
            </li>
            <li>
              Dr. Praveen Kumar Janjua, President, Forensic Science Development
              & Welfare Society, Punjab
            </li>
            <li>
              Prof. Pragya Pathak, Dr. Ram Manohar Lohia Institute of Medical
              Sciences, Lucknow
            </li>
            <li>Prof. Ranjit Singh, Shobhit University, Gangoh</li>
            <li>Prof. Ravi Prakash, Ch Bansi Lal University, Bhiwani</li>
            <li>Prof. Sachin Dwivedi, AIIMS Rishikesh</li>
            <li>
              Prof. Sandeep Arya, U.P. University of Medical Sciences Saifai,
              U.P
            </li>
            <li>Prof. Satyendra Narayan Singh, Kigali University, Rwanda</li>
            <li>
              Mr. Sreeram CA, Vice President, Metasage Alliance, Tamil Nadu,
              India
            </li>
            <li>Dr. Suresh Bedi, MDU Rohtak</li>
            <li>Prof. V N Bajpayi, ITS Ghaziabad</li>
            <li>Prof. Nakul Gupta, IIMT Noida</li>
            <li>Prof. Taimoor Khan, NIT Silchar</li>
            <li>Prof. Z.A. Bhatt, University of Kashmir, Srinagar</li>
            <li>Prof. Mukesh Kumar, IIT Indore</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default INAB;
