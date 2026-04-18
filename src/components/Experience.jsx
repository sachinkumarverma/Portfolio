import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { experienceData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-main">
        <SectionHeader number="02" label="EXPERIENCE" title="Professional Journey" />

        <div className="timeline">
          <div className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {experienceData.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                className="timeline-item"
                style={{ position: "relative" }}
              >
                <div className="timeline-date">
                  <div style={{
                    display: "inline-block", padding: "8px 16px", borderRadius: 12,
                    fontSize: "0.875rem", fontWeight: 700,
                    color: exp.type === "current" ? "var(--accent)" : "var(--text-secondary)",
                    background: exp.type === "current" ? "var(--bg-tag)" : "var(--bg-skill)",
                    border: `1px solid ${exp.type === "current" ? "var(--border-icon)" : "var(--bg-skill-border)"}`,
                  }}>
                    {exp.period}
                  </div>
                  <p style={{ fontSize: "0.875rem", marginTop: 8, color: "var(--text-muted)" }}>{exp.location}</p>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring" }}
                  className={`timeline-dot ${exp.type === "current" ? "timeline-dot-active" : "timeline-dot-inactive"}`}
                  style={{ top: 8 }}
                />

                <div className="timeline-card">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="card">
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, gap: 16 }}>
                      <div>
                        <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{exp.role}</h3>
                        <a href={exp.companyUrl} style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1.05rem", textDecoration: "none" }}>{exp.company}</a>
                      </div>
                      {exp.badge && (
                        <span style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 999, fontSize: "0.75rem", fontWeight: 700, whiteSpace: "nowrap" }}>
                          <Sparkles size={13} /> {exp.badge}
                        </span>
                      )}
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                      {exp.responsibilities.map((item, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + j * 0.1 }}
                          style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
                        >
                          <ChevronRight size={16} style={{ color: "var(--accent)", opacity: 0.5, marginTop: 5, flexShrink: 0 }} />
                          <span style={{ lineHeight: 1.7, color: "var(--text-secondary)" }}>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
