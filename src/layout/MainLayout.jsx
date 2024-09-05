import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import NavbarAside from "../shared/navbar_aside/NavbarAside";
import PagesPagination from "../shared/pages-pagination/PagesPagination";
import Footer from "./../shared/footer/Footer";

function MainLayout() {
  return (
    // main layout
    <main className="container grid grid-cols-1 xl:grid-cols-12">
      {/* navbar aside */}
      <div className="hidden xl:inline-block xl:col-span-2 min-h-screen bg-primary">
        <NavbarAside></NavbarAside>
      </div>

      {/* header & footer common and outlet */}
      <div className="xl:col-span-10">
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
