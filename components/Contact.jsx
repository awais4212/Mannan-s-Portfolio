"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-amber-400 text-xs sm:text-sm font-semibold">
            Contact
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
            Let's Work Together
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-4 sm:mt-5 leading-6 sm:leading-7">
            Interested in discussing business opportunities,
            collaborations or professional services? Feel free
            to get in touch.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 sm:space-y-8">

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="text-amber-400"
                    size={20}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm sm:text-base text-slate-400">
                    Phone
                  </p>

                  <p className="text-sm sm:text-base text-white break-words">
                    +974 6664 6254
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail
                    className="text-amber-400"
                    size={20}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm sm:text-base text-slate-400">
                    Email
                  </p>

                  <p className="text-sm sm:text-base text-white break-all">
                    mannansh110@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-amber-400"
                    size={20}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm sm:text-base text-slate-400">
                    Location
                  </p>

                  <p className="text-sm sm:text-base text-white">
                    Doha, Qatar
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6"
          >

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full min-w-0 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full min-w-0 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />

            </div>

            {/* Phone */}
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
            />

            {/* Message */}
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-white placeholder:text-slate-500 resize-none outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 transition px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base text-slate-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

