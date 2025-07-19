import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Skills - June Portfolio',
    description: 'Technical skills and expertise in web development, design, and modern technologies.',
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 