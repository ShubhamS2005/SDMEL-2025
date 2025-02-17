import React, { useState } from 'react'
import { navItems } from './navItems'
import { Link } from 'react-router-dom'
import Button from './Button'
import DropdownConference from './DropdownConference'
import InfoDropdown from './InfoDropdown'
import BoardDropdown from './BoardDropdown'

const Navbar = () => {
  const [conferenceDropdown, setConferenceDropdown] = useState(false)
  const [infoDropdown, setInfoDropdown] = useState(false)
  const [boardDropdown, setBoardDropdown] = useState(false)

  return (
    <div>
      <div className='max-w-[82rem] bg-white mx-auto mt-3 flex justify-between items-center'>
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
                    {conferenceDropdown && <DropdownConference/>}
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
                return (
                    <li key={item.id} className='list-none hover:text-[#f07c00]'>
                        <Link to={item.path} >{item.title}</Link>
                    </li>
                )
            })}
        </div>
        <div className='flex justify-center items-center gap-2'>
            <Button/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
