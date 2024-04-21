/** @format */

import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import "./style.css";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-main'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='nav' id='nav'>
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
        <div className='menu'>
          <Button variant={"ghost"} className='w-[40px]'>
            <Icon icon='ant-design:bell-outlined' width='20' height='20' />
          </Button>
          <Button variant={"ghost"} className='w-[40px]'>
            <Icon icon='mdi-light:message-text' width='20' height='20' />
          </Button>
          <span className='menu-button'>
            <span className='badge'>
              OJ
            </span>
            <Button variant={"ghost"} className='w-7 h-7'>
              <Icon icon='material-symbols-light:menu' width='20' height='20' />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;