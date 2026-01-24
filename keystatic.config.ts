import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        blog: collection({
            label: 'Blog',
            slugField: 'title',
            path: 'content/blog/*/', // Keystatic prefers folders per post for asset co-location
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                date: fields.date({ label: 'Publish Date' }),
                thumbnail: fields.image({
                    label: 'Featured Image',
                    directory: 'public/images/uploads',
                    publicPath: '/images/uploads/'
                }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/uploads',
                        publicPath: '/images/uploads/',
                    },
                }),
            },
        }),
    },
});
