import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

export default function Home() {
   return (
      <main style={{ padding: "2rem" }}>
         <h1>RowKnow Projects</h1>

            <div style={{
               marginTop: "2rem",
               width: "100%",
               maxWidth: "900px", marginLeft: "auto", marginRight: "auto"
               }}>
            {projects.map( ( project ) => (
	       <ProjectCard
	          key={project.name}
	          name={project.name}
	          description={project.description}
	          stage={project.stage}
                  image1={project.image1}
                  image2={project.image2}
               />
            ))}
         </div>
      </main>
   );
}