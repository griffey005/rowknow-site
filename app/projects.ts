export type Project = {
   name: string;
   description: string;
   stage: string;
   image1?: string;
   image2?: string;
   lastUpdated: string;
};

export const projects: Project[] = [
   {
      name: "CoCoBox",
      description: "Our flagship product, the CoCoBox system allows coaches to monitor shells and communicate with rowers and coxswains.",
      stage: "On-water testing of our breakout-board prototypes have been very successful, winning approval of coaches, coxswains, and rowers. We are currently designing custom hardware to miniaturize, reduce clutter, and increase range.",
      image1: "/products/Rhodos_1.jpeg",
      image2: "/products/Rhodos_kicad.png",
      lastUpdated: "Jan 2026"
   },
   {
      name: "ErgMinder",
      description: "Designed with large data-driven teams in mind, the ErgMinder automates workout setups and data recording. ErgMinder connects an erg to a nearby central hub, through which workouts are assigned and data saved. We are also experimenting with features designed to train athletes to match effort from workout start to finish.",
      stage: "With basic breakout hardware proven and radio links established, we are programming the major features.",
      image1: "/products/ergminder_prototype2.jpg",
      lastUpdated: "Jan 2026"
   },
   {
      name: "SaltLight",
      description: "Anticipated to be our first product for sale, this boat light is designed to reduce expenses for team rowing on brackish water. A modern, module design, the main board will not be exposed to elements even while charging.",
      stage: "The control board is shown here, while we are awaiting the main board from manufacturing. Our current focus is on the mechanical design, with beta testing expected this season.",
      image1: "/products/saltlight_plug.jpeg",
      image2: "/products/ergminder_cad.png",
      lastUpdated: "Jan 2026"
   }
];