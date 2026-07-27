"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const responsibilities = [
  "Managed residential and commercial property sales from inquiry to closing.",
  "Generated qualified leads through referrals, digital marketing, and client networking.",
  "Conducted property presentations, meetings, and site visits for prospective buyers.",
  "Negotiated prices and contract terms to achieve successful transactions.",
  "Built and maintained strong client relationships, resulting in repeat business and referrals.",
  "Prepared quotations, agreements, sales reports, and client documentation.",
  "Maintained customer records and sales reports using Microsoft Excel and CRM software.",
  "Coordinated with legal and documentation teams to ensure smooth property transfers.",
];

const skills = [
  {
    title: "Lead Generation",
    text: "Built qualified lead pipelines through referrals, digital outreach, and networking.",
  },
  {
    title: "Negotiation",
    text: "Negotiated property prices and contract terms to support successful closings.",
  },
  {
    title: "Client Retention",
    text: "Maintained strong relationships that encouraged repeat business and referrals.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            Section Heading
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p className="text-amber-400 text-sm sm:text-base font-semibold tracking-wide">
            EXPERIENCE
          </p>

          <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Professional Experience
          </h2>
        </motion.div>


        {/* =========================
            Experience Card
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 p-5 sm:p-6 lg:p-8"
        >

          {/* =========================
              Job Header
          ========================== */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 sm:gap-6">

            {/* Job Details */}
            <div className="min-w-0">

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight break-words">
                Real Estate Sales & Marketing Executive
              </h3>

              {/* Company + Location */}
              <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-slate-400">

                <span className="inline-flex items-start gap-2">
                  <Building2
                    size={18}
                    className="text-amber-400 flex-shrink-0 mt-0.5"
                  />

                  <span>
                    Hassan Associates
                  </span>
                </span>

                <span className="inline-flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="text-amber-400 flex-shrink-0 mt-0.5"
                  />

                  <span>
                    Bahria Town, Karachi, Pakistan
                  </span>
                </span>

              </div>

            </div>


            {/* Employment Date */}
            <div className="inline-flex items-center gap-2 self-start rounded-xl bg-slate-900 px-3 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-300 border border-slate-800 whitespace-nowrap">

              <CalendarDays
                size={16}
                className="text-amber-400 flex-shrink-0"
              />

              <span>
                Jan 2021 — Jan 2026
              </span>

            </div>

          </div>


          {/* =========================
              Responsibilities
          ========================== */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-4 sm:gap-y-5">

            {responsibilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                {/* Bullet */}
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />

                {/* Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-7">
                  {item}
                </p>
              </div>
            ))}

          </div>


          {/* =========================
              Key Skills
          ========================== */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl sm:rounded-2xl bg-slate-900 p-4 sm:p-5 border border-slate-800 hover:border-amber-400/50 transition duration-300"
              >

                <p className="text-amber-400 text-sm sm:text-base font-semibold">
                  {skill.title}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-6 sm:leading-7">
                  {skill.text}
                </p>

              </div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}

