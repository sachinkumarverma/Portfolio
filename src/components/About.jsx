import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import { aboutData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const iconMap = { MapPin, Award };

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
            <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 48, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              {aboutData.heading}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {aboutData.highlights.map((h, i) => {
                const Icon = iconMap[h.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    className="card-highlight"
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                  >
                    <div className="icon-box icon-box-sm"><Icon size={20} /></div>
                    <span style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--text-light)" }}>{h.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            {aboutData.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--text-secondary)" }}
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
