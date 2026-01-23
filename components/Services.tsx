"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/services";

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Pengembangan Keahlian</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Bidang teknologi yang kami kembangkan
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-neutral-700 group text-foreground"
                            >
                                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="flex items-center text-violet-600 dark:text-violet-400 font-medium group-hover:translate-x-1 transition-transform"
                                >
                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Carousel (simplified) */}
                    <div className="md:hidden flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[85%] snap-center bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-neutral-700"
                            >
                                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="flex items-center text-violet-600 dark:text-violet-400 font-medium"
                                >
                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
