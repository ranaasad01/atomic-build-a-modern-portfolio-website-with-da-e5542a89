"use client";

import { motion } from "framer-motion";
import { Layout, Terminal, GitBranch } from 'lucide-react';
import { skills, techBadges } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerContainerFast, scaleIn, viewportConfig } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Terminal,
  GitBranch,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: level + "%" }}
          viewport={viewportConfig}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950">
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
            Technical Skills
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white"
          >
            My{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A curated set of tools and technologies I use to build modern, scalable applications.
          </motion.p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: catIdx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{category.category}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {category.items.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIdx * 0.1 + skillIdx * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6"
          >
            Also experienced with
          </motion.p>
          <motion.div
            variants={staggerContainerFast}
            className="flex flex-wrap justify-center gap-3"
          >
            {techBadges.map((badge) => (
              <motion.span
                key={badge}
                variants={scaleIn}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
