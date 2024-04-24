/** @format */

import share from "@/assets/share.svg";
import file from "@/assets/file.svg";
import folder from "@/assets/folder.svg";
import vector from "@/assets/vector.svg";

type NavItemsProps = {
  label: string;
  link: string;
  icon: string;
}[];

type AppItemProps = {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}[];

type MenuItemProps = {
  label: string;
  link: string;
  icon: string;
}[];

type MenuIconProps = {
  icon: string;
}[];

type SidebarProps = {
  label: string;
  image: string;
  link: string;
}[];

type filterButtonProps = {
  label: string;
}[];

type selectStackProps = {
  id: string;
  label: string;
}[];

export const NavItems: NavItemsProps = [
  {
    label: "Home",
    link: "/",
    icon: "material-symbols-light:home-outline",
  },
  {
    label: "Analytics",
    link: "/",
    icon: "material-symbols-light:analytics-outline",
  },
  {
    label: "Revenue",
    link: "/revenue",
    icon: "fa6-solid:money-bills",
  },
  {
    label: "CRM",
    link: "/",
    icon: "mdi:users-outline",
  },
  {
    label: "Apps",
    link: "/",
    icon: "material-symbols-light:home-outline",
  },
];

export const AppItems: AppItemProps = [
  {
    title: "Link in Bio",
    subtitle: "Manage your Link in Bio",
    link: "/",
    image: share,
  },
  {
    title: "Store",
    subtitle: "Manage your Store activities",
    link: "/",
    image: file,
  },
  {
    title: "Media Kit",
    subtitle: "Manage your Media Kit",
    link: "/",
    image: folder,
  },
  {
    title: "Invoicing",
    subtitle: "Manage your Invoices",
    link: "/",
    image: vector,
  },
  {
    title: "Bookings",
    subtitle: "Manage your Bookings",
    link: "/",
    image: share,
  },
];

export const MenuItems: MenuItemProps = [
  {
    label: "Settings",
    link: "/",
    icon: "iconamoon:settings-light",
  },
  {
    label: "Purchase History",
    link: "/",
    icon: "mdi:scroll-text-outline",
  },
  {
    label: "Refer and Earn",
    link: "/",
    icon: "ic:outline-card-giftcard",
  },
  {
    label: "Integrations",
    link: "/",
    icon: "fluent:apps-16-regular",
  },
  {
    label: "Report Bug",
    link: "/",
    icon: "solar:bug-minimalistic-linear",
  },
  {
    label: "Switch Account",
    link: "/",
    icon: "material-symbols-light:switch-account-outline",
  },
  {
    label: "Sign out",
    link: "/",
    icon: "ph:sign-out",
  },
];

export const MenuIcon: MenuIconProps = [
  {
    icon: "ant-design:bell-outlined",
  },
  {
    icon: "mdi-light:message-text",
  },
];

export const SidebarItems: SidebarProps = [
  {
    label: "Link to Bio",
    image: share,
    link: "#",
  },
  {
    label: "Store",
    image: file,
    link: "#",
  },
  {
    label: "Media Kit",
    image: folder,
    link: "#",
  },
  {
    label: "Invoicing",
    image: vector,
    link: "#",
  },
];

export const filterButtonItems: filterButtonProps = [
  {
    label: "Today",
  },
  {
    label: "Last 7 days",
  },
  {
    label: "This month",
  },
  {
    label: "Last 3 months",
  },
];

export const selectTransactionTypeItems: selectStackProps = [
  {
    id: "store_transactions",
    label: "Store Transactions",
  },
  {
    id: "get_tipped",
    label: "Get Tipped",
  },
  {
    id: "withdrawal",
    label: "Withdrawals",
  },
  {
    id: "chargebacks",
    label: "Chargebacks",
  },
  {
    id: "cashbacks",
    label: "Cashbacks",
  },
  {
    id: "refer_earn",
    label: "Refer & Earn",
  },
];

export const selectTransactionStatusItems: selectStackProps = [
  {
    id: "successful",
    label: "Successful",
  },
  {
    id: "pending",
    label: "Pending",
  },
  {
    id: "failed",
    label: "Failed",
  },
];