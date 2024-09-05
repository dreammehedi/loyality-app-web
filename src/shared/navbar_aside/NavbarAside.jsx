import PropTypes from "prop-types";
import { AiOutlineBars, AiOutlineThunderbolt } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { FiBarChart2, FiUser } from "react-icons/fi";
import { LuHome } from "react-icons/lu";

import {
  MdClose,
  MdOutlineCalendarToday,
  MdOutlineContentPaste,
  MdOutlinePayment,
} from "react-icons/md";
import { PiNoteBlank, PiRectangleDuotone } from "react-icons/pi";
import { TbFileInvoice } from "react-icons/tb";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

// managingContent mega menu
const managingContent = [
  { label: "Magaging Content 1", to: "/managing-content-1" },
  { label: "Magaging Content 2", to: "/managing-content-2" },
];

// profile mega menu
const profile = [
  { label: "Profile", to: "/" },
  { label: "Setting", to: "/setting" },
];
// invoice mega menu
const invoice = [
  { label: "Invoice", to: "/invoice" },
  { label: "Invoice Detailes", to: "/invoice-detailes" },
];
function NavbarAside({ setNavbarAsideActive }) {
  return (
    // navbar aside menu
    <>
      <aside className="sticky top-0 z-[999] border-r border-secondary">
        {/* navbarAside close button */}
        <button
          onClick={() => {
            setNavbarAsideActive(false);
          }}
          className="xl:hidden text-2xl text-text-color absolute right-0 top-4 my-transition hover:bg-text-color/10 rounded-md p-[3px]"
        >
          <MdClose />
        </button>

        {/* logo */}
        <Link to={"/"} className="py-4 inline-block">
          <img
            className="object-contain h-[32px] w-[115px] rounded-md"
            src="https://i.ibb.co/L6K2ZrC/logo.png"
            alt="Loyality"
          />
        </Link>

        {/* dashboard */}
        <div className="flex flex-col">
          {/* dashboard title */}
          <span className="text-[#959FA3] text-xs font-medium uppercase mb-2 px-4 md:px-5 lg:px-6">
            Dashboard
          </span>
          {/* dashboard navigate */}
          <nav className="bg-primary">
            <ul className={`flex flex-col`}>
              <DropdownMenu
                label="Dashboard"
                icon={LuHome}
                items={[]}
                href="/dashboard"
              />
              <DropdownMenu
                label="Users Managment"
                icon={FiBarChart2}
                items={[]}
                href="/users-managment"
              />
              <DropdownMenu
                label="Calender"
                icon={MdOutlineCalendarToday}
                items={[]}
                href="/calender"
              />
              <DropdownMenu
                label="Managing Content"
                icon={MdOutlineContentPaste}
                items={managingContent}
                href="/managing-content"
              />
              <DropdownMenu
                label="Membership"
                icon={PiRectangleDuotone}
                items={[]}
                href="/membership"
              />
              <DropdownMenu
                label="Report & Analytics"
                icon={AiOutlineBars}
                items={[]}
                href="/report-analytics"
              />
            </ul>
          </nav>

          {/* pages title */}
          <span className="text-[#959FA3] text-xs font-medium uppercase mb-2 mt-6 px-4 md:px-5 lg:px-6">
            Pages
          </span>
          {/* pages navigate */}
          <nav className="bg-primary">
            <ul className={`flex flex-col`}>
              <DropdownMenu
                label="Profile"
                icon={FiUser}
                items={profile}
                href={"/profile"}
              />
              <DropdownMenu
                label="Invoice"
                icon={TbFileInvoice}
                items={invoice}
                href={"/invoice"}
              />
              <DropdownMenu
                label="Blilling"
                icon={MdOutlinePayment}
                items={[]}
                href={"/billing"}
              />
              <DropdownMenu
                label="Pricing Plans"
                icon={AiOutlineThunderbolt}
                items={[]}
                href={"/pricing-plans"}
              />
              <DropdownMenu
                label="FAQs"
                icon={FaQuestion}
                items={[]}
                href={"/faqs"}
              />
              <DropdownMenu
                label="Blank Page"
                icon={PiNoteBlank}
                items={[]}
                href={"/blank-page"}
              />
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
// prop validation

NavbarAside.propTypes = {
  setNavbarAsideActive: PropTypes.func.isRequired,
};

export default NavbarAside;
