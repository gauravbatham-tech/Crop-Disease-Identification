"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">

      {/* HERO */}
      <section className="relative pt-44 pb-32 text-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 opacity-70"></div>

        <div className="relative max-w-4xl mx-auto">

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Crop
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Disease Detection
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-12">
            Upload a plant leaf image and instantly detect diseases with
            treatment recommendations powered by machine learning.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/disease"
              className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition"
            >
              Detect Disease
            </Link>
          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="py-28 bg-slate-50 dark:bg-zinc-900 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-16">
            Platform Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-10 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition border border-slate-100 dark:border-zinc-700 md:col-start-2">

              <div className="w-12 h-12 mb-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xl">
                🌿
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Leaf Disease Detection
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-6">
                Upload leaf images and identify plant diseases instantly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="py-28 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            About The System
          </h2>

          <p className="text-slate-600 dark:text-slate-400 leading-8 text-lg">
            AgroVision helps farmers and researchers detect plant diseases
            early and receive proper treatment advice. The system analyzes
            plant leaf images and provides predictions along with
            recommendations for fertilizers and pesticides.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Start Detecting Crop Diseases
          </h2>

          <Link
            href="/signup"
            className="px-10 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Create Account
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="py-10 bg-zinc-950 text-center text-sm text-zinc-400">
        © 2026 AgroVision • AI Agriculture Platform
      </footer>

    </div>
  );
}