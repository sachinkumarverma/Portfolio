import { motion } from "framer-motion";
import { Mail, Download, ArrowDown, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "../data/portfolio";
import profileImg from "../assets/sachin.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, background: "var(--bg-hero)" }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "20%", left: "10%", width: 500, height: 500, background: "var(--hero-orb1)", filter: "blur(150px)", borderRadius: "50%" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "20%", right: "10%", width: 500, height: 500, background: "var(--hero-orb2)", filter: "blur(150px)", borderRadius: "50%" }}
        />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{ position: "absolute", left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%`, width: 3, height: 3, backgroundColor: "var(--accent)", opacity: 0.3, borderRadius: "50%" }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, transparent 0%, var(--hero-radial) 75%)` }} />
      </div>

      {/* Content */}
      <div className="container-wide" style={{ position: "relative", zIndex: 10, paddingTop: 120, paddingBottom: 120 }}>
        <div className="hero-layout">
          <div className="hero-content">
            <motion.div {...fadeUp(0.1)}>
              <span style={{ display: "inline-block", padding: "8px 20px", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.25em", color: "var(--accent)", background: "var(--bg-tag)", border: "1px solid var(--border-icon)", borderRadius: 999, marginBottom: 32, textTransform: "uppercase" }}>
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="gradient-text" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, lineHeight: 0.95, marginBottom: 24, letterSpacing: "-0.03em" }}>
              {personalInfo.name}
            </motion.h1>

            <motion.p {...fadeUp(0.35)} style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 500, color: "var(--accent)", opacity: 0.7, marginBottom: 20 }}>
              {personalInfo.subtitle}
            </motion.p>

            <motion.p {...fadeUp(0.45)} style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.75, marginBottom: 40, maxWidth: 560, color: "var(--text-secondary)" }}>
              {personalInfo.description}
            </motion.p>

            {personalInfo.availableForWork && (
              <motion.div {...fadeUp(0.55)} className="availability flex-center-lg" style={{ marginBottom: 40 }}>
                <div className="availability-dot" />
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#34d399", letterSpacing: "0.03em" }}>
                  Available for new projects
                </span>
              </motion.div>
            )}

            <motion.div {...fadeUp(0.65)} className="flex-center-lg" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <a href="#projects" className="btn-primary"><Briefcase size={18} /> View My Work</a>
              <a href="#contact" className="btn-outline"><Mail size={18} /> Get in Touch</a>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Download size={18} /> Resume</a>
            </motion.div>

            <motion.div {...fadeUp(0.75)} className="flex-center-lg" style={{ display: "flex", gap: 12 }}>
              {[
                { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
                { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-link">
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile pic inside rotating rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="hero-visual"
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", width: "var(--hero-size)", height: "var(--hero-size)", margin: "0 auto" }}>
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid var(--hero-ring)" }}
              >
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", width: 12, height: 12, borderRadius: "50%", background: "var(--accent)", boxShadow: `0 0 15px var(--accent-glow)` }} />
              </motion.div>
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: "var(--hero-inset-1)", borderRadius: "50%", border: "1px solid var(--hero-orb2)" }}
              >
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%, 50%)", width: 8, height: 8, borderRadius: "50%", background: "#60a5fa", boxShadow: "0 0 10px rgba(59,130,246,0.5)" }} />
              </motion.div>
              {/* Center - Profile picture or fallback */}
              <div style={{
                position: "absolute",
                inset: "var(--hero-inset-2)",
                borderRadius: "50%",
                background: `linear-gradient(135deg, rgba(6,182,212,0.06), rgba(59,130,246,0.06))`,
                border: "2px solid var(--hero-ring)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <img src={profileImg} alt={personalInfo.name} className="profile-pic" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: -24, right: -24, background: "var(--bg-card)", backdropFilter: "blur(20px)", border: "1px solid var(--border-card)", borderRadius: 16, padding: "16px 20px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #06b6d4, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 15px rgba(6,182,212,0.3)" }}>
                  <Briefcase size={18} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>{personalInfo.yearsOfExperience} Years</div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase" }}>Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", color: "var(--text-muted)", textDecoration: "none" }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
