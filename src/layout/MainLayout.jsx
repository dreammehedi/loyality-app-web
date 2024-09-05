import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import NavbarAside from "../shared/navbar_aside/NavbarAside";
import Footer from "./../shared/footer/Footer";

function MainLayout() {
  // navbar aside active
  const [navbarAsideActive, setNavbarAsideActive] = useState(false);

  return (
    // main layout
    <main className="container grid grid-cols-1 xl:grid-cols-12 relative">
      {/* navbar aside */}
      <div
        className={`${
          navbarAsideActive ? "visible left-0 min-w-[300px]" : "-left-full"
        } absolute z-[9999] top-0 xl:static my-transition xl:inline-block xl:col-span-2 min-h-screen bg-primary`}
      >
        <NavbarAside setNavbarAsideActive={setNavbarAsideActive}></NavbarAside>
      </div>

      {/* header & footer common and outlet */}
      <div className="xl:col-span-10">
        {/* header */}
        <Header setNavbarAsideActive={setNavbarAsideActive}></Header>

        {/* outlet */}
        <Outlet></Outlet>

        {/* footer */}
        <Footer></Footer>
      </div>
    </main>
  );
}

export default MainLayout;
