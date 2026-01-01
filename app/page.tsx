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
            <ProjectCard
               name="ErgMinder"
               description="Erg workout ID and data capture helper."
               stage="Prototype"
            />
            
            <ProjectCard
               name="CoCoBox"
               description="Coach-to-crew communication system."
               stage="Field-tested prototype"
            />
            
            <ProjectCard
               name="SaltLight"
               description="Saltwater-tolerant rowing shell light."
               stage="Engineering prototypes"
            />
         </div>
      </main>
   );
}