'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

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
            value: 'hello@june.dev',
            link: 'mailto:hello@june.dev',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+81 90-1234-5678',
            link: 'tel:+819012345678',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Tokyo, Japan',
            link: '#',
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
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                                <p className="text-dark-600 dark:text-dark-300 mb-8">
                                    I'm always excited to hear about new opportunities and interesting projects.
                                    Whether you have a question, want to discuss a potential collaboration,
                                    or just want to say hello, feel free to reach out!
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.link}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="glass-card p-6 flex items-center space-x-4 group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{info.title}</h3>
                                            <p className="text-dark-600 dark:text-dark-300 group-hover:text-primary-600 transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="pt-8"
                            >
                                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                                <div className="flex space-x-4">
                                    {[
                                        { name: 'GitHub', url: '#', icon: '🐙' },
                                        { name: 'LinkedIn', url: '#', icon: '💼' },
                                        { name: 'Twitter', url: '#', icon: '🐦' },
                                        { name: 'Dribbble', url: '#', icon: '🏀' },
                                    ].map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg hover:shadow-lg transition-shadow"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="glass-card p-8"
                        >
                            <h2 className="text-2xl font-bold mb-6">Send Message</h2>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-green-800 dark:text-green-200">
                                        Thank you! Your message has been sent successfully.
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
                                        Something went wrong. Please try again.
                                    </span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                                                className="w-full pl-10 pr-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                                                className="w-full pl-10 pr-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
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
                                            className="w-full pl-10 pr-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-dark-800 dark:to-dark-700">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Find Me Here</h2>
                        <p className="text-dark-600 dark:text-dark-300">
                            Based in Tokyo, Japan - but available for remote work worldwide
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="glass-card h-64 rounded-xl overflow-hidden"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-dark-600 dark:to-dark-500 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                                <p className="text-lg font-medium">Tokyo, Japan</p>
                                <p className="text-dark-600 dark:text-dark-300">
                                    Available for remote collaboration worldwide
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage; 