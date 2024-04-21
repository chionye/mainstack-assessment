/** @format */

import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import "./styles.css";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className='p-2'>
      <div className='shadow-md flex justify-between px-3 py-2 rounded-full'>
        <div className='flex items-center'>
          <img src={logo} alt='' />
        </div>
        <div className='flex items-center space-x-2' id='nav'>
          <NavLink to={"/"} className='nav-link'>
            <Icon
              icon='material-symbols-light:home-outline'
              width={"20"}
              height={"20"}
            />
            <span className='text-[16px]'>Home</span>
          </NavLink>
          <NavLink to={"/"} className='nav-link'>
            <Icon
              icon='material-symbols-light:analytics-outline'
              width='20'
              height='20'
            />
            <span className='text-[16px]'>Analytics</span>
          </NavLink>
          <NavLink to={"/revenue"} className='nav-link'>
            <Icon icon='fa6-solid:money-bills' width='20' height='20' />
            <span className='text-[16px]'>Revenue</span>
          </NavLink>
          <NavLink to={"/"} className='nav-link'>
            <Icon icon='mdi:users-outline' width='20' height='20' />
            <span className='text-[16px]'>CRM</span>
          </NavLink>
          <NavLink to={"/"} className='nav-link'>
            <Icon icon='fluent:apps-32-regular' width='20' height='20' />
            <span className='text-[16px]'>Apps</span>
          </NavLink>
        </div>
        <div className='flex items-center space-x-1'>
          <Button variant={"ghost"} className='w-[40px]'>
            <Icon icon='ant-design:bell-outlined' width='20' height='20' />
          </Button>
          <Button variant={"ghost"} className='w-[40px]'>
            <Icon icon='mdi-light:message-text' width='20' height='20' />
          </Button>
          <span className='bg-[#EFF1F6] flex justify-center items-center p-2 rounded-full space-x-2'>
            <span className='bg-gradient-to-br from-[#5C6670] flex justify-center items-center from-[2.33%] to-[#131316] to-[96.28%] w-8 h-8 rounded-full text-[13px] text-white'>
              OJ
            </span>
            <Icon icon='material-symbols-light:menu' width='20' height='20' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;