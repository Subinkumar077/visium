"use client";

import { Settings, Image as ImageIcon, Palette } from "lucide-react";

interface SettingsPanelProps {
    settings: {
        size: string;
        style: string;
    };
    setSettings: (settings: any) => void;
}

const sizes = [
    { value: "512x512", label: "Square (512x512)" },
    { value: "1024x1024", label: "Square HD (1024x1024)" },
    { value: "16:9", label: "Landscape (16:9)" },
    { value: "4:3", label: "Portrait (4:3)" },
];

const styles = [
    { value: "realistic", label: "Photorealistic" },
    { value: "anime", label: "Anime / Manga" },
    { value: "digital-art", label: "Digital Art" },
    { value: "oil-painting", label: "Oil Painting" },
    { value: "3d-render", label: "3D Render" },
    { value: "sketch", label: "Sketch / Pencil" },
];

export default function SettingsPanel({ settings, setSettings }: SettingsPanelProps) {
    const handleChange = (key: string, value: string) => {
        setSettings({ ...settings, [key]: value });
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-gray-900">
                <Settings size={20} className="text-indigo-600" />
                <h3 className="font-bold">Settings</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                        <ImageIcon size={16} />
                        Image Size
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size.value}
                                onClick={() => handleChange("size", size.value)}
                                className={`px-4 py-2 text-left text-sm rounded-lg border transition-all ${settings.size === size.value
                                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-medium"
                                    : "border-gray-200 hover:border-gray-300 text-gray-600"
                                    }`}
                            >
                                {size.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                        <Palette size={16} />
                        Art Style
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {styles.map((style) => (
                            <button
                                key={style.value}
                                onClick={() => handleChange("style", style.value)}
                                className={`px-3 py-2 text-center text-xs rounded-lg border transition-all ${settings.style === style.value
                                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-medium"
                                    : "border-gray-200 hover:border-gray-300 text-gray-600"
                                    }`}
                            >
                                {style.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
