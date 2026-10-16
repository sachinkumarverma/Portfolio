import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink, Eye, BookOpen } from "lucide-react";
import { GithubIcon } from "./icons";
import CaseStudyModal from "./CaseStudyModal";

export default function ProjectCard({ project, index }) {
  const hasPreviews = project.previews && project.previews.length > 0;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!hasPreviews || project.previews.length <= 1 || isPaused || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.previews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [hasPreviews, project.previews?.length, isPaused, shouldReduceMotion]);

  const altText = project.title.toLowerCase().includes("aradhna marg")
    ? "Aradhna Marg devotional website preview"
    : `${project.title} preview ${current + 1}`;

  return (
    <>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        whileHover={shouldReduceMotion ? undefined : { y: -8 }}
        className="card"
        style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >
        {/* 1. Project preview image / Carousel */}
        <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden", flexShrink: 0 }}>
          {hasPreviews ? (
            <>
              {/* Seamless Right-to-Left unidirectional slide */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={current}
                  initial={shouldReduceMotion ? false : { x: "100%" }}
                  animate={{ x: "0%" }}
                  exit={shouldReduceMotion ? undefined : { x: "-100%" }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.25, 1, 0.5, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/* Blurred background layer */}
                  <div
                    style={{
                      position: "absolute",
                      inset: -20,
                      backgroundImage: `url(${project.previews[current]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(20px) brightness(0.4)",
                      transform: "scale(1.15)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Foreground preview image with lazy loading and async decoding */}
                  <img
                    src={project.previews[current]}
                    alt={altText}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
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

              {/* Carousel dots - manual preview switching with aria-current */}
              {project.previews.length > 1 && (
                <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 5 }}>
                  {project.previews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrent(i);
                      }}
                      aria-label={`View preview ${i + 1} of ${project.previews.length}`}
                      aria-current={i === current ? "true" : undefined}
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
                  aria-label={`Open live site for ${project.title}`}
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
                    WebkitBackdropFilter: "blur(8px)",
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

        {/* Card content hierarchy */}
        <div style={{ padding: "24px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* 2. Small badge: Independent Project */}
          <div style={{ marginBottom: 12 }}>
            <span className="project-badge">
              {project.projectType || "Independent Project"}
            </span>
          </div>

          {/* 3. Project name */}
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, lineHeight: 1.35 }}>
            {project.title}
          </h3>

          {/* 4. Short one- or two-sentence description */}
          <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--text-secondary)", marginBottom: 16 }}>
            {project.description}
          </p>

          {/* 5. Technology tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* 6, 7, 8. Action buttons row */}
          <div className="project-actions">
            {/* 6. Details button */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="project-link-btn btn-case-study"
              aria-haspopup="dialog"
              aria-label={`View case study details for ${project.title}`}
            >
              <BookOpen size={14} /> <span>Details</span>
            </button>

            {/* 7. Code button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
              aria-label={`Open source code for ${project.title}`}
            >
              <GithubIcon size={14} /> <span>Code</span>
            </a>

            {/* 8. Live button, only when a live URL exists */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn project-link-primary"
                aria-label={`Open live site for ${project.title}`}
              >
                <ExternalLink size={14} /> <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      {isModalOpen && (
        <CaseStudyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={project}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
}
