
"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Calendar,
  GraduationCap,
} from "lucide-react";

const certifications = [
  {
    title: "ACCP Pro Diploma",
    organization: "Aptech Computer Education",
    icon: Award,
    year: "Professional Certification",
    description:
      "Completed the ACCP Pro Diploma covering practical computer education, software applications, professional IT skills, and business computing.",
    color: "text-amber-400",
  },
  {
    title: "Bachelor of Business Administration",
    organization: "Iqra University",
    icon: GraduationCap,
    year: "Completed 2026",
    description:
      "Business Administration degree with knowledge in management, marketing, finance, customer relationship management, and business development.",
    color: "text-blue-400",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-amber-400 text-xs sm:text-sm font-semibold">
            Certifications
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
            Professional Qualifications
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 max-w-2xl mx-auto leading-6 sm:leading-7">
            My academic achievements and professional certifications
            demonstrate continuous learning, technical knowledge,
            and commitment to career development.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group h-full bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-amber-400 transition-all duration-300 shadow-lg"
              >

                {/* Icon & Verified Badge */}
                <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300">
                    <Icon
                      className={item.color}
                      size={24}
                    />
                  </div>

                  <BadgeCheck
                    size={24}
                    className="text-green-400 flex-shrink-0 sm:w-7 sm:h-7"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="text-amber-400 mt-2 font-medium text-sm sm:text-base">
                  {item.organization}
                </p>

                {/* Year */}
                <div className="flex items-start gap-2 mt-4 text-slate-400 text-sm sm:text-base">
                  <Calendar
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                  />

                  <span>{item.year}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7 mt-5 sm:mt-6">
                  {item.description}
                </p>

                {/* Verified Qualification */}
                <div className="mt-6 sm:mt-8">
                  <span className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 px-3 sm:px-4 py-2 rounded-full border border-amber-400/20 text-xs sm:text-sm">
                    <BadgeCheck
                      size={16}
                      className="flex-shrink-0"
                    />
                    Verified Qualification
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 bg-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center"
        >
          <Award
            size={32}
            className="text-amber-400 mx-auto mb-4 sm:w-10 sm:h-10"
          />

          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Committed to Continuous Learning
          </h3>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 max-w-3xl mx-auto leading-6 sm:leading-8">
            I believe in continuously enhancing my professional skills
            through education, certifications, practical experience,
            and lifelong learning to stay competitive in today's
            dynamic business environment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

