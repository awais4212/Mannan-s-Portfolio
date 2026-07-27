
"use client";

import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* =========================
            Top Footer Content
        ========================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {/* =========================
              About / Introduction
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
            className="sm:col-span-2 lg:col-span-1"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Syed Abdul Mannan
            </h2>

            <p className="text-amber-400 mt-2 text-sm sm:text-base font-medium">
              Sales & Marketing Professional
            </p>

            <p className="text-slate-400 mt-5 sm:mt-6 text-sm sm:text-base leading-7 sm:leading-8 max-w-xl">
              Passionate about building strong client relationships,
              driving business growth, achieving sales targets, and
              delivering exceptional customer experiences.
            </p>
          </motion.div>


          {/* =========================
              Quick Links
          ========================== */}
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
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-3 sm:gap-y-4">

              <a
                href="#about"
                className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition"
              >
                About
              </a>

              <a
                href="#experience"
                className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition"
              >
                Experience
              </a>

              <a
                href="#skills"
                className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition"
              >
                Skills
              </a>

              <a
                href="#education"
                className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition"
              >
                Education
              </a>

              <a
                href="#certifications"
                className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition"
              >
                Certifications
              </a>

              <a
                href="#contact"
                className="text-sm sm:text-base text-slate-400 hover:text-amber-400 transition"
              >
                Contact
              </a>

            </div>
          </motion.div>


          {/* =========================
              Contact Information
          ========================== */}
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
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="min-w-0"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-5">

              {/* Phone */}
              <div className="flex items-start gap-3 min-w-0">

                <Phone
                  size={18}
                  className="text-amber-400 flex-shrink-0 mt-0.5"
                />

                <span className="text-sm sm:text-base text-slate-400 break-words">
                  +974 6664 6254
                </span>

              </div>


              {/* Email */}
              <div className="flex items-start gap-3 min-w-0">

                <Mail
                  size={18}
                  className="text-amber-400 flex-shrink-0 mt-0.5"
                />

                <span className="text-sm sm:text-base text-slate-400 break-all">
                  mannansh110@gmail.com
                </span>

              </div>


              {/* Location */}
              <div className="flex items-start gap-3 min-w-0">

                <MapPin
                  size={18}
                  className="text-amber-400 flex-shrink-0 mt-0.5"
                />

                <span className="text-sm sm:text-base text-slate-400">
                  Doha, Qatar
                </span>

              </div>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/syed-abdul-mannan-hashmi-26a720345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center sm:justify-start gap-2 mt-2 sm:mt-4 px-4 py-2.5 sm:px-0 sm:py-0 text-sm sm:text-base text-slate-400 hover:text-amber-400 border border-slate-700 sm:border-0 rounded-xl sm:rounded-none transition w-full sm:w-auto"
              >
                <FaLinkedin size={18} />
                LinkedIn Profile
              </a>

            </div>
          </motion.div>

        </div>


        {/* =========================
            Divider
        ========================== */}
        <div className="border-t border-slate-800 my-8 sm:my-10 lg:my-12" />


        {/* =========================
            Footer Bottom
        ========================== */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-6">

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left leading-6">
            © {new Date().getFullYear()} Syed Abdul Mannan Hashmi.
            <span className="block sm:inline">
              {" "}All Rights Reserved.
            </span>
          </p>


          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 sm:w-12 sm:h-12 mx-auto sm:mx-0 rounded-full bg-amber-400 hover:bg-amber-500 active:scale-95 transition flex items-center justify-center shadow-lg shadow-amber-900/20"
          >
            <ArrowUp
              size={19}
              className="text-slate-900"
            />
          </button>

        </div>

      </div>

    </footer>
  );
}

