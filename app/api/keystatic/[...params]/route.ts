import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

// For static export (GitHub Pages), Keystatic API routes are not available
// These only work in local development with a Node.js server
export function generateStaticParams() {
    return [];
}

// Only create route handlers in development
// In production, Next.js will skip this route due to empty generateStaticParams
export const { GET, POST } = makeRouteHandler({
    config,
});
