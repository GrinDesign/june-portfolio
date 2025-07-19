'use client';

import { motion } from 'framer-motion';

const PortfolioPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
            {/* Hero Section */}
            <section className="section-padding pt-32">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            プロジェクト事例を通じて、私のスキルと情熱をお見せします。
                        </p>
                    </motion.div>

                    {/* Coming Soon Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-2xl p-12 md:p-16 shadow-2xl border border-gray-200 dark:border-dark-700 max-w-2xl text-center">
                            <div className="text-6xl md:text-8xl mb-6">📋</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-900 dark:text-white">
                                Portfolio Coming Soon...
                            </h2>
                            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
                                現在、実績を整理中です。<br />
                                近日中にプロジェクト事例を<br />
                                順次公開予定です。
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-dark-700 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
                                準備中のプロジェクト
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl mb-3">💻</div>
                                    <h4 className="font-semibold mb-2 text-dark-900 dark:text-white">Web開発</h4>
                                    <p className="text-sm text-dark-600 dark:text-dark-300">
                                        Next.js、React、TypeScriptを使用したモダンなWebアプリケーション
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">🎨</div>
                                    <h4 className="font-semibold mb-2 text-dark-900 dark:text-white">UI/UXデザイン</h4>
                                    <p className="text-sm text-dark-600 dark:text-dark-300">
                                        ユーザー体験を重視した直感的なインターフェースデザイン
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">🤖</div>
                                    <h4 className="font-semibold mb-2 text-dark-900 dark:text-white">AI協働開発</h4>
                                    <p className="text-sm text-dark-600 dark:text-dark-300">
                                        AIを活用した効率的な開発プロセスと成果物
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage; 