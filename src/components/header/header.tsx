/** @format */

import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import "./style.css";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Separator } from "../ui/separator";
import share from "@/assets/share.svg";
import file from "@/assets/file.svg";
import folder from "@/assets/folder.svg";
import vector from "@/assets/vector.svg";

const Header = () => {
  const [toggleText, setToggleText] = useState<boolean>(false);
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
          <DropdownMenu open={toggleText} onOpenChange={setToggleText}>
            <DropdownMenuTrigger>
              <Button
                variant={"ghost"}
                className={`text-[#56616B] border-white py-2 px-4 transition-all bg-none rounded-full no-underline hover:bg-[#EFF1F6] ${
                  toggleText && "bg-[#131316] text-white"
                }`}>
                <Icon icon='fluent:apps-32-regular' width='20' height='20' />
                <span className='text-[16px]'>Apps</span>
                {toggleText && (
                  <>
                    <Separator orientation='vertical' className='mx-4' />
                    <span className='text-[16px] flex items-center'>
                      Link in Bio{" "}
                      <Icon
                        icon='ph:caret-down-bold'
                        width='20'
                        height='20'
                        className='ml-2'
                      />
                    </span>
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='start'
              className='md:w-[27.875rem] p-1 rounded-2xl'>
              <DropdownMenuLabel>
                <NavLink
                  to={"/"}
                  className='flex p-4 rounded-xl space-x-3 group hover:shadow-md transition-all'>
                  <span className='p-3 rounded-md shadow-md'>
                    <img src={share} alt='Link in Bio' />
                  </span>
                  <div className='mt-1 flex justify-between items-center w-full'>
                    <div>
                      <p className='text-[#131316] text-[16px]'>Link in Bio</p>
                      <p className='text-[#56616B] mt-2'>
                        Manage your Link in Bio
                      </p>
                    </div>
                    <Icon
                      icon='radix-icons:caret-right'
                      width='20'
                      height='20'
                      className='text-[#56616B] group-hover:opacity-100 opacity-0'
                    />
                  </div>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <NavLink
                  to={"/"}
                  className='flex p-4 rounded-xl space-x-3 group hover:shadow-md transition-all'>
                  <span className='p-3 rounded-md shadow-md'>
                    <img src={file} alt='Store' />
                  </span>
                  <div className='mt-1 flex justify-between items-center w-full'>
                    <div>
                      <p className='text-[#131316] text-[16px]'>Store</p>
                      <p className='text-[#56616B] mt-2'>
                        Manage your Store activities
                      </p>
                    </div>
                    <Icon
                      icon='radix-icons:caret-right'
                      width='20'
                      height='20'
                      className='text-[#56616B] group-hover:opacity-100 opacity-0'
                    />
                  </div>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <NavLink
                  to={"/"}
                  className='flex p-4 rounded-xl space-x-3 group hover:shadow-md transition-all'>
                  <span className='p-3 rounded-md shadow-md'>
                    <img src={folder} alt='Media Kit' />
                  </span>
                  <div className='mt-1 flex justify-between items-center w-full'>
                    <div>
                      <p className='text-[#131316] text-[16px]'>Media Kit</p>
                      <p className='text-[#56616B] mt-2'>
                        Manage your Media Kit
                      </p>
                    </div>
                    <Icon
                      icon='radix-icons:caret-right'
                      width='20'
                      height='20'
                      className='text-[#56616B] group-hover:opacity-100 opacity-0'
                    />
                  </div>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <NavLink
                  to={"/"}
                  className='flex p-4 rounded-xl space-x-3 group hover:shadow-md transition-all'>
                  <span className='p-3 rounded-md shadow-md'>
                    <img src={vector} alt='Invoices' />
                  </span>
                  <div className='mt-1 flex justify-between items-center w-full'>
                    <div>
                      <p className='text-[#131316] text-[16px]'>Invoicing</p>
                      <p className='text-[#56616B] mt-2'>
                        Manage your Invoices
                      </p>
                    </div>
                    <Icon
                      icon='radix-icons:caret-right'
                      width='20'
                      height='20'
                      className='text-[#56616B] group-hover:opacity-100 opacity-0'
                    />
                  </div>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel>
                <NavLink
                  to={"/"}
                  className='flex p-4 rounded-xl space-x-3 group hover:shadow-md transition-all'>
                  <span className='p-3 rounded-md shadow-md'>
                    <img src={share} alt='Link in Bio' />
                  </span>
                  <div className='mt-1 flex justify-between items-center w-full'>
                    <div>
                      <p className='text-[#131316] text-[16px]'>Bookings</p>
                      <p className='text-[#56616B] mt-2'>
                        Manage your Bookings
                      </p>
                    </div>
                    <Icon
                      icon='radix-icons:caret-right'
                      width='20'
                      height='20'
                      className='text-[#56616B] group-hover:opacity-100 opacity-0'
                    />
                  </div>
                </NavLink>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='menu'>
          <Button variant={"ghost"} className='w-[40px]'>
            <Icon icon='ant-design:bell-outlined' width='20' height='20' />
          </Button>
          <Button variant={"ghost"} className='w-[40px]'>
            <Icon icon='mdi-light:message-text' width='20' height='20' />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant={"ghost"}
                className='bg-[#EFF1F6] flex justify-center items-center p-1 rounded-full space-x-2'>
                <span className='badge'>OJ</span>
                <span className='w-7 h-7 flex items-center'>
                  <Icon
                    icon='material-symbols-light:menu'
                    width='20'
                    height='20'
                  />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='md:w-[23.125rem] p-1 rounded-2xl'>
              <DropdownMenuLabel className='py-4'>
                <div className='flex items-center space-x-3'>
                  <span className='dropdown--badge'>OJ</span>
                  <div>
                    <p className='text-[#131316] text-[16px]'>Olivier Jones</p>
                    <p className='text-[#56616B] mt-2'>
                      olivierjones@gmail.com
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon
                    icon='iconamoon:settings-light'
                    width='20'
                    height='20'
                  />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Settings
                  </p>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon icon='mdi:scroll-text-outline' width='20' height='20' />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Purchase History
                  </p>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon
                    icon='ic:outline-card-giftcard'
                    width='20'
                    height='20'
                  />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Refer and Earn
                  </p>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon icon='fluent:apps-16-regular' width='20' height='20' />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Integrations
                  </p>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon
                    icon='solar:bug-minimalistic-linear'
                    width='20'
                    height='20'
                  />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Report Bug
                  </p>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon
                    icon='material-symbols-light:switch-account-outline'
                    width='20'
                    height='20'
                  />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Switch Account
                  </p>
                </NavLink>
              </DropdownMenuLabel>
              <DropdownMenuLabel className='py-4'>
                <NavLink to='/' className='flex items-center space-x-3 py-1'>
                  <Icon icon='ph:sign-out' width='20' height='20' />
                  <p className='text-[#131316] font-[600] text-[1rem]'>
                    Sign out
                  </p>
                </NavLink>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
