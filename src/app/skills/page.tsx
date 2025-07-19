'use client';

import { motion } from 'framer-motion';

const SkillsPage = () => {
    const skillCategories = [
        {
            icon: '💻',
            title: 'フロントエンド開発',
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'React', level: 65 },
                { name: 'HTML/CSS', level: 75 },
                { name: 'JavaScript', level: 65 },
                { name: 'Tailwind CSS', level: 80 },
                { name: 'TypeScript', level: 35 },
            ],
        },
        {
            icon: '⚙️',
            title: 'バックエンド開発',
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Python', level: 85 },
                { name: 'Node.js', level: 65 },
                { name: 'API Integration', level: 70 },
                { name: 'SQLite', level: 70 },
                { name: 'Supabase', level: 60 },
            ],
        },
        {
            icon: '🎨',
            title: 'デザイン・UI/UX',
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'CANVA', level: 85 },
                { name: 'Photoshop', level: 75 },
                { name: 'Figma', level: 60 },
                { name: 'Prototyping', level: 60 },
                { name: 'Illustrator', level: 45 },
            ],
        },


        {
            icon: '🛠️',
            title: 'ツール・その他',
            color: 'from-yellow-500 to-orange-500',
            skills: [
                { name: 'Claude', level: 95 },
                { name: 'ChatGPT', level: 90 },
                { name: 'Gemini', level: 85 },
                { name: 'Cursor', level: 85 },
                { name: 'Git/GitHub', level: 80 },
                { name: 'Vercel', level: 70 },
            ],
        },
    ];

    const uniqueSkills = [
        {
            icon: '🤝',
            title: 'AI協働開発',
            description: '複数AI（Claude・ChatGPT・Gemini・Cursor）との協働チーム運営により、従来比3-5倍の開発効率を実現',
            color: 'from-primary-500 to-secondary-500'
        },
        {
            icon: '🔍',
            title: 'ニーズ理解・整理力',
            description: '真のニーズに向き合い、本質的な課題を共に整理します',
            color: 'from-secondary-500 to-accent-500'
        },
        {
            icon: '💡',
            title: '効率化実現力',
            description: '1日でポートフォリオサイト稼働など、劇的な効率化を実現',
            color: 'from-accent-500 to-primary-500'
        },
        {
            icon: '🎯',
            title: '丁寧なサポート',
            description: '技術用語を使わず、お客様のペースに合わせた安心できる進め方を重視',
            color: 'from-primary-600 to-secondary-600'
        }
    ];

    const technologies = [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'Python', icon: '🐍' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Tailwind CSS', icon: '🎯' },
        { name: 'HTML/CSS', icon: '🌐' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Figma', icon: '🎨' },
        { name: 'CANVA', icon: '🎭' },
        { name: 'Photoshop', icon: '🖼️' },
        { name: 'Git/GitHub', icon: '📝' },
        { name: 'Vercel', icon: '▲' },
    ];

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
                            <span className="gradient-text">Skills</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            技術的な専門知識と、アイデアを形にするために使用するツールの包括的な概要をご紹介します。
                        </p>
                    </motion.div>

                    {/* Skills Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-dark-700"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                                    <span className="text-2xl">{category.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-6 text-dark-900 dark:text-white">{category.title}</h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-sm text-dark-800 dark:text-dark-100">{skill.name}</span>
                                                <span className="text-primary-600 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                                                    className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Unique Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12 text-dark-900 dark:text-white">独自の価値提供スキル</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {uniqueSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-dark-700 text-center"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <span className="text-2xl">{skill.icon}</span>
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-dark-900 dark:text-white">{skill.title}</h4>
                                    <p className="text-sm text-dark-700 dark:text-dark-200 leading-relaxed">
                                        {skill.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technologies Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-dark-700 mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12 text-dark-900 dark:text-white">使用技術</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                                    className="text-center group"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-700 dark:to-dark-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">{tech.icon}</span>
                                    </div>
                                    <span className="text-sm font-medium text-dark-700 dark:text-dark-300">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 text-center shadow-xl border border-gray-200 dark:border-dark-700">
                            <div className="text-4xl font-bold gradient-text mb-2">3ヶ月</div>
                            <div className="text-dark-600 dark:text-dark-300">AI協働経験</div>
                        </div>
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 text-center shadow-xl border border-gray-200 dark:border-dark-700">
                            <div className="text-4xl font-bold gradient-text mb-2">3倍速</div>
                            <div className="text-dark-600 dark:text-dark-300">開発効率</div>
                        </div>
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 text-center shadow-xl border border-gray-200 dark:border-dark-700">
                            <div className="text-4xl font-bold gradient-text mb-2">1件</div>
                            <div className="text-dark-600 dark:text-dark-300">作成件数</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SkillsPage; 