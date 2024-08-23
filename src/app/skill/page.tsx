"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

// Data skills
const skills = [
  {
    num: '01',
    title: 'Web Development',
    description: 'technical skills especially front-end required to build websites with basic programming languages html, css, javascript with frameworks such as node.js',
    href: "",
  },
  {
    num: '02',
    title: 'Linux',
    description: 'As a beginner, Linux is the top choice for cybersecurity beginners due to its flexibility, accessibility, large community, and availability of various security tools for free.',
    href: "",
  },
]

const Skill = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-2 group"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold">{skill.num}</div>
                <BsArrowDownRight />
              </div>
              {/* Title */}
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent trasition-all duration-200">
                {skill.title}
              </h2>
              {/* Description */}
              <p>{skill.description}</p>
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skill
