import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services - June Portfolio',
    description: 'Professional web development services including frontend, backend, and mobile development.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 