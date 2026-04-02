"use client"
const NAV_ITEMS = [
    { icon: "auto_stories", label: "Library", href: "#", active: true },
    { icon: "edit_note", label: "Posts", href: "#", active: false },
    { icon: "account_circle", label: "Profile", href: "#", active: false },
];

export default function SideMenu() {
    return (
        <aside
            className="md-sidebar"
            style={{
                position: "fixed",
                left: 0,
                top: "64px",
                bottom: 0,
                width: "240px",
                background: "rgba(8,8,8,0.97)",
                borderRight: "1px solid rgba(255,215,0,0.08)",
                display: "flex",           // toggled to none on mobile via CSS class
                flexDirection: "column",
                padding: "2rem 0",
                zIndex: 40,
            }}
        >
            {/* Section label */}
            <div style={{ padding: "0 1.75rem", marginBottom: "1.75rem" }}>
                <span className="section-label">Intelligence Shell</span>
            </div>

            {/* Nav links */}
            <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {NAV_ITEMS.map((item) => (
                    <SideNavItem key={item.label} {...item} />
                ))}
            </nav>
        </aside>
    );
}

// ── Internal helper ──────────────────────────────────────────────────────────
function SideNavItem({ icon, label, href, active }) {
    const baseStyle = {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.9rem 1.75rem",
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.68rem",
        fontWeight: active ? 700 : 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "color 0.2s, background 0.2s",
    };

    const activeStyle = {
        color: "var(--gold-bright)",
        borderRight: "2px solid var(--gold-bright)",
        background: "rgba(255,215,0,0.04)",
    };

    const inactiveStyle = {
        color: "var(--text-muted)",
    };

    return (
        <a
            href={href}
            style={{ ...baseStyle, ...(active ? activeStyle : inactiveStyle) }}
            onMouseOver={(e) => {
                if (!active) {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "var(--bg-hover)";
                }
            }}
            onMouseOut={(e) => {
                if (!active) {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.background = "transparent";
                }
            }}
        >
            <span
                className="material-symbols-outlined"
                style={{ fontSize: "1.1rem" }}
            >
                {icon}
            </span>
            {label}
        </a>
    );
}