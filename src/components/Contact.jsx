import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { personalInfo } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing" style={{ position: "relative" }}>
      <div className="container-narrow" style={{ textAlign: "center", position: "relative" }}>
        <SectionHeader number="05" label="CONTACT" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 28, letterSpacing: "-0.02em" }}>
            Let's Connect
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 48, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
            I'm open to full-time software engineering opportunities in React, Node.js, and mobile development. If you're hiring for a product-focused engineering role, I'd be happy to connect.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary"
              style={{ padding: "14px 30px", fontSize: "0.95rem" }}
            >
              <Mail size={18} /> Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "14px 30px", fontSize: "0.95rem" }}
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
