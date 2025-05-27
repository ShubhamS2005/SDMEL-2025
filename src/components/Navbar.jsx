import React, { useState } from 'react'
import { navItems } from './navItems'
import { Link } from 'react-router-dom'
import InfoDropdown from './Dropdowns/InfoDropdown'
import BoardDropdown from './Dropdowns/BoardDropdown'
import SpeakerDropdown from './Dropdowns/SpeakerDropdown'
import ConferenceDropdown from './Dropdowns/ConferenceDropdown'
import '../App.css'

const Navbar = () => {
  const [conferenceDropdown, setConferenceDropdown] = useState(false)
  const [infoDropdown, setInfoDropdown] = useState(false)
  const [boardDropdown, setBoardDropdown] = useState(false)
  const [speakerDropdown, setSpeakerDropdown] = useState(false)
  

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white h-20'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        <div>
            <img src="https://huroorkee.ac.in/assets/img/logo/logo-blue.png" alt="hu-img" />
        </div>
        <div className='flex justify-center items-center gap-5 font-medium'>
            {navItems.map((item)=>{
              if (item.title === "Conference"){
                return (
                  <li className='list-none hover:text-[#f07c00]' key={item.id} onMouseEnter={() => setConferenceDropdown(true)} 
                  onMouseLeave={() => setConferenceDropdown(false)} >
                    <Link>{item.title}</Link>
                    {conferenceDropdown && <ConferenceDropdown/>}
                  </li>
                )
              }
              else if (item.title === "Information"){
                return (
                  <li className='list-none hover:text-[#f07c00]' key={item.id}  onMouseEnter={() => setInfoDropdown(true)} 
                  onMouseLeave={() => setInfoDropdown(false)} >
                    <Link to={item.path} >{item.title}</Link>
                    {infoDropdown && <InfoDropdown/>}
                  </li>
                )
              }
              else if (item.title === "Advisory Board"){
                return (
                  <li className='list-none hover:text-[#f07c00]' key={item.id}  onMouseEnter={() => setBoardDropdown(true)} 
                  onMouseLeave={() => setBoardDropdown(false)} >
                    <Link to={item.path}>{item.title}</Link>
                    {boardDropdown && <BoardDropdown/>}
                  </li>
                )
              }
              else if (item.title === "Speaker"){
                return (
                  <li className='list-none hover:text-[#f07c00]' key={item.id}  onMouseEnter={() => setSpeakerDropdown(true)} 
                  onMouseLeave={() => setSpeakerDropdown(false)} >
                    <Link to={item.path}>{item.title}</Link>
                    {speakerDropdown && <SpeakerDropdown/>}
                  </li>
                )
              }
                return (
                    <li key={item.id} className='list-none hover:text-[#f07c00]'>
                        <Link to={item.path} >{item.title}</Link>
                    </li>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Navbar