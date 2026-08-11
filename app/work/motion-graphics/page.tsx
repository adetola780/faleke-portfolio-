import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Graphics",
  description: "Motion graphics and animated visual work by Olumide Faleke.",
};

const motionPieces = [
  {
    number: "01",
    title: "Motion Study One",
    src: "/projects/motion-graphics/per.mp4",
  },
  {
    number: "02",
    title: "Motion Study Two",
    src: "/projects/motion-graphics/thursday.mp4",
  },
  {
    number: "03",
    title: "Motion Study Three",
    src: "/projects/motion-graphics/ppp.mp4",
  },
];

export default function MotionGraphicsPage() {
  return (
    <main className="project-page motion-project-page">
      <header className="project-page-nav">
        <a href="/" className="project-back"><span>â†</span> Back to portfolio</a>
        <a href="/#contact">Start a project â†—</a>
      </header>

      <section className="project-hero motion-project-hero">
        <div className="project-kicker">Selected work / 05</div>
        <h1>Motion<br /><em>Graphics.</em></h1>
        <div className="project-hero-bottom">
          <p>Animated visuals created to give campaigns more energy, rhythm and attention across digital platforms.</p>
          <div><strong>3</strong><span>Motion pieces</span></div>
          <div><strong>MP4</strong><span>Video collection</span></div>
        </div>
      </section>

      <section className="motion-gallery" aria-label="Motion graphics projects">
        {motionPieces.map((piece) => (
          <article className="motion-piece" key={piece.src}>
            <div className="motion-piece-heading">
              <span>{piece.number}</span>
              <h2>{piece.title}</h2>
            </div>
            <video controls playsInline preload="metadata">
              <source src={piece.src} type="video/mp4" />
              Your browser does not support MP4 video.
            </video>
          </article>
        ))}
      </section>

      <section className="project-next motion-project-next">
        <span>Need your message to move?</span>
        <h2>Let&apos;s build motion that holds attention.</h2>
        <a href="mailto:Faleke24@gmail.com">Start a conversation â†—</a>
      </section>

      <footer className="project-footer">
        <span>Â© {new Date().getFullYear()} Olumide Faleke</span>
        <a href="/">Return home â†‘</a>
      </footer>
    </main>
  );
}
