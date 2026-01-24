import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Keystatic Admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body>{children}</body>
        </html>
    );
}
