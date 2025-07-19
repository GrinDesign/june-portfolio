'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl">
                                {/* Placeholder for illustration - replace with actual image */}
                                <div className="text-center text-pink-600">
                                    <div className="text-5xl lg:text-6xl mb-4">👩‍💼</div>
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
                                className="absolute -top-4 -right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-lg"
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
                                className="absolute -bottom-4 -left-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 rounded-full blur-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide">
                                <span className="gradient-text">About</span>
                                <br />
                                <span className="text-dark-900 dark:text-white font-semibold">June</span>
                            </h1>

                            {/* Core Message */}
                            <div className="space-y-3">
                                <p className="text-base md:text-lg text-dark-600 dark:text-dark-300 font-medium leading-relaxed">
                                    津軽の古都・弘前から、心の通ったAIソリューションをお届け
                                </p>
                                <p className="text-sm md:text-base text-dark-600 dark:text-dark-300 leading-relaxed">
                                    50代からの学び直しで身につけた最新技術と、<br />
                                    これまでの人生経験を融合させ、<br />
                                    お客様に寄り添うAIパートナーとして活動しています。
                                </p>
                            </div>
                        </motion.div>

                        {/* Key Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-3"
                        >
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-dark-600 dark:text-dark-300">
                                    豊富な人生経験を活かした、実用的で分かりやすいAI導入支援
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-dark-600 dark:text-dark-300">
                                    小規模事業者様にも丁寧に対応する親身なサポート
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-dark-600 dark:text-dark-300">
                                    最新技術と伝統的な価値観のバランスを大切にした提案
                                </p>
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="pt-2"
                        >
                            <p className="text-xs text-dark-500 dark:text-dark-400 mb-3">
                                お客様の業務改善のお手伝いをさせていただきます
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="btn-primary flex items-center justify-center space-x-2 text-sm px-4 py-2">
                                    <span>お気軽にご相談</span>
                                </button>
                                <button className="btn-outline flex items-center justify-center space-x-2 text-sm px-4 py-2">
                                    <span>実績を見る</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero; 