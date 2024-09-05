import { FaEye } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";
import Button from "../../components/Button";

function PagesSetting() {
  return (
    //  pages setting
    <>
      <section className="xl:ml-8 flex flex-col gap-4 md:gap-6 lg:gap-8">
        {/* account setting top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* upload photo */}
          <div className="p-4 md:p-6 lg:p-8 space-y-6 flex flex-col justify-start lg:justify-center items-start lg:items-center bg-primary rounded-md">
            {/* user photo */}
            <img
              className="size-[150px] object-cover "
              src="https://i.ibb.co/pxwYHPq/user-photo.png"
              alt=""
            />

            <div className="space-y-6">
              <Button title="Upload Proifle Photo"></Button>
              <p className="text-sm text-[#626C70]">
                <span className="font-medium text-dark">Remember: </span> For
                best results, use an image at least 200px by 200px in .jpg or
                .png format
              </p>
            </div>
          </div>
          {/* upload banner */}
          <div className="space-y-6 flex flex-col justify-center items-center bg-primary rounded-md overflow-hidden">
            {/* user photo */}
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[140px] object-cover"
              src="https://i.ibb.co/tP4QVxw/banner-Image.png"
              alt=""
            />

            <div className="space-y-6 p-4 md:p-6 lg:p-8">
              <Button title="Upload Banner Image"></Button>
              <button
                className={`bg-[#FDEDED] text-[#E84646] capitalize text-sm font-semibold px-6 lg:px-8 py-2 rounded-full my-transition  ring-2 ring-transparent hover:bg-transparent hover:ring-[#E84646]`}
              >
                Remove Banner
              </button>
              <p className="text-sm text-[#626C70]">
                <span className="font-medium text-dark">Remember: </span> For
                best results, use an image at least 200px by 200px in .jpg or
                .png format
              </p>
            </div>
          </div>
          {/* basic info */}
          <div className="lg:col-span-2  bg-primary rounded-md">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Basic Info
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Title</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="text"
                  placeholder="Headline, Sub Title"
                  id="title"
                  name="title"
                />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label htmlFor="biography">Biography</label>
                <textarea
                  rows={4}
                  className=" outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3]"
                  type="text"
                  placeholder="Your biography, Description"
                  id="biography"
                  name="biography"
                />
              </div>
              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* account setting middle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* private info */}
          <div className=" bg-primary rounded-md">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Private Info
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label htmlFor="name">Team</label>
                <select
                  name="team"
                  id="team"
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                >
                  <option value="">Select...</option>
                  <option value="team a">Team A</option>
                  <option value="team b">Team B</option>
                  <option value="team c">Team C</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                >
                  <option value="">Select...</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">India</option>
                  <option value="united-states">United States</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city">City</label>
                <select
                  name="city"
                  id="city"
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                >
                  <option value="">Select...</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="amaravati">Amaravati</option>
                  <option value="new-york">New York</option>
                </select>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label htmlFor="language">Language</label>
                <select
                  name="language"
                  id="language"
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                >
                  <option value="">Select...</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bangla</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* social info */}
          <div className=" bg-primary rounded-md">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Social Account
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="facebook">Facebook</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="text"
                  placeholder="Facebook profile url..."
                  id="facebook"
                  name="facebook"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="twitter">Twitter</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="text"
                  placeholder="Twitter profile url..."
                  id="twitter"
                  name="twitter"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="linkedin">Linkedin</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="text"
                  placeholder="Linkedin profile url..."
                  id="linkedin"
                  name="linkedin"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="instagram">Instagram</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                  type="text"
                  placeholder="Instagram profile url..."
                  id="instagram"
                  name="instagram"
                />
              </div>
              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* contact info */}
          <div className=" bg-primary rounded-md">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Contact Info
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <div className="relative">
                  <MdOutlinePhoneInTalk className="absolute top-1/2 -translate-y-1/2 left-2 text-dark text-lg"></MdOutlinePhoneInTalk>
                  <input
                    className="outline-none p-[10px] pl-[30px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="number"
                    placeholder="Phone number"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <div className="relative">
                  <MdOutlineEmail className="absolute top-1/2 -translate-y-1/2 left-2 text-dark text-lg"></MdOutlineEmail>
                  <input
                    className="outline-none p-[10px] pl-[30px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="email"
                    placeholder="Email address"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="location">Current Location</label>
                <div className="relative">
                  <MdOutlineLocationOn className="absolute top-1/2 -translate-y-1/2 left-2 text-dark text-lg"></MdOutlineLocationOn>
                  <input
                    className="outline-none p-[10px] pl-[30px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="location"
                    placeholder="Current location"
                    id="location"
                    name="location"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="portfolio">Portfolio</label>
                <div className="relative">
                  <TiShoppingBag className="absolute top-1/2 -translate-y-1/2 left-2 text-dark text-lg"></TiShoppingBag>
                  <input
                    className="outline-none p-[10px] pl-[30px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="text"
                    placeholder="Personal portfolio url"
                    id="portfolio"
                    name="portfolio"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* account setting bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {/* change password */}
          <div className="xl:col-span-4 bg-primary rounded-md h-fit">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Change Password
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="currentPassword">Current Password</label>
                <div className="relative">
                  <FaEye className="absolute top-1/2 -translate-y-1/2 right-2 text-dark text-lg"></FaEye>
                  <input
                    className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="password"
                    placeholder="Password"
                    id="currentPassword"
                    name="currentPassword"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newPassword">New Password</label>
                <div className="relative">
                  <FaEye className="absolute top-1/2 -translate-y-1/2 right-2 text-dark text-lg"></FaEye>
                  <input
                    className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="password"
                    placeholder="Password"
                    id="newPassword"
                    name="newPassword"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative">
                  <FaEye className="absolute top-1/2 -translate-y-1/2 right-2 text-dark text-lg"></FaEye>
                  <input
                    className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3] w-full"
                    type="password"
                    placeholder="Password"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* advanced setting */}
          <div className="xl:col-span-3 bg-primary rounded-md h-fit">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Advanced Setting
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 gap-4 md:gap-6 text-dark">
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  defaultChecked
                  type="checkbox"
                  name="showMyBalance"
                />
                <label htmlFor="showMyBalance">Show my balance</label>
              </div>
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  defaultChecked
                  type="checkbox"
                  name="kanbanBoard"
                />
                <label htmlFor="kanbanBoard">
                  Show total Kanban Board card
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  type="checkbox"
                  name="calendarTask"
                />
                <label htmlFor="calendarTask">Show total Calendar task</label>
              </div>
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  defaultChecked
                  type="checkbox"
                  name="calendarEvent"
                />
                <label htmlFor="calendarEvent">
                  Show total Calendar events
                </label>
              </div>
              <hr />
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  defaultChecked
                  type="checkbox"
                  name="privateInformation"
                />
                <label htmlFor="privateInformation">
                  Show private information
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  type="checkbox"
                  name="contactInformation"
                />
                <label htmlFor="contactInformation">Contact information</label>
              </div>
              <div className="flex gap-2">
                <input
                  className="outline-none rounded-md text-sm "
                  type="checkbox"
                  name="socialMediaLink"
                />
                <label htmlFor="socialMediaLink">Social media link</label>
              </div>
              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* pricing plans */}
          <div className="lg:col-span-2 xl:col-span-5 bg-primary rounded-md space-y-4 h-fit">
            {/* upgrade plane */}
            <div className="p-4 md:p-5 lg:p-6 space-y-4">
              {/* title */}
              <h3 className="text-lg text-dark font-medium ">Pricing Plans</h3>
              <div className="text-sm space-y-2 ">
                <h4 className="text-[#005CE8]  uppercase">🚀 Premium</h4>
                <p className="text-[#626C70]">
                  Transfer this account to another user or to an organization
                  where you have the ability to create repositories.
                </p>
              </div>
              <button
                type="submit"
                className="bg-text-color  text-sm font-semibold px-6 py-3 capitalize text-white rounded-full mr-auto my-transition hover:bg-text-color/10 hover:text-text-color"
              >
                Upgrade Plane
              </button>
            </div>
            <hr />
            {/* dactivate account */}
            <div className="px-4 md:px-5 lg:px-6 py-2 space-y-2 pb-8">
              <h3 className="text-lg text-dark font-medium ">
                Deactivate this account
              </h3>
              <p>
                Once you delete a account, there is no going back. Please be
                certain.
              </p>
              <button
                className={`bg-[#FDEDED] text-[#E84646] capitalize text-sm font-semibold px-6 lg:px-8 py-2 rounded-full my-transition  ring-2 ring-transparent hover:bg-transparent hover:ring-[#E84646]`}
              >
                Deactivated account
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PagesSetting;
