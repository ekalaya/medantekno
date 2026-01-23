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
                        href="https://wa.me/6282311240111"
                        target="_blank"
                        className="flex items-center space-x-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-green-500/20"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span>WhatsApp</span>
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
