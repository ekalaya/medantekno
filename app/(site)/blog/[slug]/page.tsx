import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MarkdocRenderer from "@/components/MarkdocRenderer";

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => path.params);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);
    return {
        title: `${post.frontmatter.title} - Medantekno`,
        description: post.frontmatter.description,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    return (
        <article className="min-h-screen bg-white dark:bg-black py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-tight">
                        {post.frontmatter.title}
                    </h1>
                    <time className="text-gray-500 dark:text-gray-400">
                        {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </header>

                {post.frontmatter.thumbnail && (
                    <div className="mb-12 rounded-2xl overflow-hidden">
                        <img
                            src={post.frontmatter.thumbnail}
                            alt={post.frontmatter.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-blue-600 dark:prose-a:text-blue-400">
                    {post.format === 'mdoc' ? (
                        <MarkdocRenderer content={post.content} />
                    ) : (
                        <MDXRemote source={post.content} />
                    )}
                </div>
            </div>
        </article>
    );
}

