"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Info data
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62)81952304307",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nsynbl27@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bandung",
  },
  
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[64%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-slate-600 rounded-xl">
              <h3 className="text-4xl text-accent">Let's Connect</h3>
              <p className="text-white/60">
                Let's connect to build professional relationships, thank you!
              </p>

              {/*input */}
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>

            </form>
          </div>
         {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-52px h-52px xl:w-72px xl:h-72px bg-#27272c text-accent rounded-md flex items-center justify-center">
                    <div className="text-28px">{item.icon}</div>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
