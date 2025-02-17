import React from 'react'
import "./About.css"
import sdmelImage from "../../assets/sdmel.png";

function About_sdeml() {
  return (
    <div className='card'>
        <div className="about">
            <h2>ABOUT SDMEL-2025</h2>
        </div>
        <div className='hu'>
        <div className='inside'>      
              The Internatonal Conference on "Sustainable Development in Management, Engineering, and Life Sciences (SDMEL-2025)" promises to be an exciting academic and professional event focused on addressing cri cal global challenges through sustainable prac ces across various fields. The conference aims at development of society that relies heavily on the sustainable technology. With this vision, the conference aims to foster meaningful exchanges of ideas, research, and innova ve solu ons in key field such as engineering, compu ng, management, agriculture, and pharmacy, nursing. It will include brainstorming sessions to explore the broader goal of sustainable development for societal advancement. The conference will serve as a pla orm for academics, researchers, policymakers, and industry experts to share knowledge, insights, and innova ons. SDMEL-2025 conference will bring together thought leaders and professionals from diverse fields to discuss the latest trends, challenges, and breakthroughs in sustainable development. Par cipants will have the unique opportunity to   contribute with their experiences, learn from others, and collaborate for a more sustainable future.
        </div>

        <div className='image'> 
            <img src={sdmelImage} alt="Connect to Internet"/>
        </div>

        </div>
      
    </div>
  )
}

export default About_sdeml;
