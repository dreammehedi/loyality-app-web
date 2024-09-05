import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import NavbarAside from "../shared/navbar_aside/NavbarAside";
import PagesPagination from "../shared/pages-pagination/PagesPagination";
import Footer from "./../shared/footer/Footer";

function MainLayout() {
  return (
    // main layout
    <main className="container grid lg:grid-cols-12">
      {/* navbar aside */}
      <div className="lg:col-span-2 h-screen">
        <NavbarAside></NavbarAside>
      </div>

      {/* header & footer common and outlet */}
      <div className="lg:col-span-10">
        {/* header */}
        <Header></Header>

        {/* pages pagination */}
        <PagesPagination></PagesPagination>

        {/* outlet */}
        <Outlet></Outlet>

        {/* footer */}
        <Footer></Footer>
      </div>
    </main>
  );
}

export default MainLayout;
