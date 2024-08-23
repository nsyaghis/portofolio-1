"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

// Experience data
const experience = {
  title: "My Experience 2024",
  description: "A summary of my professional journey and accomplishments.",
  items: [
    {
      institution: "Satria Data",
      position: "Liaison Officer",
      jobdesk:
        "Liaising between the race committee and the participants or teams assigned to him and provide up-to-date information on race schedules, rules, and details to participants in his/her charge.",
    },
    {
      institution: "MBC Laboratory",
      position: "MBC Study Group Participant",
      jobdesk:
        "Study group focusing on developing student skills in Big Data, Cybersecurity, Game Tech, and GIS.",
    },
  ],
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-gradient-to-br from-[#221f1c] to-[#e18700] animate-fade-in"
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#221f1c] to-[#e18700] hover:scale-105 transition-transform duration-300">
          {experience.title}
        </h1>
        <p className="mt-4 text-lg text-gray-300">{experience.description}</p>
        <div className="mt-8 space-y-6">
          {experience.items.map((item, index) => (
            <div key={index} className="p-6 bg-[#2a2926] rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#e18700]">{item.institution}</h2>
              <p className="text-xl font-medium text-gray-300">{item.position}</p>
              <p className="text-md text-gray-400 mt-2">{item.jobdesk}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
