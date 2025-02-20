import React, { useState } from 'react'
import { boardItems } from '../navItems'
import { Link, useNavigate } from 'react-router-dom'

const BoardDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate()

    const handleClick = (path) =>{
      navigate(path)
      setDropdown(false)
      // window.location.href = path;
    }

  return (
    <div>
      <div className='dropdown mt-[2px] shadow-2xl absolute top-15 right-100'>
      <ul className={dropdown ? "hidden":"block"} onClick={()=> setDropdown(!dropdown)} >
        {boardItems.map((item)=>{
            return (
                <div key={item.id} className='w-[250px] cursor-pointer bg-[#f07c00] text-black'>
                    <li className='list-none h-10 m-0 pl-2 pt-2 bg-[#f07c00] text-white hover:bg-[#0d5d77] '>
                        <Link onClick={()=> handleClick(item.path)} >{item.title}</Link>
                    </li>
                </div>
            )
        })}
      </ul>
      </div>
    </div>
  )
}

export default BoardDropdown
