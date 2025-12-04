"use client";

import { motion } from "framer-motion";

const logos = [
    "Adobe",
    "Figma",
    "Canva",
    "Sketch",
    "Dribbble",
    "Behance",
];

export default function TrustBar() {
    return (
        <section className="py-10 border-y border-gray-100 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-gray-500 mb-8">
                    Used by designers, developers, marketers & creators.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl font-bold text-gray-900"
                        >
                            {/* In a real app, use SVG logos here. Using text for now. */}
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
