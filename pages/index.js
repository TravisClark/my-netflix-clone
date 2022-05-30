import Banner from "../components/Banner/Banner";
import Head from "../components/Head/Head";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Section/Section";

import phoneImg from "../assets/mobile-0819.jpg";
import kidsImg from "../assets/kidsValueProp.png";
import doublePhonesImg from "../assets/vn.jpg";
import TvShow from "../components/TvShow/TvShow";
import Download from "../components/Download/Download";
import Kids from "../components/Kids/Kids";
import AndroidDownload from "../components/AndroidDownload/AndroidDownload";
import Support from "../components/Support/Support";
import Footer from "../components/Footer/Footer";

const sectionList = [
  {
    title: "Enjoy on your TV.",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    
  },
  {
    title: "Download your shows to watch offline.",
    description:
      "Save your favorites easily and always have something to watch.",
    img: phoneImg,
  },
  {
    title: "Watch everywhere.",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    img: null,
  },
  {
    title: "Create profiles for kids.",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    img: kidsImg,
  },
  {
    title: "Have an Android Phone? Get our new free plan!",
    description:
      "Watch a selection of new movies and TV shows without adding any payment details!",
    img: doublePhonesImg,
  },
];
// const sectionData = sectionList.map(section => <Section key={section.title} {...section}/>)
export default function Home() {
  return (
    <div className="app">
      <Head />
      <Navbar />
      <Banner />
      <TvShow/>
      <Download />
      <Kids/>
      <AndroidDownload/>
      <Support/>
      <Footer/>
    </div>
  );
}
