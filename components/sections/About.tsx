"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Mail, Calendar, Star } from 'lucide-react';
import { personalInfo } from "@/lib/data";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";

const highlights = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Mail, label: "Email", value: personalInfo.email },
  { icon: Calendar, label: "Experience", value: "5+ Years" },
  { icon: Star, label: "Status", value: personalInfo.availability },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Passionate about{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              great software
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-500/30 shadow-2xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5603AQEj0tLoZZ7Pjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517027291722?e=2147483647&v=beta&t=Zd-sIlZf-a6ldZ_NB9xlB5Y9Kvw_2AbudyOBRSH_s58"
                  alt="Alex Rivera - Full-Stack Developer"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                      AR
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">{personalInfo.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Developer</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-6 top-12 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Projects Done</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 bottom-20 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">5+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Years Exp.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeInRight} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={fadeInRight} className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {personalInfo.bioExtended}
            </motion.p>

            {/* Info grid */}
            <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInRight} className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors"
              >
                <Mail size={18} />
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
