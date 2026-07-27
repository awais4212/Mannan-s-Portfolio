"use client";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Handshake,
  TrendingUp,
  Phone,
  FileText,
  BarChart3,
  MessageSquare,
  Monitor,
  Globe,
  Clock,
  Lightbulb,
} from "lucide-react";

const skillCategories = [
  {
    title: "Sales & Marketing",
    skills: [
      { name: "Sales", icon: TrendingUp },
      { name: "Business Development", icon: Briefcase },
      { name: "Lead Generation", icon: Users },
      { name: "Negotiation", icon: Handshake },
    ],
  },
  {
    title: "Customer Relations",
    skills: [
      { name: "Customer Service", icon: Phone },
      { name: "CRM", icon: MessageSquare },
      { name: "Communication", icon: Globe },
      { name: "Relationship Building", icon: Users },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "Microsoft Excel", icon: BarChart3 },
      { name: "Microsoft Word", icon: FileText },
      { name: "Microsoft PowerPoint", icon: Monitor },
      { name: "Office Administration", icon: Briefcase },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Time Management", icon: Clock },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Documentation", icon: FileText },
      { name: "Team Collaboration", icon: Users },
    ],
  },
];

const coreCompetencies = [
  "Sales Strategy",
  "Real Estate Sales",
  "Business Growth",
  "Client Acquisition",
  "Customer Relationship Management",
  "Presentation Skills",
  "Lead Conversion",
  "Negotiation",
  "Reporting",
  "Documentation",
  "Microsoft Office",
  "Problem Solving",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================
            Section Heading
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-amber-400 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm font-semibold">
            Professional Skills
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
            Skills & Expertise
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 max-w-2xl mx-auto leading-7 sm:leading-8">
            A combination of business, communication,
            customer relationship management, sales, and
            administrative skills developed over years of
            professional experience.
          </p>
        </motion.div>


        {/* =========================
            Skill Categories
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                bg-slate-800/60
                border
                border-slate-700
                rounded-2xl
                p-5
                sm:p-6
                lg:p-8
                backdrop-blur-sm
                hover:border-amber-400
                transition-all
                duration-300
              "
            >

              {/* Category Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5 sm:mb-7 lg:mb-8">
                {category.title}
              </h3>


              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.03,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                        sm:gap-4
                        bg-slate-900
                        rounded-xl
                        p-3
                        sm:p-4
                        border
                        border-slate-700
                        hover:border-amber-400
                        transition
                        min-w-0
                      "
                    >

                      {/* Icon */}
                      <div className="
                        h-10
                        w-10
                        sm:h-12
                        sm:w-12
                        rounded-xl
                        bg-amber-400/10
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      ">
                        <Icon
                          size={20}
                          className="text-amber-400 sm:w-[22px] sm:h-[22px]"
                        />
                      </div>


                      {/* Skill Name */}
                      <h4 className="
                        text-sm
                        sm:text-base
                        text-white
                        font-medium
                        leading-5
                        break-words
                      ">
                        {skill.name}
                      </h4>

                    </motion.div>
                  );
                })}

              </div>

            </motion.div>
          ))}

        </div>


        {/* =========================
            Core Competencies
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-10
            sm:mt-12
            lg:mt-16
            bg-slate-800
            rounded-2xl
            p-5
            sm:p-6
            lg:p-8
            border
            border-slate-700
          "
        >

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">
            Core Competencies
          </h3>


          {/* Competency Tags */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 lg:gap-4">

            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="
                  px-3
                  sm:px-4
                  py-2
                  rounded-full
                  bg-slate-900
                  border
                  border-slate-700
                  text-xs
                  sm:text-sm
                  text-slate-300
                  hover:border-amber-400
                  hover:text-white
                  transition
                  leading-5
                "
              >
                {item}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

