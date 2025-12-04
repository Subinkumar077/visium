"use client";

import { Sparkles } from "lucide-react";

interface PromptInputProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onGenerate: () => void;
    isGenerating: boolean;
}

const suggestions = [
    "Cyberpunk city street at night, neon lights, rain",
    "Portrait of a futuristic astronaut, digital art",
    "Serene japanese garden with cherry blossoms, watercolor",
    "Cute robot playing with a kitten, 3d render",
];

export default function PromptInput({ prompt, setPrompt, onGenerate, isGenerating }: PromptInputProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Describe your imagination
            </label>
            <div className="relative">
                <textarea
                    id="prompt"
                    rows={4}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all resize-none text-gray-900 placeholder-gray-400"
                    placeholder="A futuristic city with flying cars..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isGenerating}
                />
                <button
                    onClick={onGenerate}
                    disabled={!prompt || isGenerating}
                    className="absolute bottom-4 right-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                    {isGenerating ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <Sparkles size={18} />
                            Generate
                        </>
                    )}
                </button>
            </div>

            <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Try these:</p>
                <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                        <button
                            key={suggestion}
                            onClick={() => setPrompt(suggestion)}
                            className="px-3 py-1 bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 text-xs rounded-full border border-gray-100 transition-colors truncate max-w-[200px]"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
