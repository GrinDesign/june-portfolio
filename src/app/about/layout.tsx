import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About - June | AI Engineer & Consultant',
    description: '津軽の古都・弘前から、心の通ったAIソリューションをお届け。50代からの学び直しで身につけた最新技術と、これまでの人生経験を融合させ、お客様に寄り添うAIパートナーとして活動しています。',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 