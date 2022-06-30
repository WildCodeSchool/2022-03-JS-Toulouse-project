import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import imgProject from "../assets/img-project.png";
import roadProject from "../assets/ROADPROJECT.png";
import jeanPierre from "../assets/jean-pierre.png";
import coralie from "../assets/coralie.png";
import theo from "../assets/theo.png";

import "../styles/Project.css";

const title = "Project Sed Ut Perspiciatis Unde Omnis";

function Project() {
  return (
    <>
      <div>
        <Header title={title} />
      </div>

      <div className="road-img-container">
        <img src={roadProject} alt="Project's road" className="road-img" />
      </div>

      <div className="project-grid">
        <div className="project-img-container">
          <img src={imgProject} alt="project" className="project-img" />

          <ul className="techno-container">
            <li>ReatJS</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>AWS</li>
          </ul>
        </div>

        <div className="project-info-flex">
          <div className="project-info-container">
            <div className="project-header-container">
              <div>
                <h4>Customer</h4>
                <p>Joe the firm</p>
              </div>
              <div>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#ffffff",
                    borderRadius: "20px",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                    color: "#000000",
                    margin: "1rem",
                  }}
                  startIcon={<AddIcon />}
                >
                  Participer
                </Button>
              </div>
            </div>
            <h4>{title}</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="messages-container">
        <Divider />

        <img src={jeanPierre} alt="Jean-Pierre" />
        <TextField sx={{ width: "90%" }} />
        <img src={theo} alt="Jean-Pierre" />

        <p>Bonjour Coralie, avec plaisir ! Merci pour ta proposition !</p>
        <img src={coralie} alt="Jean-Pierre" />
        <p>Bonjour, avez-vous besoin d’aide sur le projet ?</p>
        <Divider />
      </div>
    </>
  );
}

export default Project;
