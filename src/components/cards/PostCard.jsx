"use client"
// ─── Data ────────────────────────────────────────────────────────────────────
const POSTS = [
    {
        id: 1,
        variant: "hero",
        author: {
            name: "Dr. Julian Vance",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB-8EvHJJgXSlfPIArPwO4mSctJPDYWDUy8leRJilUFwBXcFb19kkDGjKVuPGniSNV2hMFq4o4agLtGuNfUvkcRDbNIxSVH1fCPvyKvbqCNx7d7HaFxOzx5R2h3_4EwDonuvkhXTGdWK3sKaerAWEUp2P4be8E-no4v5DRN50MiTaIA27ojx0qIx1HIkZXK77Bj-OUhqFbXKFK8k5YL7r_sQ6U7GokeiQMM5688DJEP_p-xI99o5JePPhcqnHfVhk01qp9S4EA4k2wn",
            meta: "Theoretical Physics · 4h ago",
        },
        title: ["The Geometric Architecture of ", "Prime Singularities"],
        titleHighlight: true,
        excerpt:
            "We've long suspected that the distribution of primes follows a hidden manifold structure. Recent calculations on the Turing-7 Cluster suggest a 5th-dimensional curvature previously unmodeled...",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAV7WfYd4FV6UATQVMpBTqS94qI4fynwiVwftfMYlSbJE8t0ZEEo_9AWENb8BIZlFm-3Ab2W5f2odgJmzeTSdc95v3jxfsmP9iQpjdPKNoCD-eZRiL0nhXqeKDFwXd2-1dwkL9Ru9aFBIj3vW3WBNEBJMD2b0sZTkXMZ_wOfWBvjcvFwaO0rHJ5AUPyC4S1YymQQ4fsL0Zyaa7xwZWtZNF7XSht5Z48Dlwxh_yyyaIqcOoODamYPEMMP5CgRQdl9HNpv3xqBxSrziIn",
        stats: { views: "1.2k", comments: 84 },
        tags: [
            { label: "Structure", style: "gold" },
            { label: "Quant", style: "muted" },
        ],
    },
    {
        id: 2,
        variant: "blueprint",
        author: {
            initials: "A",
            name: "Archt. Elena Rossi",
            meta: "Structural Voids · 12h ago",
        },
        title: "Parametric Minimalism: Why Bricks are Obsolete",
        excerpt:
            "The shift from additive construction to topological optimization isn't just a trend; it's a mathematical necessity for the post-scarcity era.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdajnKlRV1tvt7o4QqM929KhjZeXLBdNjovhKeIm4Kt-F6OBta7ssDZ75knng0VTdAXdMZp3nv_pSmPtKTdsID3A_xLokvLx8-hHQNzB7DQl4tul0QuInB2O6WUw4XyoioRmgSO4a-mskzFT1rJhtGxtZNbeF07AVGQbd0aH_5ItNPSJPVWJKwLLbV84kvAiLi_q6KvsSTq1BEh3Htr4vYh94UZVSA8ZBLkQhCAc9MkaEFImFpIHhlS-2UzkvW7QzqX93FC0t4zFny",
    },
    {
        id: 3,
        variant: "minimal",
        author: {
            name: "Sarah Chen",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_tS_17IqSPLtLSop53r5DVd9xzoM87hygLfoXiKLtWWTTaJhPHU0f5cxLbvkmhfsDhQ6wQN8J9nmDy0utIDjgoMdtKHH8twy2r_n65JGybcizN6PzA-UVy03xHc5ynvH17CD1r-M53jx_L76Xvo4Ku21DcVD6x-r85rSBdsDIxGR-QVZ2gMCAfvNgZUxo3aZ7o8cflvxoVpy8L43GXBI6fHI0-_m41Frw362K1z0TyTHvkRMO2YYyVSV9ieKEC7jcdOFNfJ7pEIM",
            meta: "AI Ethics · 1d ago",
        },
        title: "The Ghost in the Algorithm",
        excerpt:
            "We discuss alignment, but we rarely discuss the aesthetic impact of model collapse. What happens when the world's artistic output is a feedback loop of its own average?",
    },
];

// ─── Main export ─────────────────────────────────────────────────────────────
export default function Posts() {
    return (
        <section style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {POSTS.map((post) => {
                if (post.variant === "hero") return <HeroCard key={post.id} post={post} />;
                if (post.variant === "blueprint") return <BlueprintCard key={post.id} post={post} />;
                if (post.variant === "minimal") return <MinimalCard key={post.id} post={post} />;
                return null;
            })}
        </section>
    );
}

// ─── Card variants ────────────────────────────────────────────────────────────

