"use client"
export default function Navbar() {
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "64px",
                background: "rgba(8,8,8,0.88)",
                backdropFilter: "blur(18px)",
                borderBottom: "1px solid rgba(255,215,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 2rem",
                zIndex: 50,
            }}
        >
            {/* LEFT: Logo + Wordmark + Desktop Nav Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <div
                        style={{
                            width: "34px",
                            height: "34px",
                            border: "1.5px solid rgba(255,215,0,0.45)",
                            borderRadius: "50%",
                            background: "rgba(255,215,0,0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{
                                fontSize: "0.95rem",
                                color: "var(--gold-bright)",
                                fontVariationSettings: "'FILL' 0,'wght' 200",
                            }}
                        >
                            blur_circular
                        </span>
                    </div>
                    <span
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#fff",
                            letterSpacing: "-0.01em",
                            whiteSpace: "nowrap",
                        }}
                    >
                        The Turing Circle
                    </span>
                </div>

                {/* Desktop nav links — hidden below md */}
                <nav className="desk-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <NavLink href="#" active>Library</NavLink>
                    <NavLink href="#">Archives</NavLink>
                    <NavLink href="#">Network</NavLink>
                </nav>
            </div>

            {/* RIGHT: Search + Write button */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <button className="icon-btn">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className="gold-btn" style={{ padding: "0.5rem 1.25rem", borderRadius: "4px" }}>
                    Write
                </button>
            </div>
        </header>
    );
}

// ── Internal helper ──────────────────────────────────────────────────────────
function NavLink({ href, children, active = false }) {
    return (
        <a
            href={href}
            style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: active ? "var(--gold-bright)" : "var(--text-muted)",
                borderBottom: active ? "1.5px solid var(--gold-bright)" : "none",
                paddingBottom: active ? "2px" : undefined,
                textDecoration: "none",
                transition: "color 0.2s",
            }}
            onMouseOver={(e) => { if (!active) e.target.style.color = "#fff"; }}
            onMouseOut={(e) => { if (!active) e.target.style.color = "var(--text-muted)"; }}
        >
            {children}
        </a>
    );
}