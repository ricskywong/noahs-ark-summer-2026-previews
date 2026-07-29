import type { CSSProperties } from "react";

type Ad = {
  version: "A" | "B";
  width: number;
  height: number;
  scale: number;
};

const ads: Ad[] = [
  { version: "A", width: 250, height: 250, scale: 1 },
  { version: "A", width: 300, height: 250, scale: 0.9 },
  { version: "A", width: 300, height: 600, scale: 0.58 },
  { version: "A", width: 320, height: 100, scale: 0.9 },
  { version: "A", width: 320, height: 480, scale: 0.72 },
  { version: "A", width: 728, height: 90, scale: 0.44 },
  { version: "B", width: 250, height: 250, scale: 1 },
  { version: "B", width: 300, height: 250, scale: 0.9 },
  { version: "B", width: 300, height: 600, scale: 0.58 },
  { version: "B", width: 320, height: 100, scale: 0.9 },
  { version: "B", width: 320, height: 480, scale: 0.72 },
  { version: "B", width: 728, height: 90, scale: 0.44 },
];

function AdCard({ ad }: { ad: Ad }) {
  const slug = `${ad.width}x${ad.height}`;
  const href = `/ads/${ad.version.toLowerCase()}/${slug}/index.html`;
  const scaledWidth = Math.round(ad.width * ad.scale);
  const scaledHeight = Math.round(ad.height * ad.scale);
  const frameStyle = {
    width: ad.width,
    height: ad.height,
    transform: `scale(${ad.scale})`,
  } satisfies CSSProperties;
  const viewportStyle = {
    width: scaledWidth,
    height: scaledHeight,
  } satisfies CSSProperties;

  return (
    <article className="ad-card">
      <div className="card-heading">
        <div>
          <span className={`version-badge version-${ad.version.toLowerCase()}`}>
            Version {ad.version}
          </span>
          <h3>{slug}</h3>
        </div>
        <span className="status">Latest</span>
      </div>

      <div className="preview-stage">
        <div className="preview-viewport" style={viewportStyle}>
          <iframe
            className="ad-frame"
            style={frameStyle}
            src={href}
            title={`Version ${ad.version} ${slug} AMPHTML ad preview`}
            scrolling="no"
          />
        </div>
      </div>

      <a className="open-link" href={href} target="_blank" rel="noreferrer">
        Open full-size preview
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="eyebrow">Client preview gallery</div>
        <h1>Noah’s Ark Summer 2026</h1>
        <p>
          Latest AMPHTML display ads for Version A and Version B. Open any
          preview in a separate browser tab to view it at its exact ad size.
        </p>
        <div className="hero-meta">
          <span>12 ad sizes</span>
          <span>2 animation loops</span>
          <span>30 seconds total</span>
        </div>
      </header>

      {(["A", "B"] as const).map((version) => (
        <section className="version-section" key={version}>
          <div className="section-heading">
            <div>
              <span className="section-kicker">Creative set</span>
              <h2>Version {version}</h2>
            </div>
            <span className="section-count">6 sizes</span>
          </div>
          <div className="ad-grid">
            {ads
              .filter((ad) => ad.version === version)
              .map((ad) => (
                <AdCard
                  key={`${ad.version}-${ad.width}x${ad.height}`}
                  ad={ad}
                />
              ))}
          </div>
        </section>
      ))}

      <footer>
        <span>Noah’s Ark Summer 2026 GDN Campaign</span>
        <span>Latest delivery preview · 29 July 2026</span>
      </footer>
    </main>
  );
}
