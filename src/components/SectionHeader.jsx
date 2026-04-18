import { motion } from "framer-motion";

export default function SectionHeader({ number, label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="section-header"
    >
      <div className="section-label">{number}. {label}</div>
      {title && <h2 className="section-title">{title}</h2>}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="section-line"
      />
    </motion.div>
  );
}
