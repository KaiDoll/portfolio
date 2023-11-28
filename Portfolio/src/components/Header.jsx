import { useState } from "react";
import Navigation from "./Navigation";
// import Project from './Project';
// import Link from './Link';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

//importing the components
export default function Header() {
  //set the about page as the first page when the users enters
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => { //If the currentpage status will default to about page as a mainpage. 
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>{renderPage()}</main>
    </div>
  );
}
