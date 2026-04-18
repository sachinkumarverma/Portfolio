import { motion } from "framer-motion";
import { Monitor, Code2, Database, Smartphone, FlaskConical, Wrench } from "lucide-react";
import { skillsData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const iconMap = { Monitor, Code2, Database, Smartphone, FlaskConical, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-wide">
        <SectionHeader number="04" label="TECHNICAL CAPABILITIES" title="Core Architecture Stack" />

        <div className="grid-skills">
          {skillsData.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -6 }}
                className="card"
                style={{ textAlign: "center" }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="icon-box icon-box-lg"
                  style={{ margin: "0 auto 28px" }}
                >
                  <Icon size={28} />
                </motion.div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 24 }}>{cat.title}</h3>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + j * 0.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
