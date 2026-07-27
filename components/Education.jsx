
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  Calendar,
} from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Business Administration (BBA)",
    institute: "Iqra University",
    year: "Completed: January 2026",
    description:
      "Completed Bachelor of Business Administration with a focus on management, marketing, business development, customer relations, and organizational practices.",
  },
  {
    icon: School,
    title: "Intermediate",
    institute: "Karachi Board",
    year: "2019",
    description:
      "Completed Higher Secondary Education with strong academic performance and developed communication and analytical skills.",
  },
  {
    icon: BookOpen,
    title: "Matriculation",
    institute: "Karachi Board",
    year: "2017",
    description:
      "Successfully completed secondary education while building a strong academic foundation.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            Section Heading
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-amber-400 text-xs sm:text-sm font-semibold">
            Education
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
            Academic Journey
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-4 sm:mt-5 leading-7">
            My educational background has provided the
            business knowledge and professional skills that
            support my career in sales, customer relations,
            and business development.
          </p>
        </motion.div>


        {/* =========================
            Timeline
        ========================== */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-slate-700" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative pl-12 sm:pl-16"
                >

                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-lg ring-4 ring-slate-950 z-10">
                    <Icon
                      size={16}
                      className="sm:hidden text-slate-900"
                    />

                    <Icon
                      size={20}
                      className="hidden sm:block text-slate-900"
                    />
                  </div>


                  {/* Education Card */}
                  <div className="bg-slate-900 border border-slate-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-amber-400 transition duration-300">

                    {/* Date */}
                    <div className="flex items-start gap-2 text-amber-400 mb-3 sm:mb-4">

                      <Calendar
                        size={16}
                        className="mt-0.5 flex-shrink-0 sm:hidden"
                      />

                      <Calendar
                        size={18}
                        className="mt-0.5 flex-shrink-0 hidden sm:block"
                      />

                      <span className="text-xs sm:text-sm leading-5">
                        {item.year}
                      </span>

                    </div>


                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>


                    {/* Institute */}
                    <p className="text-amber-400 mt-2 text-sm sm:text-base font-medium">
                      {item.institute}
                    </p>


                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-400 mt-4 sm:mt-5 leading-7 sm:leading-8">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

