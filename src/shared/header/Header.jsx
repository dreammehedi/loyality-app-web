import { IoSearch } from "react-icons/io5";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
  return (
    // header
    <>
      <header className="bg-primary py-4 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* search field */}
        <form className="relative">
          <IoSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-lg"></IoSearch>
          <input
            className=" outline-none bg-[#F8F9F9] py-[10px] pl-[40px] text-[#959FA3] rounded-md"
            type="text"
            placeholder="Search"
            id="search"
            name="search"
          />
        </form>

        {/* header info */}
        <div className="flex justify-end items-center gap-4 text-[#4A5154]">
          {/* language */}

          <div className="relative">
            <img
              className="absolute top-1/2 -translate-y-1/2 left-3 size-[20px] object-cover "
              src="https://i.ibb.co/qBsCrZC/us.png"
              alt=""
            />
            <select
              name="language"
              id="language"
              className="bg-[#F8F9F9] rounded-md px-3 py-2 pl-[40px] outline-none"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>{" "}
              <option value="bengali">Bangla</option>
            </select>
          </div>

          {/* relavent web icon */}
          <ul className="flex justify-center items-center gap-4">
            <li>
              <Link>
                <RxDashboard></RxDashboard>
              </Link>
            </li>
            <li>
              <Link>
                <MdOutlineNotificationAdd></MdOutlineNotificationAdd>
              </Link>
            </li>
          </ul>
          {/* user */}
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/5rRc3wf/user-profile.png"
              alt="user avatar"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
