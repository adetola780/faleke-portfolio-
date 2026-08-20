"use client";

import { useEffect, useState } from "react";

const nameLetters = "OLUMIDE".split("");

const tools = [
  { name: "Canva", type: "Design", className: "tool-canva", icon: "/tool-logos/canva.svg" },
  { name: "CapCut", type: "Motion", className: "tool-capcut", icon: "/tool-logos/capcut.svg" },
  { name: "HeyGen", type: "AI video", className: "tool-heygen", icon: "/tool-logos/heygen.svg" },
  { name: "Claude", type: "AI creative", className: "tool-claude", icon: "/tool-logos/claude.svg" },
  { name: "Gemini", type: "AI creative", className: "tool-gemini", icon: "/tool-logos/gemini.svg" },
];

const workCategories = [
  { number: "03", title: "Social Media Analytics", description: "Performance insights, audience trends and reporting that guide better content decisions.", className: "work-package work-social-analytics-live", href: "/work/social-media-analytics", preview: "/projects/social-analytics/overview.png", mediaType: "image" },
  { number: "04", title: "Photography", description: "Portrait, event and visual storytelling through the lens.", className: "work-photo work-photography-live", href: "/work/photography", preview: "/projects/photography/portrait-denim.jpg", mediaType: "image" },
  { number: "05", title: "Motion Graphics", description: "Moving visuals that make messages more memorable.", className: "work-motion", href: "/work/motion-graphics", preview: "/projects/motion-graphics/per.mp4", mediaType: "video" },
];

