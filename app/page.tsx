import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

export default function Home() {
   return (
      
      <main style={{
         backgroundColor: "#f7f7f7",
         minHeight: "100vh",
         padding: "3rem 1.5rem"
	}}>
      <div style={{
         maxWidth: "1000px",
         margin: "0 auto"
	}}>
	
         <h1 style={{ marginBottom: "2rem" }}>RowKnow Projects</h1>

	<p style={{
	   maxWidth: "700px",
	   marginBottom: "2.5rem",
	   color: "#333",
	   lineHeight: "1.5"
	}}>
	   RowKnow has three products in development for rowing teams. Each is a mentoring opportunity as well as a products we wish existed
	   in our own rowing and coaching experiences. Contact us if you would like to be notified of beta-testing
	   opportunities.
	</p>

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
         </div>
      </main>
   );
}