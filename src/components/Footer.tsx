import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900 mb-4 block">
                            Visium
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Create stunning visuals with the power of AI. Simple, fast, and free.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/generate" className="hover:text-indigo-600 transition-colors">Generate</Link></li>
                            <li><Link href="#features" className="hover:text-indigo-600 transition-colors">Features</Link></li>
                            <li><Link href="#gallery" className="hover:text-indigo-600 transition-colors">Gallery</Link></li>
                            <li><Link href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/docs" className="hover:text-indigo-600 transition-colors">Documentation</Link></li>
                            <li><Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
                            <li><Link href="/community" className="hover:text-indigo-600 transition-colors">Community</Link></li>
                            <li><Link href="/help" className="hover:text-indigo-600 transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Visium. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-gray-400">
                        <a href="#" className="hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
                        <a href="#" className="hover:text-gray-900 transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
