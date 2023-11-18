import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "var(--accent-color)" }}>
        Key Projects I've Worked On
      </h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
