import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand & Logo Design",
  description: "Brand identity and logo design projects by Olumide Faleke.",
};

const brandProjects = [
  {
    number: "01",
    title: "Adejoke Apparel",
    type: "Fashion brand identity",
    description: "A recognisable fashion identity combining an AA monogram with visual references to garment making and craftsmanship.",
    images: [
      { src: "/projects/brand-logo/adejoke-apparel.jpg", alt: "Adejoke Apparel fashion brand logo" },
    ],
  },
  {
    number: "02",
    title: "Lightup Solar",
    type: "Energy services logo",
    description: "A clear, approachable logo created for a solar and electrical services business, using green and solar yellow to signal energy and sustainability.",
    images: [
      { src: "/projects/brand-logo/lightup-solar.jpg", alt: "Lightup Solar and Electrical Services logo" },
    ],
  },
  {
    number: "03",
    title: "Opera Lens Photography",
    type: "Photography brand identity",
    description: "A direct, modern visual identity for a photography brand covering studio, outdoor and framing services.",
    images: [
      { src: "/projects/brand-logo/opera-lens-photography.jpg", alt: "Opera Lens Photography brand logo" },
    ],
  },
  {
    number: "04",
    title: "Omoluabi Wears",
    type: "Fashion & lifestyle identity",
    description: "A premium gold-and-charcoal identity supported by a customer appreciation badge for use across packaging and post-purchase communication.",
    images: [
      { src: "/projects/brand-logo/omoluabi-wears-logo.jpg", alt: "Omoluabi Wears and Luxuries Home logo" },
      { src: "/projects/brand-logo/omoluabi-support-badge.jpg", alt: "Omoluabi Wears customer support badge" },
    ],
  },
  {
    number: "05",
    title: "Grewn Education",
    type: "Education brand identity",
    description: "A colourful education identity built around forward-moving geometric forms, supported by a branded promotional visual for the organisation's no-service-charge message.",
    images: [
      { src: "/projects/brand-logo/grewn-education-logo.png", alt: "Grewn Education logo on blue background" },
      { src: "/projects/brand-logo/grewn-education-campaign.png", alt: "Grewn Education no service charge campaign design" },
    ],
  },
  {
    number: "06",
    title: "Grewn Travels",
    type: "Travel brand identity",
    description: "A gold-and-black travel identity combining a globe, aircraft silhouette and elegant wordmark to communicate premium international travel.",
    images: [
      { src: "/projects/brand-logo/grewn-travels-logo.png", alt: "Grewn Travels gold and black logo" },
    ],
  },
  {
    number: "07",
    title: "MT TEN",
    type: "Corporate logo design",
    description: "A bold red-and-charcoal corporate mark using circular motion and strong initials to create a compact, recognisable identity.",
    images: [
      { src: "/projects/brand-logo/mt-ten-logo.png", alt: "MT TEN red and charcoal logo" },
    ],
  },
];

export default function BrandLogoDesignPage() {
  return (
    <main className="project-page">
      <header className="project-page-nav">
        <a href="/" className="project-back"><span>←</span> Back to portfolio</a>
        <a href="/#contact">Start a project ↗</a>
      </header>

      <section className="project-hero">
        <div className="project-kicker">Selected work / 01</div>
        <h1>Brand &amp;<br /><em>Logo Design.</em></h1>
        <div className="project-hero-bottom">
          <p>Visual identities created to help businesses communicate clearly, feel distinctive and become easier to remember.</p>
          <div><strong>7</strong><span>Brand projects</span></div>
          <div><strong>9</strong><span>Visual pieces</span></div>
        </div>
      </section>

      <section className="project-gallery" aria-label="Brand and logo design projects">
        {brandProjects.map((project) => (
          <article className="project-case" key={project.title}>
            <div className="project-case-heading">
              <span>{project.number}</span>
              <div>
                <h2>{project.title}</h2>
                <small>{project.type}</small>
              </div>
              <p>{project.description}</p>
            </div>
            <div className={`project-case-images ${project.images.length > 1 ? "project-case-pair" : ""}`}>
              {project.images.map((image) => (
                <figure key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="project-next">
        <span>Have a brand in mind?</span>
        <h2>Let&apos;s create an identity people remember.</h2>
        <a href="mailto:Faleke24@gmail.com">Start a conversation ↗</a>
      </section>

      <footer className="project-footer">
        <span>© {new Date().getFullYear()} Olumide Faleke</span>
        <a href="/">Return home ↑</a>
      </footer>
    </main>
  );
}
