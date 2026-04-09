import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { arts } from "@/data/arts";
import ArtDetailClient from "./ArtDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

// Required for static export — tells Next.js which [id] values to generate
export async function generateStaticParams() {
  return arts.map((piece) => ({ id: piece.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const piece = arts.find((a) => a.id === id);
  if (!piece) return { title: "Not Found" };
  return {
    title: `${piece.title} — ULYXX3 Arts`,
    description: piece.description,
  };
}

export default async function ArtDetailPage({ params }: Props) {
  const { id } = await params;
  const piece = arts.find((a) => a.id === id);
  if (!piece) notFound();

  // adjacent pieces for prev/next navigation
  const index = arts.indexOf(piece);
  const prev = index > 0 ? arts[index - 1] : null;
  const next = index < arts.length - 1 ? arts[index + 1] : null;

  return <ArtDetailClient piece={piece} prev={prev} next={next} />;
}
