import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Target, Layers, Cpu, CheckCircle2, ExternalLink, Key } from "lucide-react";
import { GithubIcon } from "./icons";

export default function CaseStudyModal({ isOpen, onClose, project, triggerRef }) {
  const closeBtnRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock background scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Manage focus without scrolling: focus close button when opened, return to trigger button on close
  useEffect(() => {
    closeBtnRef.current?.focus({ preventScroll: true });
    const triggerEl = triggerRef?.current;
    return () => {
      triggerEl?.focus({ preventScroll: true });
    };
  }, [triggerRef]);

  if (!project) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`case-study-title-${project.id}`}
            className="modal-dialog"
            variants={dialogVariants}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="modal-header">
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingRight: 12 }}>
                <div>
                  <span className="project-badge">
                    {project.projectType || "Independent Project"}
                  </span>
                </div>
                <h2 id={`case-study-title-${project.id}`} className="modal-title">
                  {project.title}
                </h2>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="modal-close-btn"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="modal-body">
              {project.description && (
                <p className="case-study-intro">{project.description}</p>
              )}

              {project.purpose && (
                <div className="case-study-item">
                  <div className="case-study-label">
                    <Target size={15} />
                    <span>Purpose</span>
                  </div>
                  <p className="case-study-text">{project.purpose}</p>
                </div>
              )}

              {project.whatIBuilt && (
                <div className="case-study-item">
                  <div className="case-study-label">
                    <Layers size={15} />
                    <span>What I Built</span>
                  </div>
                  <p className="case-study-text">{project.whatIBuilt}</p>
                </div>
              )}

              {project.technicalChallenge && (
                <div className="case-study-item">
                  <div className="case-study-label">
                    <Cpu size={15} />
                    <span>Key Technical Challenge</span>
                  </div>
                  <p className="case-study-text">{project.technicalChallenge}</p>
                </div>
              )}

              {project.outcome && (
                <div className="case-study-item">
                  <div className="case-study-label">
                    <CheckCircle2 size={15} />
                    <span>Outcome</span>
                  </div>
                  <p className="case-study-text">{project.outcome}</p>
                </div>
              )}

              {project.credentials && (
                <div className="case-study-item">
                  <div className="case-study-label">
                    <Key size={15} />
                    <span>Demo Credentials</span>
                  </div>
                  <div className="case-study-text">{project.credentials}</div>
                </div>
              )}

              {/* Technologies Used */}
              {project.tags && project.tags.length > 0 && (
                <div className="case-study-item">
                  <div className="case-study-label">
                    <span>Technologies Used</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                <GithubIcon size={16} /> <span>Source Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn project-link-primary"
                >
                  <ExternalLink size={15} /> <span>Visit Site</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
