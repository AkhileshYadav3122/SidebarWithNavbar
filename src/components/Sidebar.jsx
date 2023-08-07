import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { AiOutlineTranslation } from "react-icons/ai";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"All Template",
            icon:<FaTh/>
        },
        {
            path:"/InstantTrans",
            name:"Instant translation",
            icon:<AiOutlineTranslation />
        },
        {
            path:"/translatfile",
            name:"Translate file",
            icon:<FaRegChartBar />
        },
        {
            path:"/WriteWithAi",
            name:"Write With Ai",
            icon:<FaThList />
        },
        {
            path:"/Speech",
            name:"Speech",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Toolkit",
            name:"Toolkit",
            icon:<FaShoppingBag/>
        }
    ]
    return (
        <>
        
        <div className="container-fluid p-0">
            <div style={{width: isOpen ? "270px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "" : "none"}} className="logo"></h1>
                    <div style={{marginLeft: isOpen ? "" : "0px" ,}} className="bars bar">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>
                <Navbar/>
                {children}
            </main>

        </div>
        </>
    );
};

export default Sidebar;




