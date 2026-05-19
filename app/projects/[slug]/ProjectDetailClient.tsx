"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2 as Github, Eye, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";

interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  screenshots: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  role: string;
  duration: string;
}

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Back link */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white max-w-4xl"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed"
            >
              {project.shortDesc}
            </motion.p>

            {/* Meta info */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              {[
                { icon: Calendar, label: "Year", value: project.year },
                { icon: User, label: "Role", value: project.role },
                { icon: Clock, label: "Duration", value: project.duration },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <Icon size={16} className="text-indigo-500 dark:text-indigo-400" />
                  <span className="text-slate-500 dark:text-slate-400">{label}:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-colors"
              >
                <Eye size={18} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors"
              >
                <Github size={18} />
                View Code
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/20"
        >
          <img
            src={project.image}
            alt={project.title + " screenshot"}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* Overview */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Project Overview
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {project.description}
              </motion.p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-sm">
                  01
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.challenge}
              </motion.p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  02
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Solution</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.solution}
              </motion.p>
            </motion.div>

            {/* Outcome */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm">
                  03
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Outcome</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.outcome}
              </motion.p>
            </motion.div>

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Screenshots
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md"
                    >
                      <img
                        src={src}
                        alt={"Screenshot " + (i + 1) + " of " + project.title}
                        className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            {/* Project info card */}
            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 sticky top-24"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">Project Details</h3>

              <div className="flex flex-col gap-4">
                {[
                  { label: "Year", value: project.year },
                  { label: "Role", value: project.role },
                  { label: "Duration", value: project.duration },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  <Eye size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl text-sm hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold text-slate-900 dark:text-white mb-8"
              >
                Other Projects
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {otherProjects.map((p) => (
                  <motion.div key={p.slug} variants={fadeInUp}>
                    <Link
                      href={"/projects/" + p.slug}
                      className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-20 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{p.shortDesc}</p>
                      </div>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
