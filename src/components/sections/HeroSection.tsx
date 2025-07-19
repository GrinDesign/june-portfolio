'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, MessageCircle, Award, Sparkles, Zap, Code } from 'lucide-react';

const HeroSection = () => {
    return (
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
                <div className="text-center space-y-12">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 tracking-wide">
                            <span className="gradient-text">June</span>
                            <br />
                            <span className="text-dark-900 dark:text-white font-semibold">AI Engineer & Consultant</span>
                        </h1>

                        {/* Service Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="flex flex-wrap justify-center gap-6 mb-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-center space-y-1 text-dark-700 dark:text-dark-300"
                            >
                                <div className="flex items-center space-x-2">
                                    <Sparkles className="w-5 h-5 text-primary-500" />
                                    <span className="text-sm font-medium">AI導入支援</span>
                                </div>
                                <span className="text-xs text-dark-500 dark:text-dark-400">小規模事業者様にも丁寧に対応</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-center space-y-1 text-dark-700 dark:text-dark-300"
                            >
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-5 h-5 text-secondary-500" />
                                    <span className="text-sm font-medium">業務効率化</span>
                                </div>
                                <span className="text-xs text-dark-500 dark:text-dark-400">現場の声を活かした改善提案</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col items-center space-y-1 text-dark-700 dark:text-dark-300"
                            >
                                <div className="flex items-center space-x-2">
                                    <Code className="w-5 h-5 text-accent-500" />
                                    <span className="text-sm font-medium">システム開発</span>
                                </div>
                                <span className="text-xs text-dark-500 dark:text-dark-400">使いやすさ重視の実用設計</span>
                            </motion.div>
                        </motion.div>

                        {/* Sub-headline and Description Group */}
                        <div className="space-y-4 mb-12">
                            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 max-w-4xl mx-auto font-medium">
                                50代からのAI挑戦。実務視点で寄り添います
                            </p>
                            <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 max-w-4xl mx-auto leading-relaxed">
                                毎日の面倒な作業、もっと楽になりませんか？<br />
                                AIと聞くと難しそうですが、実は意外と身近で便利。<br />
                                50代からAIを学んだ私が、同じ目線でサポートします
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Buttons - Adjusted Hierarchy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                    >
                        <Link href="/portfolio">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                            >
                                <span>実績を見る</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline flex items-center space-x-2 text-base px-6 py-3 opacity-80 hover:opacity-100"
                            >
                                <span>お気軽にご相談</span>
                                <MessageCircle className="w-4 h-4" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center space-x-6 mt-12"
                    >
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full glass-card hover:shadow-lg transition-all duration-300 group"
                            title="GitHub - 技術実績を確認"
                        >
                            <Github className="w-6 h-6 group-hover:text-primary-600 transition-colors" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full glass-card hover:shadow-lg transition-all duration-300 group"
                            title="オンライン相談 - チャットで相談"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:text-primary-600 transition-colors" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full glass-card hover:shadow-lg transition-all duration-300 group"
                            title="実績・評価 - 過去の案件実績"
                        >
                            <Award className="w-6 h-6 group-hover:text-primary-600 transition-colors" />
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-dark-400 dark:border-dark-600 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-3 bg-dark-400 dark:bg-dark-600 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 