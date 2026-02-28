"use client";

import { useState } from "react";
import DiseaseForm from "../components/DiseaseForm";
import DiseaseResult from "../components/DiseaseResult";
import { detectDisease } from "../services/api";

export default function DiseasePage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await detectDisease(formData);
      if (res.message) {
        setError(res.message);
      } else {
        setResult(res);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* PAGE HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-3">
            Plant Disease Detection
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Upload a leaf image and the system will attempt to identify the
            disease affecting the plant.
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="grid grid-cols-3 gap-4 mb-12 text-sm text-center">
          <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            1️⃣ Upload Photo
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            2️⃣ Processing
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            3️⃣ View Result
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Upload Leaf Image
            </h2>
            <DiseaseForm onSubmit={handleSubmit} />
          </div>

          {/* RESULT */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Detection Output
            </h2>

            {/* STATES */}
            {loading && (
              <div className="text-sm text-gray-500">
                Analyzing the photo... this may take a few seconds.
              </div>
            )}

            {!loading && !result && !error && (
              <div className="text-sm text-gray-500">
                No image submitted yet.
                <br />
                Choose a file and submit to continue.
              </div>
            )}

            {error && (
              <div className="text-sm text-red-500">{error}</div>
            )}

            {result && <DiseaseResult data={result} />}
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-600 mb-2">
              How detection works
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The frontend sends the uploaded image to a detection API which uses
              machine learning or rule-based logic to identify the most likely
              disease. Results are advisory and meant for demonstration purposes
              only.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-600 mb-2">
              Limitations
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This interface only handles image selection and presentation of
              server responses; disease classification is not performed
              client‑side.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-center text-xs text-gray-500 mt-14">
          Crop & Plant Disease Detection · Frontend Prototype
        </p>
      </div>
    </div>
  );
}
