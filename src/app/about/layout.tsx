import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About - June Portfolio',
    description: 'Learn more about June, a passionate developer with expertise in modern web technologies.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 