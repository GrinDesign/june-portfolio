'use client';

import { motion } from 'framer-motion';
import { Check, DollarSign } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: '🤖',
            title: 'AI活用術パーソナライズサポート',
            subtitle: 'ChatGPTを「あなた専用」にカスタマイズ',
            targetAudience: [
                { icon: '👔', text: '営業担当の方 → 提案書作成・顧客分析サポート' },
                { icon: '🏪', text: '店舗経営の方 → SNS投稿・メニュー考案' },
                { icon: '📊', text: '事務職の方 → 報告書・メール効率化' },
                { icon: '📈', text: '経営者の方 → 分析資料・企画書作成' }
            ],
            features: [
                '個別相談（初回30分無料）',
                'あなたの業務に特化したAI活用法',
                '専用プロンプト集作成',
                '使い方の実践指導',
                '継続サポート（希望者のみ）'
            ],
            price: '5,000円〜20,000円',
            priceNote: '（相談内容・サポート期間により）',
            recommendations: [
                '「AIって便利らしいけど、何から始めればいい？」',
                '「ChatGPTを使ってみたけど、うまくいかない」',
                '「自分の仕事でどう活用できるか知りたい」'
            ]
        },
        {
            icon: '⚙️',
            title: '業務効率化システム開発',
            subtitle: '毎日の「面倒」を「ワンクリック」に',
            examples: [
                { icon: '📊', text: 'データ整理 → Excel自動集計ツール' },
                { icon: '📧', text: 'メール処理 → 定型文自動生成システム' },
                { icon: '📋', text: '在庫管理 → 簡単入力管理システム' },
                { icon: '📈', text: '売上分析 → 数値入力だけでグラフ自動作成' }
            ],
            features: [
                '現状業務の分析・課題発見',
                'カスタムツール開発',
                'シンプルで使いやすいUI設計',
                '導入サポート・使い方指導',
                '運用後のサポート・改善'
            ],
            price: '50,000円〜300,000円',
            priceNote: '（開発規模・複雑さにより）',
            recommendations: [
                '「毎日同じ作業の繰り返しで時間がない」',
                '「Excelでの管理に限界を感じている」',
                '「もっと効率的な方法があるはず」'
            ]
        },
        {
            icon: '🌐',
            title: 'Web・アプリ開発プロジェクト管理',
            subtitle: '技術パートナーと連携し、ご要望を確実に形に',
            roles: [
                { icon: '💼', text: '要件整理 → お客様のニーズを技術要件に翻訳' },
                { icon: '🎨', text: '最適設計 → 予算・期間に応じた現実的提案' },
                { icon: '👥', text: '技術連携 → 信頼できる開発チームとの協力' },
                { icon: '📞', text: '一元管理 → 窓口一本化で安心のプロジェクト進行' }
            ],
            features: [
                '要件定義・仕様策定',
                '技術パートナーとの調整',
                'プロジェクト管理・品質管理',
                'お客様との分かりやすいコミュニケーション',
                '納品後のサポート・相談'
            ],
            price: '100,000円〜500,000円',
            priceNote: '（プロジェクト規模により）',
            recommendations: [
                '「ホームページを作りたいけど、何から相談すればいい？」',
                '「開発会社に頼むのは予算的に厳しい」',
                '「技術的なことが分からないので不安」'
            ]
        }
    ];

    const process = [
        {
            step: '01',
            title: '発見・計画',
            description: 'お困りごとの整理',
            details: [
                '現在の業務フローのヒアリング',
                '課題の本質を一緒に発見',
                '「何から始めればいい？」を明確化',
                'AIで何ができるかの可能性整理'
            ]
        },
        {
            step: '02',
            title: '設計・試作',
            description: '解決策の設計',
            details: [
                'あなたの業務に合わせたカスタム設計',
                '使いやすさ重視の画面設計',
                '小さく始められるプロトタイプ作成',
                '実際に触って確認できる形に'
            ]
        },
        {
            step: '03',
            title: '開発',
            description: 'システムの構築',
            details: [
                '最新技術での効率的な開発',
                'セキュリティを重視した安全な実装',
                '将来の拡張も考慮した設計',
                '途中経過も随時ご確認'
            ]
        },
        {
            step: '04',
            title: 'テスト・運用開始',
            description: '運用開始・サポート',
            details: [
                '実際の業務での動作テスト',
                '使い方のレクチャー・マニュアル作成',
                '運用開始後のフォローアップ',
                '改善要望への継続対応'
            ]
        }
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
                            <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                            あなたの「困った」を「できた！」に変える3つのサポート
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Service Header */}
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="text-4xl">{service.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-base text-dark-700 dark:text-dark-200">
                                            {service.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Target Audience / Examples / Roles */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-dark-900 dark:text-white mb-3">
                                        {service.targetAudience ? '対象者' : service.examples ? '具体例' : '役割'}
                                    </h4>
                                    <div className="space-y-2">
                                        {(service.targetAudience || service.examples || service.roles)?.map((item, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                                <span className="text-lg">{item.icon}</span>
                                                <span className="text-sm text-dark-800 dark:text-dark-100 leading-relaxed font-medium">
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-dark-900 dark:text-white mb-3">提供内容</h4>
                                    <div className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                                                <span className="text-sm text-dark-800 dark:text-dark-100 font-medium">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-lg font-bold text-blue-800 dark:text-blue-300">
                                                {service.price}
                                            </div>
                                            <div className="text-xs text-blue-700 dark:text-blue-400">
                                                {service.priceNote}
                                            </div>
                                        </div>
                                        <DollarSign className="w-6 h-6 text-blue-800 dark:text-blue-300" />
                                    </div>
                                </div>

                                {/* Recommendations */}
                                <div>
                                    <h4 className="font-semibold text-dark-900 dark:text-white mb-3">こんな方におすすめ</h4>
                                    <div className="space-y-2">
                                        {service.recommendations.map((rec, idx) => (
                                            <div key={idx} className="text-sm text-dark-700 dark:text-dark-200 italic">
                                                &ldquo;{rec}&rdquo;
                                            </div>
                                        ))}
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
                        className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-dark-700"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12 text-dark-900 dark:text-white">My Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <span className="text-white font-bold text-xl">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-primary-700 dark:text-primary-300 font-medium mb-3">
                                        {step.description}
                                    </p>
                                    <div className="space-y-2">
                                        {step.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                                <div className="w-2 h-2 bg-accent-600 rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                                                <span className="text-sm text-dark-800 dark:text-dark-100 leading-relaxed text-left font-medium">
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
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
                        <div className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-dark-700">
                            <h2 className="text-3xl font-bold mb-6 text-dark-900 dark:text-white">プロジェクトを始めませんか？</h2>
                            <div className="mb-8 max-w-2xl mx-auto">
                                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                                    お客様のアイデアを一緒に素晴らしいものに<br />
                                    作り上げましょう。<br />
                                    あなたのビジョンを形にするお手伝いをさせていただきます。
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn-primary">お見積りを依頼</button>
                                <button className="btn-outline">ポートフォリオを見る</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage; 