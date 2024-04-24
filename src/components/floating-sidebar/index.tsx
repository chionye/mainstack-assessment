import { NavLink } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import { SidebarItems } from "@/utils/page-props";
import "./style.css";

const FloatingSidebar = () => {
  return (
    <div className='sidebar'>
      {SidebarItems.map(
        (
          item: { label: string; image: string; link: string },
          index: number
        ) => (
          <NavLink to={item.link} key={index}>
            <Tooltip.Provider delayDuration={50}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span className={"group img-span"}>
                    <img
                      src={item.image}
                      alt=''
                      className='img group-hover:grayscale-0'
                    />
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className='tooltip-content'
                    sideOffset={10}
                    side='right'>
                    {item.label}
                    <Tooltip.Arrow className='TooltipArrow' />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </NavLink>
        )
      )}
    </div>
  );
};

export default FloatingSidebar;
