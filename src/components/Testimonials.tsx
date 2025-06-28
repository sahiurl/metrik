"use client";
import { useState, useEffect } from "react";
import { HandWrittenTitle } from "./HandWrittenTitle";
import "./testimonials.css";

const testimonials = [
  {
    name: "Alex, CTO of DefiPulse",
    quote:
      "Metrik didn't just meet our expectations; they shattered them. Our platform's performance has entered a new dimension.",
  },
  {
    name: "Samantha, Lead Dev at TokenForge",
    quote:
      "The developer experience is sublime. It's clear this was built by people who understand the blockchain space inside and out.",
  },
  {
    name: "Ben, Founder of Crypto-Ventures",
    quote:
      "Security is our top priority, and Metrik's audited, battle-tested protocol gives us the peace of mind we need to operate.",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 overflow-hidden relative">
      <HandWrittenTitle
        title="Unlock Your Crypto's Potential"
        subtitle="See what the best in the business are saying about us."
      />
      <div className="testimonial-chain-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, i) => (
          <>
            <div
              key={i}
              className={`testimonial-block ${
                activeIndex === i ? "is-active" : ""
              }`}
            >
              <p className="text-lg sm:text-xl font-medium leading-relaxed mb-4 text-gray-700">
                "{testimonial.quote}"
              </p>
              <p className="text-base font-bold text-purple-600">
                — {testimonial.name}
              </p>
            </div>
            {i < testimonials.length - 1 && (
              <div className="testimonial-connector" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};
