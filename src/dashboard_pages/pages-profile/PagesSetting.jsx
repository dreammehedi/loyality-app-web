import bannerImage from "../../assets/banner-image.png";
import userPhoto from "../../assets/user-photo.png";
import Button from "../../components/Button";

function PagesSetting() {
  return (
    //  pages setting
    <>
      <section className="mx-4 md:mx-6 lg:mx-8">
        {/* account setting top */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* upload photo */}
          <div className="p-4 md:p-6 lg:p-8 space-y-6 flex flex-col justify-center items-center bg-primary rounded-md">
            {/* user photo */}
            <img className="size-[150px] object-cover" src={userPhoto} alt="" />

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
          <div className=" space-y-6 flex flex-col justify-center items-center bg-primary rounded-md overflow-hidden">
            {/* user photo */}
            <img
              className="w-full h-[140px] object-cover"
              src={bannerImage}
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
          <div className="col-span-2  bg-primary rounded-md">
            {/* title */}
            <p className="px-4 md:px-5 lg:px-6 py-3 text-dark font-medium border-b border-[#959FA3]">
              Basic Info
            </p>

            {/* form */}
            <form className="w-full p-4 md:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3]"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Title</label>
                <input
                  className="outline-none p-[10px] rounded-md text-[#959FA3] text-sm ring-1 ring-[#959FA3]"
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
      </section>
    </>
  );
}

export default PagesSetting;
