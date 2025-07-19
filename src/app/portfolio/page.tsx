'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, Code, Palette, Smartphone, Globe } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
}

const PortfolioPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = [
        { id: 'all', name: 'All Projects', icon: Filter },
        { id: 'web', name: 'Web Development', icon: Globe },
        { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
        { id: 'design', name: 'UI/UX Design', icon: Palette },
        { id: 'other', name: 'Other', icon: Code },
    ];

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce platform built with Next.js, featuring advanced search, payment integration, and admin dashboard.',
            category: 'web',
            image: '/api/placeholder/400/300',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration.',
            category: 'web',
            image: '/api/placeholder/400/300',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 3,
            title: 'Fitness Tracking Mobile App',
            description: 'A comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
            category: 'mobile',
            image: '/api/placeholder/400/300',
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
        {
            id: 4,
            title: 'Portfolio Website Design',
            description: 'Modern portfolio website design with smooth animations, responsive layout, and elegant typography.',
            category: 'design',
            image: '/api/placeholder/400/300',
            technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and detailed analytics.',
            category: 'web',
            image: '/api/placeholder/400/300',
            technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
        {
            id: 6,
            title: 'Restaurant Management System',
            description: 'Complete restaurant management system with order tracking, inventory management, and customer analytics.',
            category: 'other',
            image: '/api/placeholder/400/300',
            technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

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
                            My <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            A collection of projects that showcase my skills and passion for creating innovative digital experiences.
                        </p>
                    </motion.div>

                    {/* Filter Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                                        : 'glass-card hover:shadow-lg'
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                <span className="font-medium">{category.name}</span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card overflow-hidden group cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-700 dark:to-dark-600 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 flex items-center justify-center">
                                            <Globe className="w-16 h-16 text-primary-600" />
                                        </div>
                                        {project.featured && (
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                Featured
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(project.liveUrl, '_blank');
                                                }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(project.githubUrl, '_blank');
                                                }}
                                            >
                                                <Github className="w-5 h-5" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-2">
                                            <button
                                                className="flex-1 btn-outline text-sm py-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(project.liveUrl, '_blank');
                                                }}
                                            >
                                                <Eye className="w-4 h-4 mr-1" />
                                                View Live
                                            </button>
                                            <button
                                                className="flex-1 btn-primary text-sm py-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(project.githubUrl, '_blank');
                                                }}
                                            >
                                                <Github className="w-4 h-4 mr-1" />
                                                Code
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-700 dark:to-dark-600 rounded-full flex items-center justify-center">
                                <Filter className="w-12 h-12 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                            <p className="text-dark-600 dark:text-dark-300">
                                Try selecting a different category to see more projects.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-full transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-700 dark:to-dark-600 rounded-lg mb-6 flex items-center justify-center">
                                    <Globe className="w-24 h-24 text-primary-600" />
                                </div>

                                <p className="text-dark-600 dark:text-dark-300 mb-6">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-bold mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <button
                                        className="btn-primary flex items-center"
                                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        View Live
                                    </button>
                                    <button
                                        className="btn-outline flex items-center"
                                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        View Code
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioPage; 