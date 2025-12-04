"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8"
                >
                    <Sparkles size={14} />
                    <span>Trusted by creators worldwide</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                >
                    Create Amazing Images <br className="hidden md:block" />
                    With AI — <span className="text-indigo-600">Instantly.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Visium transforms your ideas into stunning visuals using cutting-edge
                    AI. No credit card required. Start creating in seconds.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/generate"
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full transition-all shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 flex items-center gap-2 group"
                    >
                        Start Generating
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-lg font-semibold rounded-full transition-all"
                    >
                        How it Works
                    </Link>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 relative mx-auto max-w-5xl"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 aspect-[16/9]">
                        <div className="absolute inset-0 bg-gray-900">
                            <Image
                                src="/images/cyberpunk-city.jpg"
                                alt="Futuristic cyberpunk city with flying cars"
                                fill
                                className="object-cover opacity-90"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                        </div>

                        {/* Overlay UI Mockup */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <p className="text-white/90 text-sm font-medium truncate max-w-md">
                                    Prompt: A futuristic city with flying cars and neon lights,
                                    cyberpunk style...
                                </p>
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <span className="px-2 py-1 rounded bg-white/20 text-xs text-white font-medium">
                                    4K
                                </span>
                                <span className="px-2 py-1 rounded bg-white/20 text-xs text-white font-medium">
                                    v1.0
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative blobs behind image */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20 -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
