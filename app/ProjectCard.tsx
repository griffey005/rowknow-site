type ProjectCardProps = {
   name: string;
   description: string;
   stage: string;
};

export default function ProjectCard( { name, description, stage, image1, image2 }: ProjectCardProps ) {
   return (
      <div style={{
         border: "1px solid #ccc",
         padding: "1rem",
         marginBottom: "1.5rem"
      }}>
         <div style={{
            display: "flex",
            gap: "1rem"
         }}>
            <div style={{ flex: 3 }}>
               <h2 style={{ marginTop: 0 }}><strong>{name}</strong></h2>
               <p>{description}</p>
	   <div style={{ marginTop: "0.75rem" }}>
	      <strong>Status:</strong> {stage}
	   </div>
            </div>

            <div style={{
               flex: 2,
               display: "flex",
               flexDirection: "row",
               gap: "0.75rem"
            }}>
		{image1 && (
		   <div style={{
		      flex: "0 0 50%",
		      height: "140px",
		      backgroundColor: "#eee",
		      display: "flex",
		      alignItems: "center",
		      justifyContent: "center"
		   }}>
		      <img
			 src={image1}
			 alt={`${name} image 1`}
			 style={{ width: "100%", height: "100%", objectFit: "cover" }}
		      />
		   </div>
		)}
		{image2 && (
		   <div style={{
		      flex: 1,
		      height: "140px",
		      backgroundColor: "#eee",
		      display: "flex",
		      alignItems: "center",
		      justifyContent: "center"
		   }}>
		      <img
			 src={image2}
			 alt={`${name} image 2`}
			 style={{ width: "100%", height: "100%", objectFit: "cover" }}
		      />
		   </div>
		)}
            </div>
         </div>
      </div>
   );
}