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
    title: "BUT-MMI Projets Année 1",
    category: "2D Animation",
    description: "Projet d'école en première année de BUT MMI",
    longDescription:
      "Une collection de projets d'animation 2D réalisés lors de la première année du BUT MMI. Couvre les bases du motion design, l'animation image par image et le storytelling numérique.",
    imageUrl: "https://i.ytimg.com/vi/_ZD-fT-YSIE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoEzAP&rs=AOn4CLDTfIW53ZbfrFau59OeQmKxY_xJ2w",
    tags: ["Clip Studio Paint"],
    year: "2026",
  },
  {
    id: "art-02",
    title: "L1 Arts Plastiques",
    category: "2D Animation",
    description: "Projet d'école pour ma première année de Licence en Arts Plastiques",
    longDescription:
      "Travaux d'animation expérimentale créés lors de la première année de Licence Arts Plastiques. Explore des techniques de médias mixtes combinant dessin traditionnel et compositing numérique.",
    imageUrl: "https://i.ytimg.com/an_webp/7kaqRD_RNAw/mqdefault_6s.webp?du=3000&sqp=CKyj3c4G&rs=AOn4CLAr8nj6BkJCw6qnY6OQMZdbHVLH5g",
    tags: ["Adobe Animate", "After Effects"],
    year: "2025",
  },
  {
    id: "art-03",
    title: "L1 - Vidéo Dystopie",
    category: "Montage",
    description: "Projet d'école pour ma première année de Licence en Arts Plastiques",
    longDescription:
      "Vidéo dystopique sur le thème de la surveillance de masse.",
    imageUrl: "https://i.ytimg.com/an_webp/4luvSpc8-rc/mqdefault_6s.webp?du=3000&sqp=CN3G384G&rs=AOn4CLDaN1adRpyeWecZVOexT54zl1D37Q",
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
    imageUrl: "https://i.ytimg.com/an_webp/aa9eG3QiZ28/mqdefault_6s.webp?du=3000&sqp=CL-5384G&rs=AOn4CLDenaTsueydLT9j_YDiJ2tf0AC89A",
    tags: ["Animate", "After Effects"],
    year: "2024",
  },
  {
    id: "art-05",
    title: "3 Games 3 Friends",
    category: "Montage",
    description: "Montage pour le BUT-MMI",
    longDescription:
      "Montage pour mes amis sur le thème 3 games 3 friends.",
    imageUrl: "https://i9.ytimg.com/vi_webp/BSjPqrK-uEQ/mq3.webp?sqp=CJTc3c4G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCYgZSghMA8=&rs=AOn4CLCOHSsHSqGiLfg9PhaOUc6Q7HK1KA",
    tags: ["Premiere", "After Effects"],
    year: "2025",
  },
  {
    id: "art-06",
    title: "LOGO Autour d'un mot",
    category: "Drawing",
    description: "Logo pour un format du média indépendant Revol",
    longDescription:
      "Logo pour un format du média indépendant Revol.",
    imageUrl: "https://static.wixstatic.com/media/e198de_8c3edf1e131a4d24ac75cd37e9f0dfa8~mv2.png/v1/fit/w_900,h_900,q_90,enc_avif,quality_auto/e198de_8c3edf1e131a4d24ac75cd37e9f0dfa8~mv2.png",
    tags: ["Illustrator"],
    year: "2024",
  },
];
