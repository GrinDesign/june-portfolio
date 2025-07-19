'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code, Heart, Users, X, ChevronRight } from 'lucide-react';

interface StoryData {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    summary: string;
    content: string;
    color: string;
}

const MyStory = () => {
    const [selectedStory, setSelectedStory] = useState<StoryData | null>(null);

    const stories: StoryData[] = [
        {
            id: 'technology',
            icon: <Code className="w-8 h-8" />,
            title: '技術との出会い',
            subtitle: '中学生時代から現在まで',
            summary: 'プログラムを紙に書いてマークシートで入力する時代から、パソコン通信、インターネット、そして今のAI時代まで。',
            content: `中学生の時、父の会社でパソコンと出会いました。
プログラムを紙に書いてマークシートで入力する時代から、
パソコン通信、インターネット、そして今のAI時代まで。

技術の根本である0と1から学んだ基礎があるからこそ、
『どんなに新しい技術も、結局は人のための道具』
として捉えることができます。`,
            color: 'from-primary-400 to-primary-600'
        },
        {
            id: 'humanity',
            icon: <Heart className="w-8 h-8" />,
            title: '人間性重視の転換',
            subtitle: '介護職での12年間',
            summary: '子育てで一旦は介護職に転職しましたが、人と向き合う職場を選んだことで心理学も学び直し。',
            content: `子育てで一旦は介護職に転職しましたが、
人と向き合う職場を選んだことで心理学も学び直し、
この長い技術との付き合いが、今の
『親しみやすいAI活用サポートをしたい』
という思いに繋がりました。

介護現場での12年間は、多くの学びをもたらしました。
人手不足の中でも、一人ひとりに寄り添うことの大切さ、
そして『分かりやすく伝える』ことの重要性を実感。

この経験から心理学を学び、AIと出会った時
『技術と人の心を結ぶ』可能性を発見しました。`,
            color: 'from-secondary-400 to-secondary-600'
        },
        {
            id: 'promise',
            icon: <Users className="w-8 h-8" />,
            title: 'お客様への約束',
            subtitle: '3つの約束',
            summary: '「難しい技術用語は使いません」「お客様のペースに合わせて進めます」「小さな疑問も気軽にご相談ください」',
            content: `「難しい技術用語は使いません」
「お客様のペースに合わせて進めます」
「小さな疑問も気軽にご相談ください」

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
        <section className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 lg:mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        <span className="gradient-text">私の歩み</span>
                    </h2>
                    <p className="text-base text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                        技術との出会いから現在まで、私の歩みをご紹介します
                    </p>
                </motion.div>

                {/* Story Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedStory(story)}>
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {story.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 text-dark-900 dark:text-white">
                                    {story.title}
                                </h3>
                                <p className="text-xs text-primary-600 dark:text-primary-400 mb-3">
                                    {story.subtitle}
                                </p>
                                <p className="text-sm text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                                    {story.summary}
                                </p>

                                {/* CTA Button */}
                                <button className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">
                                    <span className="text-xs font-medium">詳しくはこちら</span>
                                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
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
                                        {selectedStory.icon}
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
    );
};

export default MyStory; 