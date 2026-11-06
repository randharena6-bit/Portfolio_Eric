import { motion, useReducedMotion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`section-heading mb-12 md:mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
        <span className="heading-words" aria-label={title}>{title.split(" ").map((word, index) => (
          <span className="heading-word-window" aria-hidden="true" key={`${word}-${index}`}>
            <motion.span initial={reducedMotion ? false : { y: "110%", rotate: 4 }} whileInView={{ y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}>{word}</motion.span>
          </span>
        ))}</span>
      </h2>
      {description && (
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
