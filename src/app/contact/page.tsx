'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'grin.desgin24@gmail.com',
            link: 'mailto:grin.desgin24@gmail.com',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: '弘前市、青森県',
            link: '#',
        },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/your-profile',
            icon: '💼',
        },
        {
            name: 'X (Twitter)',
            url: 'https://x.com/your-profile',
            icon: '🐦',
        },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
            {/* Hero Section - Title & Subtitle */}
            <section className="section-padding pt-32 pb-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-dark-700 mb-12">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                <span className="gradient-text">June's</span> <span className="gradient-text">Contact</span>
                            </h1>
                        </div>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mt-24 mb-24">
                            新しいプロジェクトを始める準備はできていますか？<br />
                            <span className="block mt-2">あなたのアイデアを形にするお手伝いをさせていただきます。</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="section-padding py-4">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-dark-700">
                            <h2 className="text-3xl font-bold mb-6 text-dark-900 dark:text-white text-center">Let's Connect</h2>
                            <p className="text-dark-600 dark:text-dark-300 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
                                新しい機会や興味深いプロジェクトについて聞くことをいつも楽しみにしています。<br />
                                質問、潜在的なコラボレーションの話し合い、または単に挨拶したい場合でも、<br />
                                お気軽にお声かけください！
                            </p>

                            {/* Contact Info Cards */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.link}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 flex items-center space-x-4 group cursor-pointer shadow-lg border border-gray-200 dark:border-dark-600"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-dark-900 dark:text-white">{info.title}</h3>
                                            <p className="text-dark-600 dark:text-dark-300 group-hover:text-primary-600 transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-4 text-dark-900 dark:text-white">Follow June</h3>
                                <div className="flex justify-center space-x-6">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl hover:shadow-lg transition-shadow"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding py-16 pb-32">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-dark-700">
                            <h2 className="text-2xl font-bold mb-8 text-dark-900 dark:text-white text-center">Send Message</h2>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-green-800 dark:text-green-200">
                                        ありがとうございます！メッセージが正常に送信されました。
                                    </span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                    <span className="text-red-800 dark:text-red-200">
                                        エラーが発生しました。もう一度お試しください。
                                    </span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email Fields - Side by Side on Desktop */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-dark-900 dark:text-white">
                                            Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-dark-900 dark:text-white"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-dark-900 dark:text-white">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-dark-900 dark:text-white"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-dark-900 dark:text-white">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-dark-900 dark:text-white"
                                        placeholder="What&apos;s this about?"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-dark-900 dark:text-white">
                                        Message *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-dark-400" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full pl-10 pr-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-dark-900 dark:text-white"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-4">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-2/3 py-4 px-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                                                <span>送信中...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-6 h-6 mr-3" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage; 