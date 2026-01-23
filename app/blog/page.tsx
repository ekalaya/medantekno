import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Blog - Medantekno",
    description: "Latest news and updates from Medantekno.",
};

export default function BlogIndex() {
    const posts = getSortedPostsData();

    return (
        <div className="bg-white dark:bg-black min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Blog</h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Insights, updates, and tech talks from our team.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <article className="bg-gray-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 transition-shadow hover:shadow-lg h-full flex flex-col">
                                {post.frontmatter.thumbnail && (
                                    <div className="aspect-video w-full relative overflow-hidden">
                                        <img
                                            src={post.frontmatter.thumbnail}
                                            alt={post.frontmatter.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        {new Date(post.frontmatter.date).toLocaleDateString()}
                                    </div>
                                    <h2 className="text-xl font-bold font-heading mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {post.frontmatter.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">
                                        {post.frontmatter.description}
                                    </p>
                                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                                        Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
