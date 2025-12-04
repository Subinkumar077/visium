import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { prompt, size, style } = body;

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        // Map size to width/height
        const [width, height] = size === "16:9" ? [1280, 720] :
            size === "4:3" ? [1024, 768] :
                size === "512x512" ? [512, 512] : [1024, 1024];

        // Construct enhanced prompt
        const enhancedPrompt = `${prompt}. ${style} style. High quality, detailed, 8k resolution.`;

        // Pollinations.ai URL
        // Adding a random seed to ensure new images on same prompt
        const seed = Math.floor(Math.random() * 1000000);
        const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=${width}&height=${height}&seed=${seed}&nologo=true&model=flux`;



        const response = await fetch(pollinationsUrl);

        if (!response.ok) {
            throw new Error(`Pollinations API failed with status: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        const image = `data:image/jpeg;base64,${base64}`;

        return NextResponse.json({ image });

    } catch (error: any) {
        console.error("Generation error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to generate image" },
            { status: 500 }
        );
    }
}
