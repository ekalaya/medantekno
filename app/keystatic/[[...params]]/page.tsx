import KeystaticClient from './KeystaticClient';

// For static export (GitHub Pages), Keystatic admin is not available
// This route is only functional in local development
export function generateStaticParams() {
    return [];
}

export default function Page() {
    return <KeystaticClient />;
}
