"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - in a real app, these would be actual generated images
const images = [
    "/images/Cute robot playing with a kitten, 3d render.png",
    "/images/Cyberpunk city street at night, neon lights, rain.png",
    "/images/Portrait of a futuristic astronaut, digital art.png",
    "/images/Serene japanese garden with cherry blossoms, watercolor.png",
    "/images/teagardenviewfineartlandscapephotographyminttoplightingcenteredcompositionuplifting.jpg",
    "/images/A majestic fantasy elephant with ornate decorations and glowing patterns, surreal and magical style.png", // Placeholder for Krishna
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Made with Visium</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore the endless possibilities of AI-generated art.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
