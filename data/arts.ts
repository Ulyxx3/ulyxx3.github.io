export type ArtCategory = "Drawing" | "2D Animation" | "Motion Graphics" | "Montage";

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
    imageUrl: "https://i.ytimg.com/vi/_ZD-fT-YSIE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoEzAP&rs=AOn4CLDTfIW53ZbfrFau59OeQmKxY_xJ2w",
    tags: ["Clip Studio Paint"],
    year: "2024",
  },
  {
    id: "art-02",
    title: "L1 Art Plastiques",
    category: "2D Animation",
    description: "School Project for my first year of License in Art Plastiques",
    longDescription:
      "Experimental animation works created during the first year of the Licence Art Plastiques. Explores mixed media techniques combining traditional drawing and digital compositing.",
    imageUrl: "https://i.ytimg.com/an_webp/7kaqRD_RNAw/mqdefault_6s.webp?du=3000&sqp=CKyj3c4G&rs=AOn4CLAr8nj6BkJCw6qnY6OQMZdbHVLH5g",
    tags: ["Adobe Animate", "After Effects"],
    year: "2023",
  },
  {
    id: "art-03",
    title: "L1 - Video Dystopie",
    category: "Montage",
    description: "School Project for my first year of License in Art Plastiques",
    longDescription:
      "Vidéo dystopique sur le thème de la surveillance de masse.",
    imageUrl: "https://i.ytimg.com/an_webp/4luvSpc8-rc/mqdefault_6s.webp?du=3000&sqp=CPOz3c4G&rs=AOn4CLCOonjPQsQJKeS0ghknmn5pnYnzUw",
    tags: ["Premiere", "After Effects"],
    year: "2025",
  },
  {
    id: "art-04",
    title: "L'espace et le Temps",
    category: "Drawing",
    description: "Concours des Beaux Arts d'Aix",
    longDescription:
      "Concours des Beaux Arts d'Aix sur le sujet l'espace et le temps.",
    imageUrl: "https://i.ytimg.com/an_webp/aa9eG3QiZ28/mqdefault_6s.webp?du=3000&sqp=CMOh3c4G&rs=AOn4CLDghSa_KtQiVg55Gf2wTavy0sOfrw",
    tags: ["Animate", "After Effects"],
    year: "2025",
  },
];
