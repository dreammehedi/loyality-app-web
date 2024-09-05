import PropTypes from "prop-types";
import { PiUploadSimple } from "react-icons/pi";

function Button({ title, cls }) {
  return (
    <>
      <button
        className={`${cls} flex justify-center items-center gap-2 ring-2 ring-text-color text-text-color capitalize text-sm font-semibold px-6 lg:px-8 py-2 rounded-full my-transition hover:bg-text-color/10`}
      >
        <PiUploadSimple className="text-text-color text-lg"></PiUploadSimple>
        {title}
      </button>
    </>
  );
}

// prop validation

Button.propTypes = {
  title: PropTypes.string.isRequired,
  cls: PropTypes.string,
};
export default Button;
