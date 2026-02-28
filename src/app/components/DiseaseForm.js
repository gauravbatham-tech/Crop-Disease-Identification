"use client";
import { useState } from "react";

export default function DiseaseForm({ onSubmit }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("leafImage", file);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Leaf Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-zinc-800"
          required
        />
      </div>

      {file && (
        <div className="mt-2">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Selected file: {file.name}
          </p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Analyze Image
      </button>
    </form>
  );
}
