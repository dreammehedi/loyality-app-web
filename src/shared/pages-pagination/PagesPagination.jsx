import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

function PagesPagination() {
  // location
  const { pathname } = useLocation();
  // const currentPage = pathname?.split("/")[1];

  return (
    // pages pagination
    <>
      <div className="px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 bg-secondary">
        {/* route name */}
        <span className="text-dark font-semibold">Invoice</span>

        {/* pagination */}
        <ul className="flex items-center gap-2 text-[#626C70] text-sm">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <IoIosArrowForward></IoIosArrowForward>
          </li>
          <li>Pages</li>
          <li>
            <IoIosArrowForward></IoIosArrowForward>
          </li>
          <li className="text-dark font-medium capitalize">
            {/* {pathname === "/" ? "Profile" : { pathname }} */}
            {pathname}
          </li>
        </ul>
      </div>
    </>
  );
}

export default PagesPagination;
