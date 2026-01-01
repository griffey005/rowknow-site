type ProjectCardProps = {
   name: string;
   description: string;
   stage: string;
};

export default function ProjectCard( { name, description, stage }: ProjectCardProps ) {
   return (
      <div style={{
         border: "1px solid #ccc",
         padding: "1rem",
         marginBottom: "1.5rem"
      }}>
         <h2>{name}</h2>
         <p>{description}</p>
         <strong>Stage:</strong> {stage}
      </div>
   );
}