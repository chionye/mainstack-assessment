/** @format */

import share from "@/assets/share.svg";
import vector from "@/assets/vector.svg";
import file from "@/assets/file.svg";
import folder from "@/assets/folder.svg";
import { NavLink } from "react-router-dom";
import "./style.css";

const sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink to={"#"}>
        <img src={share} alt='' className='img' />
      </NavLink>
      <NavLink to={"#"}>
        <img src={file} alt='' className='img' />
      </NavLink>
      <NavLink to={"#"}>
        <img src={folder} alt='' className='img' />
      </NavLink>
      <NavLink to={"#"}>
        <img src={vector} alt='' className='img' />
      </NavLink>
    </div>
  );
};

export default sidebar;
