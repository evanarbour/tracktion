import React, { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Container() {
  // setting currentPage default to SignIn page.
  const [currentPage, setCurrentPage] = useState("SignIn");

  const renderPage = () => {
    if (currentPage === "SignIn") {
      return <SignIn />;
    } 
    if (currentPage === "SignUp") {
        return <SignUp />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="content-wrap">{renderPage()}</div>
      <Footer />
    </div>
  );
}
