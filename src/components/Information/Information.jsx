import React, { useEffect } from 'react'
import About_Roorkee from "./About_Roorkee"
import Navbar from '../Navbar'
import About_Avadh from './About_Avadh'
import About_NIT from './About_NIT'
import About_Hu from './About_Hu'
import About_sdeml from './About_sdmel'
import About_Uttrakhand from './About_Uttrakhand'
import { useLocation } from 'react-router-dom'


const Information = () => {
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
      <div className='pt-20'>
          <div id='1'><About_sdeml /></div>
          <div id='2'><About_Uttrakhand /></div>
          <div id='3'><About_Roorkee /></div>
          <div id='4'><About_Hu /></div>
          <div id='5'><About_NIT /></div>
          <div id='6'><About_Avadh /></div>
      </div>
      </>
  );
};

export default Information;
