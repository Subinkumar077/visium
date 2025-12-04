"use client";

import { Download, RefreshCw, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface OutputAreaProps {
    isGenerating: boolean;
    image: string | null;
    onRegenerate: () => void;
}

export default function OutputArea({ isGenerating, image, onRegenerate }: OutputAreaProps) {
    if (!image && !isGenerating) {
        return (
            <div className="flex-grow bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <ImageIcon size={40} className="text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Create</h3>
                <p className="text-gray-500 max-w-sm">
                    Enter a prompt above and choose your settings to generate your first masterpiece.
                </p>
            </div>
        );
    }

    return (
        <div className="flex-grow bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Result</h3>
                {image && (
                    <div className="flex gap-2">
                        <button
                            onClick={onRegenerate}
                            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                            title="Regenerate"
                        >
                            <RefreshCw size={20} />
                        </button>
                        <a
                            href={image}
                            download="visium-generated.png"
                            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                            title="Download"
                        >
                            <Download size={20} />
                        </a>
                    </div>
                )}
            </div>

            <div className="relative flex-grow bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
                {isGenerating ? (
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-20 h-20">
                            <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        <p className="text-indigo-600 font-medium animate-pulse">Creating magic...</p>
                    </div>
                ) : image ? (
                    <div className="relative w-full h-full min-h-[400px]">
                        <Image
                            src={image}
                            alt="Generated Image"
                            fill
                            className="object-contain"
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
