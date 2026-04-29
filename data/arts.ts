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
    year: "2026",
  },
  {
    id: "art-02",
    title: "L1 Art Plastiques",
    category: "2D Animation",
    description: "School Project for my first year of License in Art Plastiques",
    longDescription:
      "Experimental animation works created during the first year of the Licence Art Plastiques. Explores mixed media techniques combining traditional drawing and digital compositing.",
    imageUrl: "https://i.ytimg.com/an_webp/7kaqRD_RNAw/mqdefault_6s.webp?du=3000&sqp=COyJxs8G&rs=AOn4CLDjBkCmQIWoQTvSUCW7BYZgaw8W2w",
    tags: ["Adobe Animate", "After Effects"],
    year: "2025",
  },
  {
    id: "art-03",
    title: "L1 - Video Dystopie",
    category: "Montage",
    description: "School Project for my first year of License in Art Plastiques",
    longDescription:
      "Vidéo dystopique sur le thème de la surveillance de masse.",
    imageUrl: "https://i.ytimg.com/an_webp/4luvSpc8-rc/mqdefault_6s.webp?du=3000&sqp=CNagxs8G&rs=AOn4CLDOqHsqDlku_3uPFGOMHE4eWjStKA",
    tags: ["Premiere", "After Effects"],
    year: "2025",
  },
  {
    id: "art-04",
    title: "L'espace et le Temps",
    category: "2D Animation",
    description: "Concours des Beaux Arts d'Aix",
    longDescription:
      "Concours des Beaux Arts d'Aix sur le sujet l'espace et le temps.",
    imageUrl: "https://i.ytimg.com/an_webp/aa9eG3QiZ28/mqdefault_6s.webp?du=3000&sqp=CIOgxs8G&rs=AOn4CLBuQF5DxDNz_zIyKnGghiYb_Au5ZA",
    tags: ["Animate", "After Effects"],
    year: "2024",
  },
  {
    id: "art-05",
    title: "3 Games 3 Friends",
    category: "Montage",
    description: "Montage for BUT-MMI",
    longDescription:
      "Montage for my friends on the theme of 3 games 3 friends.",
    imageUrl: "https://gamamkv.github.io/Portefolio/img/3Games3Friends.png",
    tags: ["Premiere", "After Effects"],
    year: "2025",
  },
  {
    id: "art-06",
    title: "LOGO Autour d'un mot",
    category: "Drawing",
    description: "Logo pour un format du média indépendant Revol",
    longDescription:
      "Logo for a format of the independent media Revol.",
    imageUrl: "https://static.wixstatic.com/media/e198de_8c3edf1e131a4d24ac75cd37e9f0dfa8~mv2.png/v1/fit/w_900,h_900,q_90,enc_avif,quality_auto/e198de_8c3edf1e131a4d24ac75cd37e9f0dfa8~mv2.png",
    tags: ["Illustrator"],
    year: "2024",
  },
];
