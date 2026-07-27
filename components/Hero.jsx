
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        items-center
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        lg:pt-24
        lg:pb-16
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          px-4
          sm:px-6
          lg:px-8
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          sm:gap-14
          lg:gap-16
          items-center
        "
      >

        {/* =========================
            Hero Content
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center lg:text-left"
        >

          {/* Location */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700
              bg-slate-900
              px-3
              sm:px-4
              py-2
              text-xs
              sm:text-sm
              text-slate-300
            "
          >
            <MapPin
              size={15}
              className="text-amber-400 flex-shrink-0"
            />

            <span>
              Doha, Qatar
            </span>
          </div>


          {/* Name */}
          <h1
            className="
              mt-5
              sm:mt-6
              text-3xl
              xs:text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              leading-tight
              tracking-tight
            "
          >
            Syed Abdul Mannan Hashmi
          </h1>


          {/* Job Title */}
          <p
            className="
              mt-4
              sm:mt-5
              text-lg
              sm:text-2xl
              text-amber-400
              font-semibold
            "
          >
            Sales & Marketing Professional
          </p>


          {/* Description */}
          <p
            className="
              mt-5
              sm:mt-6
              text-base
              sm:text-lg
              text-slate-300
              leading-7
              sm:leading-8
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            Results-driven professional with 5 years of experience
            in real estate sales, business development, customer
            relationship management, lead generation, negotiation,
            and client service.
          </p>


          {/* Buttons */}
          <div
            className="
              mt-7
              sm:mt-8
              flex
              flex-col
              xs:flex-row
              justify-center
              lg:justify-start
              gap-3
              sm:gap-4
            "
          >

            {/* Contact Button */}
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-amber-500
                px-5
                sm:px-6
                py-3
                sm:py-3.5
                text-sm
                sm:text-base
                font-semibold
                text-slate-950
                transition
                hover:bg-amber-400
                hover:scale-[1.02]
                active:scale-95
              "
            >
              Contact Me

              <ArrowRight
                size={18}
              />
            </a>


            {/* CV Button */}
            <a
              href="/cv.pdf"
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-700
                bg-slate-900/30
                px-5
                sm:px-6
                py-3
                sm:py-3.5
                text-sm
                sm:text-base
                font-semibold
                text-white
                transition
                hover:bg-slate-900
                hover:border-slate-600
                active:scale-95
              "
            >
              Download CV

              <Download
                size={18}
              />
            </a>

          </div>

        </motion.div>


        {/* =========================
            Profile Image
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
            w-full
            max-w-xl
            mx-auto
            lg:max-w-none
          "
        >

          {/* Image Container */}
          <div
            className="
              rounded-2xl
              sm:rounded-3xl
              border
              border-slate-800
              bg-slate-900/60
              backdrop-blur
              p-3
              sm:p-4
              shadow-2xl
            "
          >
            <img
              src="/profile.png"
              alt="Syed Abdul Mannan Hashmi"
              className="
                w-full
                h-[360px]
                sm:h-[450px]
                md:h-[500px]
                lg:h-[520px]
                object-cover
                rounded-xl
                sm:rounded-2xl
              "
            />
          </div>


          {/* Experience Badge */}
          <div
            className="
              absolute
              -bottom-4
              left-1/2
              -translate-x-1/2
              lg:left-auto
              lg:right-5
              lg:translate-x-0
              rounded-xl
              sm:rounded-2xl
              border
              border-slate-800
              bg-slate-900
              px-4
              sm:px-5
              py-3
              sm:py-4
              shadow-xl
              whitespace-nowrap
            "
          >
            <p
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-amber-400
              "
            >
              5+
            </p>

            <p
              className="
                text-xs
                sm:text-sm
                text-slate-300
              "
            >
              Years of Experience
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

