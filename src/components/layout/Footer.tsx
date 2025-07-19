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
        { name: 'Email', href: 'mailto:grin.desgin24@gmail.com', icon: Mail },
    ];

    const footerLinks = [
        { name: 'ホーム', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'サービス', href: '/services' },
        { name: 'スキル', href: '/skills' },
        { name: '実績', href: '/portfolio' },
        { name: 'お問い合わせ', href: '/contact' },
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
                            className="space-y-4 mt-8"
                        >
                            <h3 className="text-2xl font-bold gradient-text">June</h3>
                            <p className="text-dark-300 max-w-md">
                                50代からのAI挑戦。だからこそ寄り添えます。
                                毎日の面倒な作業を、AIで楽にしませんか？
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
                        className="space-y-4 mt-8"
                    >
                        <h4 className="text-lg font-semibold">ページ一覧</h4>
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
                        className="space-y-4 mt-8"
                    >
                        <h4 className="text-lg font-semibold">お問い合わせ</h4>
                        <div className="space-y-3 text-dark-300">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-primary-400" />
                                <span>grin.desgin24@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Linkedin className="w-4 h-4 text-primary-400" />
                                <span>LinkedIn（準備中）</span>
                            </div>
                            <div className="pt-2 border-t border-dark-700">
                                <p className="text-sm">
                                    📍 津軽の古都・弘前<br />
                                    🍎 りんごの街から、心の通ったAIソリューション
                                </p>
                                <p className="text-xs mt-2 text-dark-400">
                                    初回のご相談はメールまたはオンライン面談で承っております。<br />
                                    お気軽にお問い合わせください。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-t border-dark-700 mt-12 pt-8 pb-8 text-center"
                >
                    <p className="text-dark-300 flex items-center justify-center space-x-1">
                        <span>© {currentYear} June. Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>, AI collaboration and Next.js</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 