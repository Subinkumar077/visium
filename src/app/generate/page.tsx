"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PromptInput from "@/components/generator/PromptInput";
import SettingsPanel from "@/components/generator/SettingsPanel";
import OutputArea from "@/components/generator/OutputArea";
import Footer from "@/components/Footer";

export default function GeneratePage() {
    const [prompt, setPrompt] = useState("");
    const [settings, setSettings] = useState({
        size: "1024x1024",
        style: "realistic",
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt) return;

        setIsGenerating(true);
        setGeneratedImage(null);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    prompt,
                    ...settings,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to generate image");
            }

            if (data.image) {
                setGeneratedImage(data.image);
            } else {
                throw new Error("No image data received");
            }
        } catch (error: any) {
            alert(error.message || "An unexpected error occurred. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 h-full">
                    {/* Left Sidebar - Settings */}
                    <div className="lg:col-span-3 space-y-6">
                        <SettingsPanel settings={settings} setSettings={setSettings} />
                    </div>

                    {/* Main Content - Prompt & Output */}
                    <div className="lg:col-span-9 space-y-6 flex flex-col">
                        <PromptInput
                            prompt={prompt}
                            setPrompt={setPrompt}
                            onGenerate={handleGenerate}
                            isGenerating={isGenerating}
                        />
                        <OutputArea
                            isGenerating={isGenerating}
                            image={generatedImage}
                            onRegenerate={handleGenerate}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
