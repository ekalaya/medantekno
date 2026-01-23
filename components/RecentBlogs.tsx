import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Post } from "@/lib/posts";

export default function RecentBlogs({ posts }: { posts: Post[] }) {
    return (
        <section className="py-24 bg-gray-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Wawasan Terbaru</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Berita terbaru dan artikel teknologi.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-violet-600 dark:text-violet-400 font-bold hover:translate-x-1 transition-transform"
                    >
                        Lihat Semua <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <article className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-700 transition-shadow hover:shadow-xl h-full flex flex-col">
                                {post.frontmatter.thumbnail ? (
                                    <div className="aspect-video w-full relative overflow-hidden">
                                        <img
                                            src={post.frontmatter.thumbnail}
                                            alt={post.frontmatter.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-video w-full bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 flex items-center justify-center">
                                        <span className="text-violet-500 font-bold text-2xl font-heading">MT</span>
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        {new Date(post.frontmatter.date).toLocaleDateString()}
                                    </div>
                                    <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {post.frontmatter.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">
                                        {post.frontmatter.description}
                                    </p>
                                    <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium">
                                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-violet-600 dark:text-violet-400 font-bold"
                    >
                        Lihat Semua <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
