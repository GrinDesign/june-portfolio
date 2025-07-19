import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio - June Portfolio',
    description: 'Explore my portfolio of projects showcasing web development, mobile apps, and design work.',
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 