import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type Post = {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        date: string;
        thumbnail?: string;
        layout?: string;
    };
    content: string;
};

/**
 * Get post content from either:
 * - Direct .mdx file: content/blog/slug.mdx
 * - Keystatic folder: content/blog/slug/index.mdoc
 */
function getPostFromPath(slug: string, entryPath: string): Post | null {
    const fullPath = path.join(postsDirectory, entryPath);
    const stat = fs.statSync(fullPath);

    let fileContents: string;
    let actualSlug: string;

    if (stat.isDirectory()) {
        // Keystatic format: folder with index.mdoc
        const mdocPath = path.join(fullPath, 'index.mdoc');
        if (!fs.existsSync(mdocPath)) {
            return null;
        }
        fileContents = fs.readFileSync(mdocPath, 'utf8');
        actualSlug = entryPath; // folder name is the slug
    } else if (entryPath.endsWith('.mdx')) {
        // Traditional MDX format
        fileContents = fs.readFileSync(fullPath, 'utf8');
        actualSlug = entryPath.replace(/\.mdx$/, '');
    } else {
        // Skip non-content files
        return null;
    }

    const { data, content } = matter(fileContents);

    return {
        slug: actualSlug,
        frontmatter: data as Post['frontmatter'],
        content,
    };
}

export function getSortedPostsData(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const entries = fs.readdirSync(postsDirectory);
    const allPostsData: Post[] = [];

    for (const entry of entries) {
        const post = getPostFromPath(entry, entry);
        if (post) {
            allPostsData.push(post);
        }
    }

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
        if (!a.frontmatter.date) return 1;
        if (!b.frontmatter.date) return -1;
        return a.frontmatter.date < b.frontmatter.date ? 1 : -1;
    });
}

export function getAllPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const entries = fs.readdirSync(postsDirectory);
    const slugs: { params: { slug: string } }[] = [];

    for (const entry of entries) {
        const fullPath = path.join(postsDirectory, entry);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Keystatic folder format
            const mdocPath = path.join(fullPath, 'index.mdoc');
            if (fs.existsSync(mdocPath)) {
                slugs.push({ params: { slug: entry } });
            }
        } else if (entry.endsWith('.mdx')) {
            // Traditional MDX format
            slugs.push({ params: { slug: entry.replace(/\.mdx$/, '') } });
        }
    }

    return slugs;
}

export function getPostData(slug: string): Post {
    const folderPath = path.join(postsDirectory, slug, 'index.mdoc');
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

    let fileContents: string;

    // Try Keystatic folder format first
    if (fs.existsSync(folderPath)) {
        fileContents = fs.readFileSync(folderPath, 'utf8');
    } else if (fs.existsSync(mdxPath)) {
        // Fall back to MDX format
        fileContents = fs.readFileSync(mdxPath, 'utf8');
    } else {
        throw new Error(`Post not found: ${slug}`);
    }

    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as Post['frontmatter'],
        content,
    };
}
