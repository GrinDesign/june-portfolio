'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface StoryData {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    summary: string;
    content: string;
    color: string;
}

export default function AboutPage() {
    const [selectedStory, setSelectedStory] = useState<StoryData | null>(null);

    // Updated MyStory content with new emoji icons and titles
    const stories: StoryData[] = [
        {
            id: 'technology',
            icon: '💻',
            title: '1. 技術との出会い',
            subtitle: '中学生時代から現在まで',
            summary: '中学生の頃から技術とともに歩み、基礎から学んだからこそ新しい技術も「人のための道具」としてお客様目線で活用できます。',
            content: `中学生の頃から技術とともに歩み、
基礎から学んだからこそ新しい技術も
「人のための道具」としてお客様目線で活用できます。

プログラムを紙に書いてマークシートで入力する時代から、
パソコン通信、インターネット、そして今のAI時代まで。

技術の根本である0と1から学んだ基礎があるからこそ、
『どんなに新しい技術も、結局は人のための道具』
として捉えることができます。`,
            color: 'from-primary-400 to-primary-600'
        },
        {
            id: 'humanity',
            icon: '❤️',
            title: '2. 人間理解の深化',
            subtitle: '介護職での12年間',
            summary: '介護現場12年の経験で学んだ「一人ひとりに寄り添う大切さ」と「分かりやすく伝える重要性」が私のサポートの基盤です。',
            content: `介護現場12年の経験で学んだ
「一人ひとりに寄り添う大切さ」と
「分かりやすく伝える重要性」が
私のサポートの基盤です。

人手不足の中でも、一人ひとりに寄り添うことの大切さ、
そして『分かりやすく伝える』ことの重要性を実感。

この経験から心理学を学び、AIと出会った時
『技術と人の心を結ぶ』可能性を発見しました。`,
            color: 'from-secondary-400 to-secondary-600'
        },
        {
            id: 'promise',
            icon: '🤝',
            title: '3. 寄り添う技術者',
            subtitle: '3つの約束',
            summary: '「難しい技術用語は使いません」「お客様のペースで進めます」津軽の古都・弘前から、お気軽にご相談ください。',
            content: `「難しい技術用語は使いません」
「お客様のペースで進めます」
津軽の古都・弘前から、お気軽にご相談ください。

一人でも多くの方に、AIの便利さと楽しさを
気軽に体験していただきたい。
それが私の願いです。

津軽の古都・弘前から、
あなたの『もっと楽になったらいいな』を
一緒に実現させていただきます。`,
            color: 'from-accent-400 to-accent-600'
        }
    ];

    return (
        <main className="min-h-screen">
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900" />

                {/* Warm Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-pink-50/30 dark:from-orange-900/10 dark:via-transparent dark:to-pink-900/10" />

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl"
                    />
                    {/* Additional warm elements */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-orange-300/10 to-pink-300/10 rounded-full blur-2xl"
                    />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">
                        {/* Left Column - AboutHero */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {/* Illustration */}
                            <div className="flex justify-center xl:justify-start">
                                <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                                    <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="text-center text-pink-600">
                                            <div className="text-4xl lg:text-5xl mb-4">👩‍💼</div>
                                            <p className="text-sm">June Illustration</p>
                                        </div>
                                    </div>
                                    {/* Floating elements */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -top-4 -right-4 w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-lg"
                                    />
                                    <motion.div
                                        animate={{
                                            y: [0, 10, 0],
                                            rotate: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -bottom-4 -left-4 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 rounded-full blur-lg"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide text-center xl:text-left">
                                    <span className="gradient-text">About</span>
                                    <br />
                                    <span className="text-dark-900 dark:text-white font-semibold">June</span>
                                </h1>

                                {/* Core Message */}
                                <div className="space-y-3">
                                    <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 font-medium leading-relaxed text-center xl:text-left">
                                        津軽の古都・弘前から、心の通ったAIソリューションをお届け
                                    </p>
                                    <p className="text-sm md:text-base text-dark-600 dark:text-dark-300 leading-relaxed text-center xl:text-left">
                                        50代からの学び直しで身につけた最新技術と、<br />
                                        これまでの人生経験を融合させ、<br />
                                        お客様に寄り添うAIパートナーとして活動しています。
                                    </p>
                                </div>

                                {/* Key Points */}
                                <div className="space-y-3">
                                    <div className="flex items-start justify-center xl:justify-start">
                                        <p className="text-sm text-dark-600 dark:text-dark-300">
                                            • 豊富な人生経験を活かした、実用的で分かりやすいAI導入支援
                                        </p>
                                    </div>
                                    <div className="flex items-start justify-center xl:justify-start">
                                        <p className="text-sm text-dark-600 dark:text-dark-300">
                                            • 小規模事業者様にも丁寧に対応する親身なサポート
                                        </p>
                                    </div>
                                    <div className="flex items-start justify-center xl:justify-start">
                                        <p className="text-sm text-dark-600 dark:text-dark-300">
                                            • 最新技術と伝統的な価値観のバランスを大切にした提案
                                        </p>
                                    </div>
                                </div>

                                {/* Development Approach */}
                                <div className="space-y-3 pt-4 border-t border-dark-200 dark:border-dark-700">
                                    <h4 className="text-sm font-semibold text-dark-900 dark:text-white text-center xl:text-left">
                                        開発手法について
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed text-center xl:text-left">
                                            最新のAI協働開発手法を活用し、高品質なシステムを効率的に開発しています。
                                        </p>
                                        <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed text-center xl:text-left">
                                            Claude、ChatGPT、Cursorなどの最新AIツールと人間の創造性を組み合わせた
                                            独自のアプローチで、従来比3-5倍の開発効率を実現しています。
                                        </p>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="pt-2 text-center xl:text-left">
                                    <p className="text-xs text-dark-500 dark:text-dark-400 mb-3">
                                        お客様の業務改善のお手伝いをさせていただきます
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-start">
                                        <button className="btn-primary flex items-center justify-center space-x-2 text-sm px-4 py-2">
                                            <span>お気軽にご相談</span>
                                        </button>
                                        <button className="btn-outline flex items-center justify-center space-x-2 text-sm px-4 py-2">
                                            <span>実績を見る</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - MyStory */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Section Header */}
                            <div className="text-center xl:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    <span className="gradient-text">MyStory v2</span>
                                </h2>
                                <p className="text-base text-dark-600 dark:text-dark-300 max-w-2xl mx-auto xl:mx-0">
                                    技術との出会いから現在まで、私の歩みをご紹介します
                                </p>
                            </div>

                            {/* Story Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
                                {stories.map((story, index) => (
                                    <motion.div
                                        key={story.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="glass-card p-4 h-full hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/80 dark:bg-dark-800/80"
                                            onClick={() => setSelectedStory(story)}>
                                            {/* Icon */}
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                <span className="text-lg">{story.icon}</span>
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-base font-bold mb-2 text-dark-900 dark:text-white">
                                                {story.title}
                                            </h3>
                                            <div className="text-sm text-dark-700 dark:text-dark-200 mb-3 leading-relaxed font-medium">
                                                {story.summary.split('。').map((sentence, index) => (
                                                    <p key={index} className="mb-1">
                                                        {sentence.trim()}{sentence.trim() && '。'}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedStory && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedStory(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between p-6 border-b border-dark-200 dark:border-dark-700">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedStory.color} flex items-center justify-center text-white`}>
                                            <span className="text-xl">{selectedStory.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                                                {selectedStory.title}
                                            </h3>
                                            <p className="text-sm text-primary-600 dark:text-primary-400">
                                                {selectedStory.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedStory(null)}
                                        className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-full transition-colors duration-200"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="p-6">
                                    <div className="prose prose-dark dark:prose-invert max-w-none">
                                        {selectedStory.content.split('\n').map((paragraph, index) => (
                                            <p key={index} className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </main>
    );
} 