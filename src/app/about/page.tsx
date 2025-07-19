'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone, Download } from 'lucide-react';

const AboutPage = () => {
    const skills = [
        { name: 'Frontend Development', level: 90 },
        { name: 'Backend Development', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Mobile Development', level: 75 },
        { name: 'DevOps', level: 70 },
    ];

    const experience = [
        {
            year: '2023 - Present',
            title: 'Senior Full Stack Developer',
            company: 'Tech Innovations Inc.',
            description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.',
        },
        {
            year: '2021 - 2023',
            title: 'Frontend Developer',
            company: 'Digital Solutions Co.',
            description: 'Developed responsive web applications and improved user experience across multiple projects.',
        },
        {
            year: '2019 - 2021',
            title: 'Junior Developer',
            company: 'Startup Studio',
            description: 'Built MVP applications and learned modern development practices in a fast-paced environment.',
        },
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
                            <span className="gradient-text">About</span> Me
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            Passionate developer with a love for creating innovative digital experiences.
                            I believe in the power of technology to transform ideas into reality.
                        </p>
                    </motion.div>

                    {/* Profile Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-1"
                        >
                            <div className="glass-card p-8 text-center">
                                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                                    <User className="w-24 h-24 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">June</h3>
                                <p className="text-dark-600 dark:text-dark-300 mb-6">
                                    Full Stack Developer & UI/UX Designer
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center justify-center space-x-2">
                                        <MapPin className="w-4 h-4 text-primary-600" />
                                        <span>Tokyo, Japan</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <Calendar className="w-4 h-4 text-primary-600" />
                                        <span>5+ years experience</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <Mail className="w-4 h-4 text-primary-600" />
                                        <span>contact@example.com</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <Phone className="w-4 h-4 text-primary-600" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                </div>
                                <button className="btn-primary mt-6 w-full flex items-center justify-center space-x-2">
                                    <Download className="w-4 h-4" />
                                    <span>Download CV</span>
                                </button>
                            </div>
                        </motion.div>

                        {/* About Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="glass-card p-8">
                                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                                <p className="text-dark-600 dark:text-dark-300 mb-4">
                                    I started my journey in web development with a simple curiosity about how websites work.
                                    What began as a hobby quickly turned into a passion, and now I'm fortunate enough to
                                    turn that passion into a career.
                                </p>
                                <p className="text-dark-600 dark:text-dark-300 mb-4">
                                    With over 5 years of experience in the industry, I've worked on projects ranging from
                                    small business websites to large-scale enterprise applications. I believe in writing
                                    clean, maintainable code and creating user experiences that are both beautiful and functional.
                                </p>
                                <p className="text-dark-600 dark:text-dark-300">
                                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                                    projects, or sharing knowledge with the developer community.
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="glass-card p-8">
                                <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
                                <div className="space-y-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-primary-600">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                                    className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                                    className="flex flex-col md:flex-row gap-6"
                                >
                                    <div className="md:w-1/4">
                                        <div className="text-primary-600 font-semibold">{exp.year}</div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                                        <p className="text-secondary-600 mb-2">{exp.company}</p>
                                        <p className="text-dark-600 dark:text-dark-300">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage; 