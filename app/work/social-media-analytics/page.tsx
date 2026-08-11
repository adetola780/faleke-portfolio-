import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Analytics",
  description: "Social media performance and audience analytics work by Olumide Faleke.",
};

const analyticsViews = [
  {
    number: "01",
    title: "Performance Overview",
    description: "A seven-day view of post views, profile activity, likes, comments and shares.",
    src: "/projects/social-analytics/overview.png",
    alt: "TikTok analytics overview showing key performance metrics",
  },
  {
    number: "02",
    title: "Viewer Insights",
    description: "Audience reach, new viewers and demographic insight for content planning.",
    src: "/projects/social-analytics/viewers.png",
    alt: "TikTok viewer analytics showing total viewers and viewer insights",
  },
  {
    number: "03",
    title: "Top Content",
    description: "A ranked view of the posts attracting the strongest audience response.",
    src: "/projects/social-analytics/top-posts.png",
    alt: "TikTok analytics showing the account's top performing posts",
  },
  {
    number: "04",
    title: "Studio Summary",
    description: "A concise reporting snapshot covering views, followers and likes.",
    src: "/projects/social-analytics/studio-summary.png",
    alt: "TikTok Studio summary showing post views, followers and likes",
  },
  {
    number: "05",
    title: "Account Growth",
    description: "The wider account picture, including community size, engagement and published content.",
    src: "/projects/social-analytics/profile.png",
    alt: "GrewnAgency TikTok profile showing followers, likes and content grid",
  },
];

export default function SocialMediaAnalyticsPage() {
  return (
    <main className="project-page analytics-project-page">
      <header className="project-page-nav">
        <a href="/" className="project-back"><span>â†</span> Back to portfolio</a>
        <a href="/#contact">Start a project â†—</a>
      </header>

      <section className="project-hero analytics-project-hero">
        <div className="project-kicker">Selected work / 03</div>
        <h1>Social Media<br /><em>Analytics.</em></h1>
        <div className="project-hero-bottom">
          <p>Turning platform performance, audience behaviour and top-content data into clearer social media decisions.</p>
          <div><strong>5</strong><span>Analytics views</span></div>
          <div><strong>7D</strong><span>Reporting window</span></div>
        </div>
      </section>

      <section className="analytics-gallery" aria-label="Social media analytics project">
        {analyticsViews.map((view) => (
          <article className="analytics-view" key={view.src}>
            <div className="analytics-view-copy">
              <span>{view.number}</span>
              <h2>{view.title}</h2>
              <p>{view.description}</p>
            </div>
            <figure>
              <img src={view.src} alt={view.alt} />
            </figure>
          </article>
        ))}
      </section>

      <section className="project-next analytics-project-next">
        <span>Need clearer social performance?</span>
        <h2>Let&apos;s turn the numbers into better content.</h2>
        <a href="mailto:Faleke24@gmail.com">Start a conversation â†—</a>
      </section>

      <footer className="project-footer">
        <span>Â© {new Date().getFullYear()} Olumide Faleke</span>
        <a href="/">Return home â†‘</a>
      </footer>
    </main>
  );
}
