export type ArtCategory = "Drawing" | "2D Animation" | "Motion Graphics";

export interface ArtPiece {
  id: string;
  title: string;
  category: ArtCategory;
  description: string;
  imageUrl: string; // thumbnail + main view
  videoUrl?: string; // optional video (mp4/webm URL)
  longDescription?: string; // longer text shown on the detail page
  tags?: string[]; // optional extra tags: tools used, style, etc.
  year?: string; // optional year label
}

// ─── EDIT THIS ARRAY TO ADD YOUR WORKS ──────────────────────────────────────
// To add a piece: copy one entry, give it a unique id, fill in your data.
// The detail page at /arts/[id] is generated automatically for every entry.
export const arts: ArtPiece[] = [
  {
    id: "art-01",
    title: "BUT-MMI Projects Year 1",
    category: "2D Animation",
    description: "School Project in the BUT MMI first year",
    longDescription:
      "A collection of 2D animation projects produced during the first year of the BUT MMI programme. Covers motion design fundamentals, frame-by-frame animation, and digital storytelling.",
    imageUrl: "/arts/placeholder-01.jpg",
    tags: ["After Effects", "Premiere", "Illustrator"],
    year: "2024",
  },
  {
    id: "art-02",
    title: "L1 Art Plastiques",
    category: "2D Animation",
    description: "School Project for my first year of License in Art Plastiques",
    longDescription:
      "Experimental animation works created during the first year of the Licence Art Plastiques. Explores mixed media techniques combining traditional drawing and digital compositing.",
    imageUrl: "/arts/placeholder-02.jpg",
    tags: ["Procreate", "After Effects"],
    year: "2023",
  },
  {
    id: "art-03",
    title: "Animation Perso",
    category: "2D Animation",
    description: "Personal Animation Projects",
    longDescription:
      "A growing collection of personal animation experiments — character rigs, loops, and short sequences created outside of school constraints.",
    imageUrl: "/arts/placeholder-03.jpg",
    tags: ["Procreate", "DaVinci Resolve"],
    year: "2025",
  },
  {
    id: "art-04",
    title: "OPERATOR SKETCH",
    category: "Drawing",
    description: "Concept sketch for a tactical operator character.",
    longDescription:
      "Character concept art for a tactical operator design. Explores silhouette, gear details and posing for a game-ready character archetype.",
    imageUrl: "/arts/placeholder-04.jpg",
    tags: ["Procreate", "Digital Ink"],
    year: "2025",
  },
];
