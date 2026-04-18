import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Eye } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, index }) {
  const hasPreviews = project.previews && project.previews.length > 0;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    if (!hasPreviews) return;
    setCurrent((c) => (c + 1) % project.previews.length);
  }, [hasPreviews, project.previews?.length]);

  // Auto-advance every 3.5s
  useEffect(() => {
    if (!hasPreviews || project.previews.length <= 1 || isPaused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [hasPreviews, project.previews?.length, isPaused, next]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -8 }}
      className="card"
      style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel / Preview area */}
      <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden", flexShrink: 0 }}>
        {hasPreviews ? (
          <>
            {/* Blurred background layer */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: "absolute",
                  inset: -20,
                  backgroundImage: `url(${project.previews[current]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(20px) brightness(0.4)",
                  transform: "scale(1.15)",
                }}
              />
            </AnimatePresence>

            {/* Foreground preview image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${current}`}
                src={project.previews[current]}
                alt={`${project.title} preview ${current + 1}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </AnimatePresence>

            {/* Gradient overlay at bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              background: "linear-gradient(transparent, var(--bg-card))",
              pointerEvents: "none",
            }} />

            {/* Carousel dots */}
            {project.previews.length > 1 && (
              <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 5 }}>
                {project.previews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? 20 : 8,
                      height: 8,
                      borderRadius: 4,
                      border: "none",
                      background: i === current ? "var(--accent)" : "rgba(255,255,255,0.4)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Live preview overlay button */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 10,
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  zIndex: 5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(6,182,212,0.7)";
                  e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.6)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <Eye size={14} /> Live Preview
              </a>
            )}
          </>
        ) : (
          /* Fallback - icon pattern for projects without previews */
          <div style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, var(--bg-icon), var(--bg-card))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Code2 size={48} style={{ color: "var(--accent)", opacity: 0.25 }} />
          </div>
        )}
      </div>

      {/* Card content */}
      <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 20, flex: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Action links */}
        <div style={{ display: "flex", gap: 10, borderTop: "1px solid var(--border-card)", paddingTop: 16 }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 10,
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              background: "var(--bg-skill)",
              border: "1px solid var(--bg-skill-border)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              flex: 1,
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--border-card-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--bg-skill-border)";
            }}
          >
            <GithubIcon size={16} /> Source Code
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 10,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                flex: 1,
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <ExternalLink size={14} /> Visit Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
