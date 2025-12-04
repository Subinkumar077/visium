"use client";

import { motion } from "framer-motion";
import { Keyboard, Sparkles, Download } from "lucide-react";

const steps = [
    {
        icon: Keyboard,
        title: "Enter a Prompt",
        description: "Describe your imagination in simple text. The more detailed, the better.",
    },
    {
        icon: Sparkles,
        title: "AI Generates",
        description: "Our advanced Gemini models render high-quality visuals in seconds.",
    },
    {
        icon: Download,
        title: "Download Your Image",
        description: "Save your masterpiece instantly. No signup or credit card needed.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Creating stunning visuals has never been easier. Just three simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-indigo-600 select-none">
                                {index + 1}
                            </div>
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <step.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
