/** @format */

import React from "react";
import {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";

interface DropdownProps {
  toggleText?: boolean;
  setToggleText?: React.Dispatch<React.SetStateAction<boolean>>;
  alignEnd?: boolean;
  button: React.ReactNode;
  className: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  toggleText,
  setToggleText,
  button,
  alignEnd = false,
  className,
  children,
}) => {
  return (
    <RadixDropdownMenu open={toggleText} onOpenChange={setToggleText}>
      <DropdownMenuTrigger>{button}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={alignEnd ? "end" : "start"}
        className={`${className} p-1 rounded-2xl bg-white shadow-md`}>
        {children}
      </DropdownMenuContent>
    </RadixDropdownMenu>
  );
};

export default Dropdown;
