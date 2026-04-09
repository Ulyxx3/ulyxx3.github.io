export interface Project {
  name: string;
  desc: string;
  tech: string[];
  completion: number;
  url?: string; // GitHub repo URL — update these with exact repo links
}

export const projects: Project[] = [
  {
    name: "VERSUSITE",
    desc: "Créateur de tournois",
    tech: ["React", "JS", "CSS"],
    completion: 95,
    url: "https://github.com/Ulyxx3/versusite",
  },
  {
    name: "POKEDEXIA",
    desc: "Application Pokédex",
    tech: ["JS", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/pokedexia",
  },
  {
    name: "PORTFOLIO R.E.P.O.",
    desc: "Portfolio avec UI tactique",
    tech: ["React", "Framer", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ulyxx3.github.io",
  },
  {
    name: "CLIMBING GAMBLING",
    desc: "Jeu d'escalade sous Godot",
    tech: ["Godot", "GDScript"],
    completion: 10,
    url: "https://github.com/Ulyxx3/climbing-gambling",
  },
  {
    name: "OFFSHADES",
    desc: "Shaders pour Minecraft",
    tech: ["GLSL"],
    completion: 30,
    url: "https://github.com/Ulyxx3/offshades",
  },
  {
    name: "OSMV SERIES",
    desc: "Visualiseurs de musique pour OBS & Site",
    tech: ["Rust", "C#", "JS", "HTML"],
    completion: 100,
    url: "https://github.com/Ulyxx3/osmv",
  },
  {
    name: "ANI-CLI-FR",
    desc: "Fork d'Anime CLI (VF/VOSTFR)",
    tech: ["Shell", "Python"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ani-cli-fr",
  },
  {
    name: "DARK PATTERNS",
    desc: "Projet d'école sur l'éthique UX",
    tech: ["PHP", "MySQL", "JS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/dark-patterns",
  },
  {
    name: "ANTMAP",
    desc: "GPS utilisant l'optimisation par colonie de fourmis",
    tech: ["Rust"],
    completion: 100,
    url: "https://github.com/Ulyxx3/antmap",
  },
];
