"use client";

import Navbar from "@/components/layout/Navbar";
import SideMenu from "@/components/layout/SideMenu";
import Posts from "@/components/cards/PostCard";

// ─── Sidebar widget data ──────────────────────────────────────────────────────
const STAFF_PICKS = [
  {
    category: "Calculus of Form",
    title: "The Fibonacci sequence in urban planning.",
    author: "Marcus Thorne",
  },
  {
    category: "Neuro-Aesthetics",
    title: "Why our brains crave brutalist symmetry.",
    author: "Dr. Li Na",
  },
  {
    category: "Cryptography",
    title: "The unhackable beauty of prime meshes.",
    author: "Anon-404",
  },
];

const TRENDING_TAGS = [
  "#Quantum_Leap",
  "#Topology",
  "#Brutalism",
  "#AI_Safety",
  "#Zero_Knowledge",
];

const FEED_TABS = ["For you", "Featured", "Latest"];

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Homepage() {
  return (
    <>
      {/* Global CSS (inject once here if not in index.css / App.css) */}
      <style>{globalStyles}</style>

      <div className="tc-grid" style={{ background: "var(--bg-true)", minHeight: "100dvh" }}>
        <Navbar />
        <SideMenu />

        {/* ── Main content area ── */}
        <main className="main-content" style={{ paddingTop: "64px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem" }}>

            {/* Feed header + tab bar */}
            <FeedHeader />

            {/* Two-column grid: primary feed + sidebar */}
            <div
              className="feed-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}
            >
              {/* Primary feed */}
              <Posts />

              {/* Right sidebar */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <StaffPicks picks={STAFF_PICKS} />
                <TrendingClusters tags={TRENDING_TAGS} />
              </aside>
            </div>
          </div>
        </main>

        {/* Mobile bottom nav */}
        <MobileBottomNav />

        {/* Floating action button */}
        <FAB />
      </div>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeedHeader() {
  return (
    <header style={{ marginBottom: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {FEED_TABS.map((tab, i) => (
            <button
              key={tab}
              className={`tab-btn${i === 0 ? " active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="filter-label" style={{ paddingBottom: "1rem", display: "none" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            FILTER: QUANT_RES_V2
          </span>
        </div>
      </div>
    </header>
  );
}

function StaffPicks({ picks }) {
  return (
    <section>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "2rem",
        }}
      >
        <span style={{ width: "1.5rem", height: "1px", background: "rgba(255,215,0,0.3)" }} />
        <span
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-bright)",
          }}
        >
          Staff Picks
        </span>
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {picks.map((pick) => (
          <PickItem key={pick.title} pick={pick} />
        ))}
      </div>

      <button
        style={{
          marginTop: "1.75rem",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          background: "none",
          border: "none",
          color: "var(--gold-bright)",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        View Full Archive →
      </button>
    </section>
  );
}

function PickItem({ pick }) {
  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseOver={(e) => e.currentTarget.querySelector(".pick-title").style.color = "var(--gold-bright)"}
      onMouseOut={(e) => e.currentTarget.querySelector(".pick-title").style.color = "#fff"}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.6rem",
          color: "var(--gold-bright)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {pick.category}
      </span>
      <h4
        className="pick-title"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: "0.9rem",
          color: "#fff",
          lineHeight: 1.3,
          margin: "0.3rem 0",
          transition: "color 0.2s",
        }}
      >
        {pick.title}
      </h4>
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        By {pick.author}
      </span>
    </div>
  );
}

function TrendingClusters({ tags }) {
  return (
    <section
      style={{
        padding: "1.5rem",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: "1.25rem",
        }}
      >
        Trending Clusters
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
    </section>
  );
}

function MobileBottomNav() {
  const icons = ["auto_stories", "explore", "notifications", "account_circle"];
  return (
    <nav
      className="mob-nav"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        background: "rgba(8,8,8,0.95)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 1.5rem",
        zIndex: 50,
      }}
    >
      {icons.map((icon, i) => (
        <button
          key={icon}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: i === 0 ? "var(--gold-bright)" : "var(--text-secondary)",
          }}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </button>
      ))}
    </nav>
  );
}

function FAB() {
  return (
    <button
      className="gold-btn mob-fab"
      style={{
        position: "fixed",
        bottom: "80px",
        right: "2rem",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 28px rgba(255,215,0,0.25)",
        zIndex: 50,
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(255,215,0,0.4)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,215,0,0.25)";
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: "1.4rem" }}>add</span>
    </button>
  );
}

// ─── Global CSS (mirrors the original <style> block) ─────────────────────────
// Tip: move this to index.css or a globals.css file and remove it from here.
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; }

  :root {
    --gold-bright:   #FFD700;
    --gold-mid:      #E9A800;
    --gold-deep:     #B8731A;
    --gold-grad:     linear-gradient(135deg, #FFD700 0%, #E9A800 55%, #B8731A 100%);
    --cyan:          #00dbe8;
    --bg-true:       #080808;
    --bg-card:       #0f0f0f;
    --bg-elevated:   #161616;
    --bg-hover:      #1e1e1e;
    --border:        rgba(255,215,0,0.08);
    --border-bright: rgba(255,215,0,0.22);
    --text-primary:  #FFFFFF;
    --text-secondary:#A8A8A8;
    --text-muted:    #555555;
  }

  body {
    background: var(--bg-true);
    color: var(--text-primary);
    font-family: 'Outfit', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  }

  .tc-grid {
    background-image:
      linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .dot-grid {
    background-image: radial-gradient(circle, rgba(255,215,0,0.12) 1px, transparent 1px);
    background-size: 22px 22px;
  }

  .gold-text {
    background: var(--gold-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gold-btn {
    background: var(--gold-grad);
    color: #0a0a0a;
    font-weight: 700;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.65rem;
    border: none;
    cursor: pointer;
    transition: filter 0.2s, transform 0.1s;
  }
  .gold-btn:hover  { filter: brightness(1.1); }
  .gold-btn:active { transform: scale(0.97); }

  .icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-secondary);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Outfit', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.06em;
  }
  .icon-btn:hover { color: var(--gold-bright); }

  .tab-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    padding-bottom: 1rem;
    transition: color 0.2s;
  }
  .tab-btn.active {
    color: var(--gold-bright);
    border-bottom: 2px solid var(--gold-bright);
  }
  .tab-btn:not(.active) { color: var(--text-muted); }
  .tab-btn:not(.active):hover { color: var(--text-primary); }

  .art-h {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.15;
    color: #fff;
    transition: color 0.2s;
    cursor: pointer;
  }
  .art-h:hover { color: var(--gold-bright); }

  .tag {
    font-family: 'Outfit', sans-serif;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    border: 1px solid rgba(255,215,0,0.18);
    background: rgba(255,215,0,0.06);
    color: var(--gold-mid);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }
  .tag:hover { background: var(--gold-grad); color: #0a0a0a; border-color: transparent; }

  .tag-pill {
    font-family: 'Outfit', sans-serif;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-elevated);
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .tag-pill:hover { background: var(--gold-grad); color: #0a0a0a; border-color: transparent; }

  .section-label {
    font-family: 'Outfit', sans-serif;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* Responsive layout helpers */
  @media(min-width:768px)  { .desk-nav  { display: flex !important; } }
  @media(min-width:768px)  { .md-sidebar{ display: flex !important; } }
  @media(min-width:768px)  { .main-content { padding-left: 240px; } }
  @media(min-width:768px)  { .mob-nav   { display: none !important; } }
  @media(min-width:768px)  { .mob-fab   { bottom: 2rem !important; } }
  @media(min-width:640px)  { .art2-inner{ grid-template-columns: 1fr 180px !important; } }
  @media(min-width:1024px) { .feed-grid { grid-template-columns: 1fr 300px !important; } }
  @media(min-width:1024px) { .filter-label { display: block !important; } }

  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
`;