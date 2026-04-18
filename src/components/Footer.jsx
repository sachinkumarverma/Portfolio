import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border-card)", padding: "20px 0" }}>
      <div className="container-main" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: 20 }}>
          {[
            { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="social-link"
              style={{ width: 40, height: 40, borderRadius: 10 }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
