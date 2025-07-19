'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Database, Cloud, Zap, Clock, DollarSign } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
            features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility'],
            price: '$2,500',
            duration: '4-6 weeks',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive user interfaces that enhance user experience and drive engagement.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            price: '$1,800',
            duration: '2-3 weeks',
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
            features: ['React Native', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
            price: '$3,200',
            duration: '6-8 weeks',
        },
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Robust server-side applications and APIs built with scalable architectures.',
            features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Integration'],
            price: '$2,800',
            duration: '4-5 weeks',
        },
        {
            icon: Cloud,
            title: 'DevOps & Deployment',
            description: 'Infrastructure setup, CI/CD pipelines, and cloud deployment solutions.',
            features: ['AWS/Azure Setup', 'Docker Containers', 'CI/CD Pipelines', 'Monitoring'],
            price: '$1,500',
            duration: '2-3 weeks',
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Speed up your applications and improve user experience with optimization techniques.',
            features: ['Code Optimization', 'Database Tuning', 'CDN Setup', 'Caching Strategies'],
            price: '$1,200',
            duration: '1-2 weeks',
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Planning',
            description: 'Understanding your requirements and creating a detailed project plan.',
        },
        {
            step: '02',
            title: 'Design & Prototyping',
            description: 'Creating wireframes and prototypes to visualize the final product.',
        },
        {
            step: '03',
            title: 'Development',
            description: 'Building your application with clean, maintainable code.',
        },
        {
            step: '04',
            title: 'Testing & Launch',
            description: 'Thorough testing and deployment to production.',
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
                            My <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            Comprehensive web development solutions tailored to your needs.
                            From concept to deployment, I handle every aspect of your project.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-dark-600 dark:text-dark-300 mb-4">{service.description}</p>

                                <div className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span className="text-sm text-dark-600 dark:text-dark-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-dark-200 dark:border-dark-700">
                                    <div className="flex items-center space-x-2">
                                        <DollarSign className="w-4 h-4 text-primary-600" />
                                        <span className="font-bold text-lg">{service.price}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-4 h-4 text-secondary-600" />
                                        <span className="text-sm text-dark-600 dark:text-dark-300">{service.duration}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Process Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-dark-600 dark:text-dark-300 text-sm">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="text-center mt-16"
                    >
                        <div className="glass-card p-8">
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                            <p className="text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
                                Let's discuss your ideas and create something amazing together.
                                I'm here to help bring your vision to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn-primary">Get a Quote</button>
                                <button className="btn-outline">View Portfolio</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage; 