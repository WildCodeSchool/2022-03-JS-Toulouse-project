import React from "react";
import "../styles/Home.css";
import Ideas from "../assets/IDEAS.png";
import Collaborators from "../assets/COLLABORATORS.png";
import Pressreview from "../assets/PRESSREVIEW.png";
import Projects from "../assets/PROJECTS.png";
import Profil from "../assets/PROFIL.png";
import Customers from "../assets/CUSTOMERS.png";
import Logout from "../assets/LOGOUT.png";
import Logo from "../assets/ROAD.png";

function Home() {
  return (
    <div className="home">
      <div className="background-logo">
        <div className="background">
          <div className="grid-container">
            <div className="container">
              <img src={Logo} alt="Logo" className="logo" />
              <img
                src={Collaborators}
                alt="Collaborators"
                className="collaborators"
              />
            </div>
            <div className="container-b">
              <img src={Projects} alt="Projects" className="projects" />
              <img src={Ideas} alt="ideas" className="ideas" />
            </div>
            <div className="container">
              <img src={Profil} alt="Profil" className="profil" />
            </div>
            <div className="container" />
            <div className="container">
              <img
                src={Pressreview}
                alt="Pressreview"
                className="pressreview"
              />
              <img src={Customers} alt="Customers" className="customers" />
            </div>
            <div className="container">
              <img src={Logout} alt="Logout" className="logout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
