"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Zap, MousePointer, Layers, Smile } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Traditional Design is <span className="text-red-500">Hard</span>.
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                    <DollarSign size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Expensive Tools</h3>
                                    <p className="text-gray-600 text-sm">
                                        Professional software costs hundreds of dollars per month.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Steep Learning Curve</h3>
                                    <p className="text-gray-600 text-sm">
                                        Years of practice needed to master complex interfaces.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 rounded-2xl bg-red-50 border border-red-100">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Slow Workflows</h3>
                                    <p className="text-gray-600 text-sm">
                                        Hours spent tweaking pixels instead of creating.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Visium is <span className="text-indigo-600">Effortless</span>.
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Fast AI Generation</h3>
                                    <p className="text-gray-600 text-sm">
                                        Turn text into professional images in seconds.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                    <Smile size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Free to Start</h3>
                                    <p className="text-gray-600 text-sm">
                                        No credit card required. Just start creating.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                    <MousePointer size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Simple & Intuitive</h3>
                                    <p className="text-gray-600 text-sm">
                                        Designed for everyone, not just pros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
