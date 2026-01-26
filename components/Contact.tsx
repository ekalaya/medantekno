"use client";

import { MessageCircle, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Hubungi Kami</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Siap memulai proyek Anda? Hubungi kami melalui platform berikut.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    <Link
                        href="https://www.youtube.com/@medantekno"
                        target="_blank"
                        className="flex items-center space-x-3 px-8 py-4 bg-[#FF0000] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-red-500/20"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>YouTube</span>
                    </Link>

                    <Link
                        href="https://instagram.com/medanteknocom"
                        target="_blank"
                        className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/20"
                    >
                        <Instagram className="w-6 h-6" />
                        <span>Instagram</span>
                    </Link>

                    <Link
                        href="https://facebook.com/Medantekno"
                        target="_blank"
                        className="flex items-center space-x-3 px-8 py-4 bg-[#1877F2] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/20"
                    >
                        <Facebook className="w-6 h-6" />
                        <span>Facebook</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
