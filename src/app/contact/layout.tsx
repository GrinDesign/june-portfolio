import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact - June Portfolio',
    description: 'Get in touch with June for collaboration opportunities, project inquiries, or just to say hello.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 