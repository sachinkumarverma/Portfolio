import { motion } from "framer-motion";
import {
  MapPin,
  Award,
  Briefcase,
  Code2,
  CheckCircle2,
  Cpu,
  Building2,
  Activity,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { aboutData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const iconMap = {
  MapPin,
  Award,
  Briefcase,
  Code2,
  CheckCircle2,
  Cpu,
  Building2,
  Activity,
  GraduationCap,
  Sparkles,
};

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-main">
        <SectionHeader number="01" label="ABOUT ME" />

        <div className="grid-about">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: 36,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {aboutData.heading}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {aboutData.highlights.map((h, i) => {
                const Icon = iconMap[h.icon] || Briefcase;
                const content = (
                  <>
                    <div className="icon-box icon-box-sm">
                      <Icon size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text-light)" }}>
                      {h.text}
                    </span>
                  </>
                );

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    {h.link ? (
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-highlight"
                        style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        className="card-highlight"
                        style={{ display: "flex", alignItems: "center", gap: 16 }}
                      >
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Education Card */}
              {aboutData.education && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="card-highlight education-card"
                  style={{ marginTop: 8 }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div className="icon-box icon-box-sm" style={{ flexShrink: 0 }}>
                      <GraduationCap size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {aboutData.education.degree}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            padding: "3px 10px",
                            borderRadius: 999,
                            background: "var(--bg-tag)",
                            color: "var(--accent)",
                            border: "1px solid var(--border-icon)",
                          }}
                        >
                          Grade: {aboutData.education.grade}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: 4 }}>
                        {aboutData.education.institution}
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        {aboutData.education.period} • {aboutData.education.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 22 }}
          >
            {aboutData.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "var(--text-secondary)" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