export function Portfolio() {
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 3100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`intro ${introDone ? "intro-finished" : ""}`} aria-hidden="true">
        <div className="intro-track">
          <span />
        </div>
        <div className="intro-name" aria-label="Olumide">
          {nameLetters.map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ "--delay": `${0.55 + index * 0.12}s` } as React.CSSProperties}>
              {letter}
            </span>
          ))}
        </div>
        <p>Hello, welcome to my portfolio.</p>
      </div>

      <div className={`site-shell ${introDone ? "site-visible" : ""}`}>
        <header className="site-header">
          <a className="brand-mark" href="#top" aria-label="Olumide Faleke home">
            <span>OF</span>
            <strong>Olumide Faleke</strong>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>

          <nav id="site-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#tools" onClick={closeMenu}>Tools</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero section-pad" aria-labelledby="hero-heading">
            <div className="hero-intro-lockup">
              <h1 id="hero-heading" className="hero-name" aria-label="Olumide Faleke">
                {nameLetters.map((letter, index) => (
                  <span key={`${letter}-hero-${index}`}>{letter}</span>
                ))}
              </h1>
              <p>Hello, welcome to my portfolio</p>
            </div>

            <div className="scroll-cue" aria-hidden="true">
              <span>scroll</span>
              <i>↓</i>
            </div>

            <div className="hero-about-preview" id="about" data-reveal="up">
              <div className="hero-portrait">
                <img src="/profile/olumide-faleke.jpg" alt="Olumide Faleke" />
              </div>
              <div className="hero-profile-copy">
                <div className="hero-about-title">
                  <span className="person-symbol" aria-hidden="true"><i /><b /></span>
                  <h2>About</h2>
                </div>
                <h3>Graphic Designer &amp; Creative Professional</h3>
                <p>
                  Hi, I&apos;m Olumide—a Lagos-based creative professional using design, social media and photography to turn ideas into clear, engaging visual stories.
                </p>
                <p className="hero-email"><strong>Email:</strong> <a href="mailto:Faleke24@gmail.com">Faleke24@gmail.com</a></p>
                <div className="hero-profile-links">
                  <a href="https://wa.me/2349017593226" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href="https://www.linkedin.com/in/olumide-faleke-b8abb5143" target="_blank" rel="noreferrer">LinkedIn</a>
                  <span><i className="status-dot" /> Available for work</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about section-pad" id="story" aria-labelledby="about-heading" data-reveal="up">
            <div className="section-label">02 / My story</div>
            <div className="about-grid">
              <h2 id="about-heading">Design that connects people and purpose.</h2>
              <div className="about-copy">
                <p className="lead">
                  I&apos;m Olumide Faleke, a versatile communications and creative professional with a passion for storytelling, audience engagement and meaningful connections.
                </p>
                <p>
                  My experience spans graphic design, social media management, photography, customer relations, sales, administration and store operations. I combine creativity with strong organisational and interpersonal skills to support business objectives and create memorable experiences.
                </p>
                <p>
                  I believe good design is more than making things look beautiful. It is about communicating ideas clearly, understanding the audience and creating purposeful work that makes an impact.
                </p>
                <div className="about-meta">
                  <div><strong>3+ years</strong><span>Experience</span></div>
                  <div><strong>HND</strong><span>Public Administration</span></div>
                  <div><strong>EN / YO</strong><span>English & Yoruba</span></div>
                </div>
              </div>
            </div>
            <div className="strength-ticker" aria-label="Professional strengths">
              <span>Creative thinking</span><i>✦</i>
              <span>Strong communication</span><i>✦</i>
              <span>Customer focus</span><i>✦</i>
              <span>Visual storytelling</span><i>✦</i>
              <span>Administrative excellence</span>
            </div>
          </section>

          <section className="tool-stack section-pad" id="tools" aria-labelledby="tool-stack-heading">
            <div className="section-label">03 / Tools</div>
            <div className="tool-stack-heading" data-reveal="up">
              <span className="tool-stack-symbol" aria-hidden="true"><i>◆</i></span>
              <h2 id="tool-stack-heading">Creative <em>Toolkit</em></h2>
              <p>The design, motion and AI tools behind the creative process.</p>
            </div>
            <div className="tool-grid">
              {tools.map((tool, index) => (
                <div
                  className="tool-tile"
                  key={tool.name}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                >
                  <span className={`tool-logo ${tool.className}`}>
                    <img src={tool.icon} alt={`${tool.name} logo`} />
                  </span>
                  <strong>{tool.name}</strong>
                  <small>{tool.type}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="work section-pad" id="work" aria-labelledby="work-heading">
            <div className="section-label">04 / Selected work</div>
            <div className="work-intro">
              <h2 id="work-heading">A home for the work.</h2>
              <p>
                A growing collection of identity, campaign and visual communication work created for businesses across different industries.
              </p>
            </div>
            <div className="more-work-label">
              <span>Project categories</span>
              <p>Select a category to explore the complete project gallery.</p>
            </div>
            <div className="work-grid">
              <a
                className="work-card work-live"
                href="/work/brand-logo-design"
                data-reveal="project-left"
                style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
              >
                <div className="work-card-image">
                  <img src="/projects/brand-logo/adejoke-apparel.jpg" alt="Brand and logo design project preview" loading="lazy" />
                </div>
                <div className="work-card-copy">
                  <span>01</span>
                  <h3>Brand &amp; Logo Design</h3>
                  <p>Identity systems and visual marks created for fashion, energy and creative businesses.</p>
                  <small className="work-card-action">View project <b>↗</b></small>
                </div>
              </a>
              <a
                className="work-card work-live work-social-live"
                href="/work/social-media-posters-flyers"
                data-reveal="project-left"
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                <div className="work-card-image">
                  <img src="/projects/social-posters/manifest-social-media-marketing.jpg" alt="Social media, poster and flyer design project preview" loading="lazy" />
                </div>
                <div className="work-card-copy">
                  <span>02</span>
                  <h3>Social Media, Posters &amp; Flyers</h3>
                  <p>Campaign posts, event flyers and promotional graphics created for organisations and growing brands.</p>
                  <small className="work-card-action">View project <b>↗</b></small>
                </div>
              </a>
              {workCategories.map((item, index) => {
                const cardStyle = { "--reveal-delay": `${(index + 2) * 120}ms` } as React.CSSProperties;

                if (item.href && item.preview) {
                  return (
                    <a
                      className={`work-card work-live ${item.className}`}
                      href={item.href}
                      key={item.title}
                      data-reveal="project-left"
                      style={cardStyle}
                    >
                      <div className="work-card-image work-card-video-preview">
                        {item.mediaType === "video" ? (
                          <video autoPlay muted loop playsInline preload="metadata" aria-label="Motion graphics project preview">
                            <source src={item.preview} type="video/mp4" />
                          </video>
                        ) : (
                          <img src={item.preview} alt={`${item.title} project preview`} loading="lazy" />
                        )}
                      </div>
                      <div className="work-card-copy">
                        <span>{item.number}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <small className="work-card-action">View project <b>â†—</b></small>
                      </div>
                    </a>
                  );
                }

                return (
                  <article
                    className={`work-card ${item.className}`}
                    key={item.title}
                    data-reveal="project-left"
                    style={cardStyle}
                  >
                    <div className="work-art" aria-hidden="true"><span>{item.number}</span></div>
                    <div className="work-card-copy">
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <small>Projects coming next</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="experience section-pad" aria-labelledby="experience-heading" data-reveal="up">
            <div className="section-label">05 / Experience</div>
            <div className="experience-grid">
              <h2 id="experience-heading">Creative thinking with business understanding.</h2>
              <div>
                <p>
                  Experience across non-medical home care, digital marketing, study-abroad consulting, a medical NGO and business consulting.
                </p>
                <ul>
                  <li>Communications & social media</li>
                  <li>Creative media & photography</li>
                  <li>Customer relations & sales</li>
                  <li>Administration & operations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="contact section-pad" id="contact" aria-labelledby="contact-heading" data-reveal="up">
            <div className="section-label">06 / Contact</div>
            <p className="contact-eyebrow">Have a project, role or idea?</p>
            <h2 id="contact-heading">Let&apos;s make something <em>meaningful.</em></h2>
            <div className="contact-actions">
              <a href="mailto:Faleke24@gmail.com">Email me <span>↗</span></a>
              <a href="https://wa.me/2349017593226" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
              <a href="tel:+2349017593226">Call me <span>↗</span></a>
              <a href="https://www.linkedin.com/in/olumide-faleke-b8abb5143" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
            <div className="contact-details">
              <a href="mailto:Faleke24@gmail.com">Faleke24@gmail.com</a>
              <div>
                <a href="tel:+2349017593226">+234 901 759 3226</a>
                <a href="tel:+2349152249530">+234 915 224 9530</a>
              </div>
              <p>Available for freelance, contract and employment.</p>
            </div>
          </section>
        </main>

        <footer>
          <span>© {new Date().getFullYear()} Olumide Faleke</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
