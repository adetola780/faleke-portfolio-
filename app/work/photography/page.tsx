import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography | Olumide Faleke",
  description: "Portrait, event and lifestyle photography by Olumide Faleke.",
};

const photographs = [
  { src: "/projects/photography/portrait-denim.jpg", alt: "Portrait of a woman wearing denim and sunglasses" },
  { src: "/projects/photography/traditional-portrait-elder.jpg", alt: "Traditional portrait of an elder dressed in white" },
  { src: "/projects/photography/traditional-couple.jpg", alt: "Traditional portrait of a couple" },
  { src: "/projects/photography/traditional-portrait-woman.jpg", alt: "Portrait of a woman in blue traditional attire" },
  { src: "/projects/photography/professional-portrait-glasses.jpg", alt: "Professional portrait of a woman wearing glasses" },
  { src: "/projects/photography/child-celebration.jpg", alt: "Child playing with colourful balloons" },
  { src: "/projects/photography/celebration-portrait-blue.jpg", alt: "Celebration portrait in blue traditional attire" },
  { src: "/projects/photography/toddler-studio-portrait.jpg", alt: "Studio portrait of a toddler" },
];

export default function PhotographyPage() {
  return (
    <main className="project-page photography-project-page">
      <header className="project-page-nav">
        <a href="/" className="project-back"><span>←</span> Back to portfolio</a>
        <a href="/#contact">Book a shoot ↗</a>
      </header>

      <section className="project-hero photography-project-hero">
        <div className="project-kicker">Selected work / 04</div>
        <h1>People, moments<br /><em>&amp; stories.</em></h1>
        <div className="project-hero-bottom">
          <p>Portrait and event photography shaped by natural expression, cultural detail and human connection.</p>
          <div><strong>8</strong><span>Selected photographs</span></div>
          <div><strong>Lagos</strong><span>Nigeria</span></div>
        </div>
      </section>

      <section className="photography-gallery" aria-label="Photography portfolio">
        {photographs.map((photo, index) => (
          <figure className={`photography-shot photography-shot-${index + 1}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading={index > 1 ? "lazy" : "eager"} />
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span> Portrait study</figcaption>
          </figure>
        ))}
      </section>

      <section className="project-next photography-project-next">
        <span>Have a moment worth keeping?</span>
        <h2>Let&apos;s create photographs that feel like you.</h2>
        <a href="mailto:Faleke24@gmail.com">Book a conversation ↗</a>
      </section>

      <footer className="project-footer">
        <span>© {new Date().getFullYear()} Olumide Faleke</span>
        <a href="/">Return home ↑</a>
      </footer>
    </main>
  );
}
