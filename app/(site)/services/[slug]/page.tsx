import { servicesData } from "@/lib/services";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} - Medantekno Services`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white dark:bg-black py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/#services"
                    className="inline-flex items-center text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>

                <header className="mb-12">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                        <service.icon className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {service.description}
                    </p>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-violet-600 dark:prose-a:text-violet-400">
                    <MDXRemote source={service.details} />
                </div>
            </div>
        </article>
    );
}
