"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Digital Artist",
        content: "Visium has completely transformed my workflow. The quality of the generated images is simply outstanding.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Marketing Director",
        content: "We use Visium for all our social media assets now. It saves us hours of work every single week.",
        rating: 5,
    },
    {
        name: "Jessica Lee",
        role: "UI/UX Designer",
        content: "The ability to quickly generate placeholder assets that look professional is a game changer for my prototypes.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Creators</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See what our community has to say about Visium.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
