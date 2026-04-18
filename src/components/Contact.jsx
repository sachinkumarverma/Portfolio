import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
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
          <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 28, letterSpacing: "-0.02em" }}>
            Let's Work Together
          </h3>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 56, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Drop me a message and let's build something amazing.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
            style={{ padding: "18px 36px", fontSize: "1.05rem" }}
          >
            <Mail size={22} />
            Send me an Email
            <Send size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
