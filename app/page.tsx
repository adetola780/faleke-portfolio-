import type { Metadata } from "next";
import { Portfolio } from "./portfolio";

export const metadata: Metadata = {
  title: "Olumide Faleke — Graphic Designer & Creative Professional",
  description:
    "The portfolio of Lagos-based graphic designer and creative communications professional Olumide Faleke.",
};

export default function Home() {
  return <Portfolio />;
}
