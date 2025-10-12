import React from "react";

const testimonials = [
  { name: "Rohit Sharma", text: "Finicare guided us to optimize operations efficiently." },
  { name: "Aditi Mehra", text: "Professional advice that truly improved our business!" },
  { name: "Vikram Patel", text: "Highly reliable consultants who deliver real results." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="section-title">What Clients Say</h2>
      <div className="grid gap-8 md:grid-cols-3 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="card-hover text-center fade-in">
            <p className="text-gray-700 mb-4">&quot;{t.text}&quot;</p>
            <h4 className="font-semibold text-blue-700">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
