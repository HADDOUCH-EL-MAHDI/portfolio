import "./ProjectList.css";
import Project from "../Project/Project";
import { Projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Quelques images de mes projets:</h1>
        <p className="pl-desc">
        J'ai essayé de capturer des images à quelques projets qui j'ai réalisé pendant cette année dans
        les différents domaines
        informatiques (react, JavaFX, développement mobile...)
        </p>
      </div>
      <div className="pl-list">
        {Projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
