export type Project = {
   name: string;
   description: string;
   stage: string;
   image1?: string;
   image2?: string;
};

export const projects: Project[] = [
   {
      name: "ErgMinder",
      description: "Erg workout ID and data capture helper.",
      stage: "Prototype",
      image1: "/products/ergminder_prototype2.jpg"
   },
   {
      name: "CoCoBox",
      description: "Coach-to-crew communication system.",
      stage: "Field-tested prototype",
      image1: "/products/Rhodos_1.jpeg",
      image2: "/products/Rhodos_kicad.png"
   },
   {
      name: "SaltLight",
      description: "Saltwater-tolerant rowing shell light.",
      stage: "Engineering prototype",
      image1: "/products/saltlight_plug.jpeg",
      image2: "/products/ergminder_cad.png"
   }
];