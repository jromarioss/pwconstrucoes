import { ProjectsContainer, ProjectsImg } from "./styles";

import obra01 from "../../../../assets/obra01.jpg";
import obra02 from "../../../../assets/obra02.jpg";
import obra03 from "../../../../assets/obra03.jpg";
import obra04 from "../../../../assets/obra04.jpg";

export function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h2>Projetos da PW Construções</h2>

      <ProjectsImg>
        <img src={obra01} alt="" />
        <img src={obra02} alt="" />
        <img src={obra03} alt="" />
        <img src={obra04} alt="" />
      </ProjectsImg>
    </ProjectsContainer>
  );
}