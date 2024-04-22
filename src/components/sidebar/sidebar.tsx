/** @format */

import share from "@/assets/share.svg";
import vector from "@/assets/vector.svg";
import file from "@/assets/file.svg";
import folder from "@/assets/folder.svg";
import { NavLink } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./style.css";

const sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink to={"#"}>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span
                className={"group p-2 flex rounded-full hover:bg-[#EFF1F6]"}>
                <img
                  src={share}
                  alt=''
                  className='grayscale group-hover:grayscale-0'
                />
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className='TooltipContent bg-[#131316] text-white py-3 px-3 rounded-md'
                sideOffset={10}
                side='right'>
                Link to Bio
                <Tooltip.Arrow className='TooltipArrow' />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </NavLink>
      <NavLink to={"#"}>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span
                className={"group p-2 flex rounded-full hover:bg-[#EFF1F6]"}>
                <img
                  src={file}
                  alt=''
                  className='grayscale group-hover:grayscale-0'
                />
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className='TooltipContent bg-[#131316] text-white py-3 px-3 rounded-md'
                sideOffset={10}
                side='right'>
                Store
                <Tooltip.Arrow className='TooltipArrow' />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </NavLink>
      <NavLink to={"#"}>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span
                className={"group p-2 flex rounded-full hover:bg-[#EFF1F6]"}>
                <img
                  src={folder}
                  alt=''
                  className='grayscale group-hover:grayscale-0'
                />
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className='TooltipContent bg-[#131316] text-white py-3 px-3 rounded-md'
                sideOffset={10}
                side='right'>
                Media Kit
                <Tooltip.Arrow className='TooltipArrow' />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </NavLink>
      <NavLink to={"#"}>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span
                className={"group p-2 flex rounded-full hover:bg-[#EFF1F6]"}>
                <img
                  src={vector}
                  alt=''
                  className='grayscale group-hover:grayscale-0'
                />
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className='TooltipContent bg-[#131316] text-white py-3 px-3 rounded-md'
                sideOffset={10}
                side='right'>
                Invoicing
                <Tooltip.Arrow className='TooltipArrow' />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </NavLink>
    </div>
  );
};

export default sidebar;
