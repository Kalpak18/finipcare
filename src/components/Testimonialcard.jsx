import React from "react";

export default function TestimonialCard({ name, text }) {
  return (
    <div className="card-hover fade-in border-l-4 border-blue-500 p-6">
      <p className="text-gray-700 italic mb-4">“{text}”</p>
      <h4 className="text-blue-700 font-semibold">– {name}</h4>
    </div>
  );
}
