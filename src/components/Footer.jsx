import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-main footer-inner">
        <p className="footer-copyright">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>

        <div className="footer-social-links">
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
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
