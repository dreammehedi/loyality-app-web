import { Link } from "react-router-dom";

function Footer() {
  return (
    // footer
    <>
      <footer className="bg-secondary py-4 md:py-5 lg:py-6">
        <ul className="flex justify-center md:justify-end items-center gap-2 text-[#626C70] text-sm">
          <li>
            <Link
              className="my-transition hover:text-text-color hover:font-medium"
              to={"/documentation"}
            >
              Documentation
            </Link>
          </li>
          <li className="size-[3px] bg-[#626C70] rounded-full"></li>
          <li>
            <Link
              className="my-transition hover:text-text-color hover:font-medium"
              to={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </li>
          <li className="size-[3px] bg-[#626C70] rounded-full"></li>
          <li>
            <Link
              className="my-transition hover:text-text-color hover:font-medium"
              to={"/faqs"}
            >
              FAQs
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
