import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

function DropdownMenu({ label, icon: Icon, items, href }) {
  // active mega menu
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);

  return (
    <div
      onClick={() => setActiveMegaMenu(!activeMegaMenu)}
      className="relative text-[#626C70] capitalize my-transition cursor-pointer"
    >
      {items?.length > 0 ? (
        <div className="flex items-center gap-3 my-transition hover:text-text-color py-[10px] text-sm font-medium px-4 md:px-5 lg:px-6 hover:bg-text-color/10 group">
          {Icon && (
            <Icon
              className={`text-xl ${
                items.length > 0 && activeMegaMenu ? "text-text-color" : ""
              } group-hover:text-text-color`}
            />
          )}
          <span
            className={`${
              items.length > 0 && activeMegaMenu
                ? "text-text-color"
                : "text-[#626C70]"
            } group-hover:text-text-color`}
          >
            {label}
          </span>
          {items?.length > 0 && (
            <IoIosArrowDown
              className={`my-transition ${
                activeMegaMenu && "text-text-color rotate-180"
              }`}
            />
          )}
        </div>
      ) : (
        <NavLink
          to={href}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 my-transition hover:text-text-color py-[10px] text-sm font-medium text-text-color"
              : "flex items-center gap-3 my-transition hover:text-text-color py-[10px] text-sm font-medium hover:bg-text-color/10 px-4 md:px-5 lg:px-6"
          }
        >
          {Icon && <Icon />}
          <span>{label}</span>
          {items?.length > 0 && (
            <IoIosArrowDown
              className={`my-transition ${
                activeMegaMenu && "text-text-color rotate-180"
              }`}
            />
          )}
        </NavLink>
      )}

      {/* sub menu */}
      {items?.length > 0 && (
        <ul
          className={`${
            activeMegaMenu ? "visible" : "invisible h-0"
          } bg-primary rounded-md w-auto *:w-full font-medium text-sm`}
        >
          {items.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  return isActive
                    ? "my-transition pl-[55px] py-[10px] text-text-color hover:bg-text-color/10 hover:text-text-color w-full flex items-center"
                    : "my-transition pl-[55px] py-[10px] text-[#626C70] hover:bg-text-color/10 hover:text-text-color w-full flex items-center";
                }}
              >
                {item.icon && <item.icon className="mr-3" />}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Prop validation
DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  href: PropTypes.string,
};
export default DropdownMenu;
