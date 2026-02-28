"use client";

import Link from "next/link";

export default function Home() {


  return (
    // ✅ THIS is the correct place for dark/light wrapper
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors">
      {/* base background white in light, black in dark with smooth transition */}
      


      {/* HERO */}
      <section className="pt-32 pb-24 bg-gray-100 dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Crop & Plant Disease Identification System
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            A rule-based platform that helps to identify diseases or problems of crops or plants and suggests cure.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/recommend"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold"
            >
              Get Recommendation
            </Link>
            <Link
              href="/disease"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold"
            >
              Detect Disease
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">About the Project</h3>
          <p className="max-w-4xl leading-7">
            This system helps farmers and plant growers by providing structured
            recommendations for fertilizers and pesticides using predefined
            agricultural rules and datasets.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Crop, Soil & Season Input",
              "Rule-Based Recommendation Engine",
              "Instant Advisory Output",
              "User-Friendly Interface",
              "Scalable MERN Architecture",
              "Academic Project Ready",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">System Workflow</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["User Input", "Rule Matching", "Processing", "Recommendation"].map(
              (step, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Step {i + 1}</h4>
                  <p>{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section id="scope" className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Project Scope</h3>
          <ul className="list-disc ml-6 space-y-2 max-w-4xl">
            <li>Advisory recommendations only</li>
            <li>No real-time soil or weather analysis</li>
            <li>No yield prediction</li>
            <li>Designed for academic evaluation</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 dark:bg-zinc-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-sm">
          <p>© 2026 CropCare Advisor</p>
          <p>MERN Stack Mini Project</p>
        </div>
      </footer>
    </div>
  );
}
