import React, { useState } from 'react'
import { speakerItems } from '../navItems'
import { Link, useNavigate } from 'react-router-dom'

const SpeakerDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate()

  return (
    <div>
      <div className='dropdown mt-[2px] shadow-2xl absolute top-15 right-100'>
      <ul className={dropdown ? "hidden":"block"} onClick={()=> setDropdown(!dropdown)} >
        {speakerItems.map((item)=>{
            return (
                <div key={item.id} className='w-[250px] cursor-pointer bg-[#f07c00] text-black'>
                    <li className='list-none h-10 m-0 pl-2 pt-2 bg-[#f07c00] text-white hover:bg-[#0d5d77] '>
                        <Link>{item.title}</Link>
                    </li>
                </div>
            )
        })}
      </ul>
      </div>
    </div>
  )
}

export default SpeakerDropdown
