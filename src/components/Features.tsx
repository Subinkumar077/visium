"use client";

import { motion } from "framer-motion";
import { Maximize2, Zap, Palette, Copyright } from "lucide-react";

const features = [
    {
        icon: Palette,
        title: "Multiple Styles",
        description: "Choose from realistic, anime, digital art, 3D render, and more.",
    },
    {
        icon: Maximize2,
        title: "High Resolution",
        description: "Generate crystal clear images up to 1024x1024px.",
    },
    {
        icon: Zap,
        title: "Ultra-fast Generation",
        description: "Get your results in seconds, powered by Google's Gemini API.",
    },
    {
        icon: Copyright,
        title: "Commercial Use",
        description: "Full rights to use your generated images for commercial projects.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to create professional-grade assets for your projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors"
                        >
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                <feature.icon size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
