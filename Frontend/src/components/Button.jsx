import { LogIn, LogInIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center gap-3">
      <button onClick={()=> navigate('/login')} className="bg-[#f07c00] hover:bg-[#0d5d77] text-white px-4 py-2 text-lg flex justify-center items-center gap-1 rounded-md">
      Login
        <LogInIcon/>
      </button>
      <button onClick={()=> navigate('/register')} className="bg-white text-[#f07c00] border-[#f07c00] hover:text-[#0d5d77] hover:border-[#0d5d77] border-2 px-2 py-1 text-lg rounded-md">
        Sign Up
      </button>
    </div>
  );
};

export default Button;
