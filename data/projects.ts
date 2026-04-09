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
    desc: "Tournament bracket creator",
    tech: ["React", "JS", "CSS"],
    completion: 95,
    url: "https://github.com/Ulyxx3/versusite",
  },
  {
    name: "POKEDEXIA",
    desc: "Beautiful Pokédex app",
    tech: ["JS", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/pokedexia",
  },
  {
    name: "PORTFOLIO R.E.P.O.",
    desc: "Tactical UI Portfolio",
    tech: ["React", "Framer", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ulyxx3.github.io",
  },
  {
    name: "CLIMBING GAMBLING",
    desc: "Godot Climbing Game",
    tech: ["Godot", "GDScript"],
    completion: 10,
    url: "https://github.com/Ulyxx3/climbing-gambling",
  },
  {
    name: "OFFSHADES",
    desc: "Minecraft Shaders",
    tech: ["GLSL"],
    completion: 30,
    url: "https://github.com/Ulyxx3/offshades",
  },
  {
    name: "OSMV SERIES",
    desc: "OBS Music Visualizers & Site",
    tech: ["Rust", "C#", "JS", "HTML"],
    completion: 100,
    url: "https://github.com/Ulyxx3/osmv",
  },
  {
    name: "ANI-CLI-FR",
    desc: "Anime CLI fork (FR sub/dub)",
    tech: ["Shell", "Python"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ani-cli-fr",
  },
  {
    name: "DARK PATTERNS",
    desc: "School project on UX ethics",
    tech: ["PHP", "MySQL", "JS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/dark-patterns",
  },
  {
    name: "ANTMAP",
    desc: "GPS using Ant Colony Optimization",
    tech: ["Rust"],
    completion: 100,
    url: "https://github.com/Ulyxx3/antmap",
  },
];
