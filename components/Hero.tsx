"use client";

import { motion } from "framer-motion";
import Scene from "./Scene";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-50 dark:opacity-40">
                <Scene />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 text-sm font-semibold mb-6">
                        Belajar Bersama
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight">
                        Pemrogaman Web & Mobile <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
                            AI & IOT
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
                        Hati orang berpengertian memperoleh pengetahuan, dan telinga orang bijak menuntut pengetahuan
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
