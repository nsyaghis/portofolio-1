"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: '01',
    title: 'Landing Page',
    description: 'Technical test of recruitment website',
    href: "https://technical-test-mbc.vercel.app/", // URL yang dituju
  },
];

const Project = () => {
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-2 group"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold">{project.num}</div>
                <BsArrowDownRight />
              </div>
              {/* Title */}
              <Link href={project.href} passHref>
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-200 cursor-pointer">
                  {project.title}
                </h2>
              </Link>
              {/* Description */}
              <p>{project.description}</p>
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
