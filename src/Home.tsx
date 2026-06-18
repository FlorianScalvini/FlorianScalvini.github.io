import './App.css';
import Skills from "./components/Skills";
import ProjectCards from "./components/ProjectCards";
import LatestPublication from "./components/LatestPublication";
import Project from "./components/Project";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Label from "./components/Label";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import LatestContent from "./components/latest_content";

function Home() {
  return (

      <div className="min-h-screen bg-neutral-950">
          <Header/>
          <Hero/>
          <Resume/>
          <Project/>
          <LatestPublication/>
          <LatestContent/>
          <Footer/>
      </div>
  );
}

export default Home;
