'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', href: '#', icon: Github },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'Email', href: 'mailto:contact@example.com', icon: Mail },
    ];

    const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Skills', href: '/skills' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-gradient-to-r from-dark-900 to-dark-800 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold gradient-text">June</h3>
                            <p className="text-dark-300 max-w-md">
                                Passionate developer creating innovative digital experiences.
                                Let's build something amazing together.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-dark-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <div className="space-y-2 text-dark-300">
                            <p>contact@example.com</p>
                            <p>+1 (555) 123-4567</p>
                            <p>Tokyo, Japan</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-t border-dark-700 mt-12 pt-8 text-center"
                >
                    <p className="text-dark-300 flex items-center justify-center space-x-1">
                        <span>© {currentYear} June. Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>and Next.js</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 