/** Featured hero article with full-bleed image */
function HeroCard({ post }) {
    return (
        <article
            style={{
                position: "relative",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "2.5rem",
                overflow: "hidden",
                transition: "border-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--border-bright)")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
            {/* Dot grid overlay */}
            <div
                className="dot-grid"
                style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}
            />
            {/* Gold glow */}
            <div
                style={{
                    position: "absolute",
                    top: "-80px",
                    right: "-80px",
                    width: "250px",
                    height: "250px",
                    background: "radial-gradient(circle,rgba(255,215,0,0.07) 0%,transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            filter: "grayscale(60%) brightness(1.2)",
                            border: "1.5px solid var(--border-bright)",
                        }}
                    />
                    <div>
                        <div style={styles.authorName}>{post.author.name}</div>
                        <div style={styles.authorMeta}>{post.author.meta}</div>
                    </div>
                </div>

                {/* Title */}
                <h2
                    className="art-h"
                    style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", marginBottom: "1rem" }}
                >
                    {post.title[0]}
                    <span className="gold-text">{post.title[1]}</span>
                </h2>

                {/* Excerpt */}
                <p style={{ ...styles.excerpt, maxWidth: "640px", marginBottom: "2rem" }}>
                    {post.excerpt}
                </p>

                {/* Hero image */}
                <div
                    style={{
                        borderRadius: "6px",
                        overflow: "hidden",
                        marginBottom: "2rem",
                        aspectRatio: "16/7",
                        position: "relative",
                    }}
                >
                    <img
                        src={post.image}
                        alt="Post visual"
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 1s" }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.04)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "40%",
                            background: "linear-gradient(to top,var(--bg-card),transparent)",
                            pointerEvents: "none",
                        }}
                    />
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <button className="icon-btn">
                            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>stat_3</span>
                            {post.stats.views}
                        </button>
                        <button
                            className="icon-btn"
                            onMouseOver={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                            onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>forum</span>
                            {post.stats.comments}
                        </button>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {post.tags.map((tag) => (
                            <span
                                key={tag.label}
                                className="tag"
                                style={
                                    tag.style === "muted"
                                        ? { color: "var(--text-secondary)", borderColor: "var(--border)", background: "var(--bg-elevated)" }
                                        : undefined
                                }
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

/** Blueprint card — left gold border + side image */
function BlueprintCard({ post }) {
    return (
        <article
            style={{
                position: "relative",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--gold-bright)",
                borderRadius: "6px",
                padding: "2rem",
                transition: "border-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--border-bright)")}
            onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.borderLeftColor = "var(--gold-bright)";
            }}
        >
            <div
                className="art2-inner"
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
            >
                {/* Text side */}
                <div>
                    {/* Author — initials avatar */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                background: "var(--gold-grad)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 900,
                                fontSize: "0.75rem",
                                color: "#0a0a0a",
                                flexShrink: 0,
                            }}
                        >
                            {post.author.initials}
                        </div>
                        <div>
                            <div style={styles.authorName}>{post.author.name}</div>
                            <div style={styles.authorMeta}>{post.author.meta}</div>
                        </div>
                    </div>

                    <h2
                        className="art-h"
                        style={{ fontSize: "clamp(1.2rem,3vw,1.65rem)", marginBottom: "0.75rem" }}
                    >
                        {post.title}
                    </h2>
                    <p
                        style={{
                            ...styles.excerpt,
                            marginBottom: "1.25rem",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {post.excerpt}
                    </p>

                    <div style={{ display: "flex", gap: "1rem" }}>
                        <button className="icon-btn">
                            <span className="material-symbols-outlined">bookmark</span>
                        </button>
                        <button className="icon-btn">
                            <span className="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>

                {/* Image side */}
                <div
                    style={{
                        borderRadius: "6px",
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                        background: "var(--bg-card)",
                    }}
                >
                    <img
                        src={post.image}
                        alt="Post visual"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "grayscale(50%) brightness(0.9)",
                            transition: "filter 0.4s, opacity 0.4s",
                            opacity: 0.8,
                        }}
                        onMouseOver={(e) => {
                            e.target.style.filter = "grayscale(0%) brightness(1)";
                            e.target.style.opacity = "1";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.filter = "grayscale(50%) brightness(0.9)";
                            e.target.style.opacity = "0.8";
                        }}
                    />
                </div>
            </div>
        </article>
    );
}

/** Minimal text-only card */
function MinimalCard({ post }) {
    return (
        <article
            style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "2rem",
                transition: "border-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--border-bright)")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        filter: "grayscale(40%) brightness(1.1)",
                        border: "1.5px solid var(--border)",
                    }}
                />
                <div>
                    <div style={styles.authorName}>{post.author.name}</div>
                    <div style={styles.authorMeta}>{post.author.meta}</div>
                </div>
            </div>

            {/* Title */}
            <h2
                className="art-h"
                style={{ fontSize: "clamp(1.35rem,3.5vw,2rem)", marginBottom: "0.75rem" }}
            >
                {post.title.split("Algorithm")[0]}
                <em>Algorithm</em>
            </h2>

            {/* Excerpt */}
            <p style={{ ...styles.excerpt, marginBottom: "1.5rem" }}>{post.excerpt}</p>

            {/* Gold accent rule */}
            <div
                style={{
                    width: "4rem",
                    height: "2px",
                    background: "var(--gold-grad)",
                    borderRadius: "1px",
                }}
            />
        </article>
    );
}

// ─── Shared inline styles ────────────────────────────────────────────────────
const styles = {
    authorName: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
    },
    authorMeta: {
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.58rem",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginTop: "1px",
    },
    excerpt: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.75,
        color: "var(--text-secondary)",
    },
};