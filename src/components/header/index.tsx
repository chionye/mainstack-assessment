/** @format */

import logo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import "./style.css";
import { Button } from "../ui/button";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { NavItems, AppItems, MenuItems, MenuIcon } from "@/utils/page-props";
import Dropdown from "../dropdown";

const Header = () => {
  const [toggleText, setToggleText] = useState<boolean>(false);
  return (
    <div className='header-wrapper'>
      <div className='header-main'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='nav' id='nav'>
          {NavItems.map(
            (
              headerItem: {
                label: string;
                link: string;
                icon: string;
              },
              index: number
            ) =>
              headerItem.label !== "Apps" ? (
                <NavLink to={headerItem.link} className='nav-link' key={index}>
                  <Icon icon={headerItem.icon} width={"20"} height={"20"} />
                  <span className='text-[16px]'>{headerItem.label}</span>
                </NavLink>
              ) : (
                <Dropdown
                  toggleText={toggleText}
                  setToggleText={setToggleText}
                  className='md:w-[26rem]'
                  button={
                    <Button
                      variant={"ghost"}
                      className={`text-[#56616B] border-white py-2 px-4 transition-all bg-none rounded-full no-underline hover:bg-[#EFF1F6] ${
                        toggleText && "bg-[#131316] text-white"
                      }`}>
                      <Icon
                        icon='fluent:apps-32-regular'
                        width='20'
                        height='20'
                      />
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
                  }>
                  {AppItems.map(
                    (
                      item: {
                        title: string;
                        subtitle: string;
                        link: string;
                        image: string;
                      },
                      index: number
                    ) => (
                      <DropdownMenuLabel key={index}>
                        <NavLink to={item.link} className='group app-link'>
                          <span className='app-img-span'>
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div className='app-link-container'>
                            <div>
                              <p className='app-link-title'>{item.title}</p>
                              <p className='app-link-subtitle'>
                                {item.subtitle}
                              </p>
                            </div>
                            <Icon
                              icon='radix-icons:caret-right'
                              width='20'
                              height='20'
                              className='group-hover:opacity-100 app-link-icons'
                            />
                          </div>
                        </NavLink>
                      </DropdownMenuLabel>
                    )
                  )}
                </Dropdown>
              )
          )}
        </div>
        <div className='menu'>
          {MenuIcon.map((item: { icon: string }, index: number) => (
            <Button variant={"ghost"} className='w-[40px]' key={index}>
              <Icon icon={item.icon} width='20' height='20' />
            </Button>
          ))}
          <Dropdown
            className='md:w-[23.125rem]'
            alignEnd
            button={
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
            }>
            <DropdownMenuLabel className='py-3'>
              <div className='user'>
                <span className='dropdown--badge'>OJ</span>
                <div>
                  <p className='name-span'>Olivier Jones</p>
                  <p className='email-span'>olivierjones@gmail.com</p>
                </div>
              </div>
            </DropdownMenuLabel>
            {MenuItems.map(
              (
                item: {
                  label: string;
                  link: string;
                  icon: string;
                },
                index: number
              ) => (
                <DropdownMenuLabel className='py-3' key={index}>
                  <NavLink to={item.link} className='menu-item-link'>
                    <Icon icon={item.icon} width='20' height='20' />
                    <p className='menu-item-label'>{item.label}</p>
                  </NavLink>
                </DropdownMenuLabel>
              )
            )}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
