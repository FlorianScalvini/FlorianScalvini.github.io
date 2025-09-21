import './App.css';
import Skills from "./components/Skills";
import ProjectCards from "./components/ProjectCards";
import LatestPublication from "./components/LatestPublication";
import Project from "./components/Project";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Label from "./components/Label";
import Portfolio from "./components/Portfolio";
import Teaching from "./components/Teaching";
import Footer from "./components/Footer";

function PortfolioPage() {
  return (

      <div className={"overflow-auto fixed inset-0 -z-10"} style={{backgroundColor:"#FEFFF0"}}>
          <Header/>
          <Teaching/>
          <Footer/>
      </div>
  );
}

export default PortfolioPage;
