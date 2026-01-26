'use client';

import Markdoc from '@markdoc/markdoc';
import React from 'react';

// Custom React components for rendering Markdoc nodes with proper styling
const components = {
    Heading: ({ level, children }: { level: number; children: React.ReactNode }) => {
        const styles: Record<number, string> = {
            1: 'text-3xl font-bold mt-8 mb-4',
            2: 'text-2xl font-bold mt-6 mb-3',
            3: 'text-xl font-semibold mt-5 mb-2',
            4: 'text-lg font-semibold mt-4 mb-2',
            5: 'text-base font-semibold mt-3 mb-1',
            6: 'text-sm font-semibold mt-3 mb-1',
        };
        const className = styles[level] || styles[2];

        switch (level) {
            case 1: return <h1 className={className}>{children}</h1>;
            case 2: return <h2 className={className}>{children}</h2>;
            case 3: return <h3 className={className}>{children}</h3>;
            case 4: return <h4 className={className}>{children}</h4>;
            case 5: return <h5 className={className}>{children}</h5>;
            case 6: return <h6 className={className}>{children}</h6>;
            default: return <h2 className={className}>{children}</h2>;
        }
    },
    Paragraph: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4 leading-relaxed">{children}</p>
    ),
    Strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-bold">{children}</strong>
    ),
    Em: ({ children }: { children: React.ReactNode }) => (
        <em className="italic">{children}</em>
    ),
    Code: ({ content }: { content: string }) => (
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400">
            {content}
        </code>
    ),
    Fence: ({ children, language }: { children: React.ReactNode; language?: string }) => (
        <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
            <code className="font-mono">{children}</code>
        </pre>
    ),
    List: ({ ordered, children }: { ordered: boolean; children: React.ReactNode }) => {
        const Tag = ordered ? 'ol' : 'ul';
        const className = ordered
            ? 'list-decimal list-inside my-4 space-y-2'
            : 'list-disc list-inside my-4 space-y-2';
        return <Tag className={className}>{children}</Tag>;
    },
    Item: ({ children }: { children: React.ReactNode }) => (
        <li className="leading-relaxed">{children}</li>
    ),
    Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
        <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
            {children}
        </a>
    ),
    Blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-300">
            {children}
        </blockquote>
    ),
    Hr: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,
    Image: ({ src, alt }: { src: string; alt?: string }) => (
        <img src={src} alt={alt || ''} className="rounded-lg my-4 max-w-full" />
    ),
};

// Map Markdoc node types to custom components
const config = {
    nodes: {
        heading: {
            render: 'Heading',
            attributes: {
                level: { type: Number, required: true },
            },
        },
        paragraph: {
            render: 'Paragraph',
        },
        strong: {
            render: 'Strong',
        },
        em: {
            render: 'Em',
        },
        code: {
            render: 'Code',
            attributes: {
                content: { type: String },
            },
        },
        fence: {
            render: 'Fence',
            attributes: {
                language: { type: String },
            },
        },
        list: {
            render: 'List',
            attributes: {
                ordered: { type: Boolean, default: false },
            },
        },
        item: {
            render: 'Item',
        },
        link: {
            render: 'Link',
            attributes: {
                href: { type: String, required: true },
            },
        },
        blockquote: {
            render: 'Blockquote',
        },
        hr: {
            render: 'Hr',
        },
        image: {
            render: 'Image',
            attributes: {
                src: { type: String, required: true },
                alt: { type: String },
            },
        },
    },
};

interface MarkdocRendererProps {
    content: string;
}

export default function MarkdocRenderer({ content }: MarkdocRendererProps) {
    const ast = Markdoc.parse(content);
    const transformed = Markdoc.transform(ast, config);
    const rendered = Markdoc.renderers.react(transformed, React, { components });

    return <div className="markdoc-content">{rendered}</div>;
}
