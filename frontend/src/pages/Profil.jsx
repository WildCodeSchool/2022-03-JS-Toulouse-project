import React from "react";
import Button from "@mui/material/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Header from "../components/Header";
import "../styles/Profil.css";
import profil from "../assets/profilPicture.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import physics from "../assets/physics.png";
import python from "../assets/python.png";

function Profil() {
  const profilUser = [
    {
      profilName: "John Doe",
      jobTitle: "Product designer",
      nameAgency: "Toulouse",
      numAgency: "05 61 62 02 03",
    },
  ];

  return (
    <div>
      <Header name="Profil" />
      <div className="profil-container">
        <img className="img-profil" src={profil} alt="profil" />
        <section className="profil-user">
          <h1>{profilUser[0].profilName}</h1>
          <p>{profilUser[0].jobTitle}</p>
        </section>
        <section>
          <div className="btn-profil">
            <Button
              sx={{ color: "black" }}
              variant="outlined"
              startIcon={<AlternateEmailIcon sx={{ color: "#e79759" }} />}
            >
              Contact
            </Button>

            <Button
              sx={{ color: "black" }}
              variant="outlined"
              startIcon={
                <CalendarMonthOutlinedIcon sx={{ color: "#e79759" }} />
              }
            >
              Schedule
            </Button>

            <Button
              sx={{ color: "black" }}
              variant="outlined"
              startIcon={<StarOutlineOutlinedIcon sx={{ color: "#e79759" }} />}
            >
              Favorites
            </Button>

            <IconButton aria-label="delete">
              <EditIcon />
            </IconButton>
          </div>
        </section>
        <section>
          <div className="card-container-global">
            <div id="card" className="about-container">
              <h2>About me</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                eaque qui. Voluptate modi, possimus, et maxime ut labore sint
                ullam molestiae accusantium minus nulla officiis nesciunt
                facilis, corrupti earum molestias.
              </p>
            </div>
            <div className="card-container1">
              <div id="card1" className="tech-stack-container">
                <h2>Tech Stack</h2>
                <div className="image-stack">
                  <img src={js} alt="stack" />
                  <img src={physics} alt="" />
                  <img src={nodejs} alt="" />
                  <img src={python} alt="" />
                </div>
              </div>
              <div id="card1" className="agency-container">
                <h2>Agency</h2>
                <p
                  style={{
                    color: "#e79759",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {profilUser[0].nameAgency}
                </p>
                <p>{profilUser[0].numAgency}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profil;
