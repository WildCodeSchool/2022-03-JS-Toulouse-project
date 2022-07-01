import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import imgProject from "../assets/img-project.png";
import roadProject from "../assets/ROADPROJECT.png";
import jeanPierre from "../assets/jean-pierre.png";
import coralie from "../assets/coralie.png";
import theo from "../assets/theo.png";
import SpeedDial from "../components/SpeedDial";
import logo from "../assets/ROAD.png";

import "../styles/Project.css";

const title = "Project Sed Ut Perspiciatis Unde Omnis";

function Project() {
  return (
    <>
      <header className="top-bar">
        <img src={logo} alt="logo" />
        <SpeedDial />
      </header>

      <div className="road-img-container">
        <img src={roadProject} alt="Project's road" className="road-img" />
      </div>

      <div className="project-grid">
        <div className="project-img-container">
          <img src={imgProject} alt="project" className="project-img" />
        </div>

        <div className="project-info-flex">
          <div className="project-info-container">
            <div className="project-header-container">
              <div>
                <h4 className="title">Customer</h4>
                <p className="text">Joe the firm</p>
              </div>
              <div>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#ffffff",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px rgba(0, 0, 0, 0.25)",
                    color: "#000000",
                    margin: "1rem",
                  }}
                  startIcon={<AddIcon />}
                >
                  Participate
                </Button>
              </div>
            </div>
            <h4 className="title">{title}</h4>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati inventore praesentium atque at laudantium doloribus
              tempora a molestiae consequuntur? Repellendus, neque quibusdam
              repellat temporibus exercitationem, perferendis alias dolore
              molestiae nulla, vero esse dicta.
              <br />
              <br />
              Quasi dolor amet dignissimos sit nostrum saepe aut, exercitationem
              unde eveniet nobis accusantium aliquid esse quidem labore
              molestias voluptate recusandae delectus architecto laborum
              corrupti. Veniam eius, quos sit maiores molestias a repellendus
              quam adipisci fugit eum eaque animi harum voluptatibus blanditiis
              temporibus delectus tempore quo dicta magni quod. Explicabo,
              quisquam vel.
              <br />
              <br />
              Ratione nemo molestiae vero soluta iure officiis ad ducimus
              corrupti, aliquam ullam dolorem deserunt quod? Dolores fuga
              necessitatibus unde deserunt provident, incidunt eligendi
              reprehenderit similique maiores, assumenda odit nulla labore nihil
              magnam voluptates praesentium laboriosam ratione facere hic
              corrupti officiis. Nihil illum a consectetur dolorem velit
              aspernatur laborum commodi incidunt eius dicta, omnis minus est
              esse temporibus pariatur itaque expedita sequi error? Similique.
            </p>
          </div>
        </div>
      </div>

      <ul className="techno-container">
        <li>#ReatJS</li>
        <li>#Node</li>
        <li>#GraphQL</li>
        <li>#AWS</li>
      </ul>

      <Divider sx={{ margin: "2rem" }} />
      <div className="messages-container">
        <img src={jeanPierre} alt="Jean-Pierre" />
        <TextField
          placeholder="Envoyer un commentaire"
          sx={{ width: "100%" }}
        />

        <img src={theo} alt="Théo" />
        <div className="theo-container">
          <h4>Théo</h4>
          <p>Bonjour Coralie, avec plaisir ! Merci pour ta proposition !</p>
        </div>

        <img src={coralie} alt="Coralie" />
        <div className="coralie-container">
          <h4>Coralie</h4>
          <p>Bonjour, avez-vous besoin d’aide sur le projet ?</p>
        </div>
        <Divider />
      </div>
    </>
  );
}

export default Project;
