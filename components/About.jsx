
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Handshake,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Sales & Marketing",
    text: "Real estate sales, lead generation, negotiations, and closing transactions.",
  },
  {
    icon: Building2,
    title: "Business Development",
    text: "Growing client networks and contributing to monthly and quarterly sales targets.",
  },
  {
    icon: Handshake,
    title: "Customer Relations",
    text: "Building long-term client relationships that lead to repeat business and referrals.",
  },
  {
    icon: Users,
    title: "Client Service",
    text: "Providing professional support before and after property transactions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Section Label */}
          <p className="text-amber-400 font-semibold text-sm sm:text-base tracking-wide">
            ABOUT
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Professional Profile
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-7 sm:leading-8">
            Results-driven Sales & Marketing Professional with 5 years of
            experience in real estate sales, business development, and
            customer relationship management. Proven ability to generate
            qualified leads, negotiate successful transactions, build
            long-term client relationships, and achieve sales targets.
            Currently based in Doha, Qatar and open to opportunities in Sales,
            Business Development, Administration, Customer Service, Operations,
            and Real Estate.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6 hover:border-slate-700 transition duration-300"
              >
                {/* Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon
                    className="text-amber-400"
                    size={22}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-6 sm:leading-7">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

