export type ArtCategory = "Drawing" | "2D Animation" | "Motion Graphics";

export interface ArtPiece {
  id: string;
  title: string;
  category: ArtCategory;
  description: string;
  imageUrl: string; // Replace with real URLs
  videoUrl?: string;
}

// ─── EDIT THIS ARRAY TO ADD YOUR WORKS ──────────────────────────────────────
export const arts: ArtPiece[] = [
  {
    id: "art-01",
    title: "BUT-MMI Projects Year 1",
    category: "2D Animation",
    description: "School Project in the BUT MMI first year",
    imageUrl: "/arts/placeholder-01.jpg",
  },
  {
    id: "art-02",
    title: "L1 Art Plastiques",
    category: "2D Animation",
    description: "School Project for my first year of License in Art Plastiques",
    imageUrl: "/arts/placeholder-02.jpg",
  },
  {
    id: "art-03",
    title: "Animation Perso",
    category: "2D Animation",
    description: "Personal Animation Projects",
    imageUrl: "/arts/placeholder-03.jpg",
  },
  {
    id: "art-04",
    title: "OPERATOR SKETCH",
    category: "Drawing",
    description: "Concept sketch for a tactical operator character.",
    imageUrl: "/arts/placeholder-04.jpg",
  },
];
