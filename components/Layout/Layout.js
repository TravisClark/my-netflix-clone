import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Head />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
