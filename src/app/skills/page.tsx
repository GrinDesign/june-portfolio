'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Smartphone, Cloud, Zap } from 'lucide-react';

const SkillsPage = () => {
    const skillCategories = [
        {
            icon: Code,
            title: 'Frontend Development',
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'TypeScript', level: 88 },
                { name: 'JavaScript', level: 92 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 90 },
            ],
        },
        {
            icon: Database,
            title: 'Backend Development',
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express.js', level: 88 },
                { name: 'Python', level: 80 },
                { name: 'PostgreSQL', level: 82 },
                { name: 'MongoDB', level: 78 },
                { name: 'GraphQL', level: 75 },
            ],
        },
        {
            icon: Palette,
            title: 'Design & UI/UX',
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'Figma', level: 85 },
                { name: 'Adobe XD', level: 80 },
                { name: 'Photoshop', level: 75 },
                { name: 'Illustrator', level: 70 },
                { name: 'Prototyping', level: 88 },
                { name: 'Design Systems', level: 82 },
            ],
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            color: 'from-orange-500 to-red-500',
            skills: [
                { name: 'React Native', level: 80 },
                { name: 'Flutter', level: 75 },
                { name: 'iOS Development', level: 70 },
                { name: 'Android Development', level: 72 },
                { name: 'Mobile UI/UX', level: 85 },
                { name: 'App Store Optimization', level: 78 },
            ],
        },
        {
            icon: Cloud,
            title: 'DevOps & Cloud',
            color: 'from-indigo-500 to-blue-500',
            skills: [
                { name: 'AWS', level: 80 },
                { name: 'Docker', level: 85 },
                { name: 'Kubernetes', level: 70 },
                { name: 'CI/CD', level: 82 },
                { name: 'Git', level: 90 },
                { name: 'Linux', level: 75 },
            ],
        },
        {
            icon: Zap,
            title: 'Tools & Others',
            color: 'from-yellow-500 to-orange-500',
            skills: [
                { name: 'VS Code', level: 95 },
                { name: 'GitHub', level: 90 },
                { name: 'Postman', level: 85 },
                { name: 'Jira', level: 80 },
                { name: 'Figma', level: 85 },
                { name: 'Notion', level: 88 },
            ],
        },
    ];

    const technologies = [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Git', icon: '📝' },
        { name: 'Tailwind', icon: '🎯' },
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
                            My <span className="gradient-text">Skills</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
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
                                className="glass-card p-6"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                                    <category.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-sm">{skill.name}</span>
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

                    {/* Technologies Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="glass-card p-8 mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">Technologies I Work With</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
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
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="glass-card p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                            <div className="text-dark-600 dark:text-dark-300">Years Experience</div>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-dark-600 dark:text-dark-300">Projects Completed</div>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                            <div className="text-dark-600 dark:text-dark-300">Technologies Mastered</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SkillsPage; 