"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does Visium work?",
        answer: "Visium uses advanced AI models (Google Gemini) to interpret your text prompts and generate high-quality images based on your description.",
    },
    {
        question: "Is it free to use?",
        answer: "Yes, Visium is currently free to use for all users. We may introduce premium features in the future.",
    },
    {
        question: "Do I need to sign up?",
        answer: "No, you can start generating images immediately without creating an account.",
    },
    {
        question: "What image formats are supported?",
        answer: "Currently, we provide high-quality PNG downloads for all generated images.",
    },
    {
        question: "Can I use the images commercially?",
        answer: "Yes, you have full commercial rights to the images you generate with Visium.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">
                        Everything you need to know about Visium.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-indigo-600" size={20} />
                                ) : (
                                    <Plus className="text-gray-400" size={20} />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
