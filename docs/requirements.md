# ポートフォリオサイト要件定義書

## プロジェクト概要
Figmaで作成したデザインに基づくモダンなポートフォリオサイトの実装
最新のWebトレンドを取り入れた、レスポンシブ対応のプロフェッショナルサイト

## 技術要件
- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS + Framer Motion
- **アイコン**: Lucide React
- **フォント**: Inter (英語) + Noto Sans JP (日本語)
- **アニメーション**: Framer Motion
- **レスポンシブ対応**: 必須 (Mobile First)
- **デプロイ**: Vercel

## ページ構成
1. **ホームページ** (`01Home-01.png`, `01Home-02.png`)
   - ヒーローセクション
   - 自己紹介
   - スキル概要
   - プロジェクトハイライト

2. **Aboutページ** (`02About-01.png`, `02About-02.png`, `02About-03.png`)
   - 詳細な自己紹介
   - 経歴・経験
   - パーソナリティ

3. **Servicesページ** (`03Services-01.png`, `03Services-02.png`, `03Services-03.png`)
   - 提供サービス
   - 専門分野
   - 価格設定

4. **Skillsページ** (`04Skills-01.png`, `04Skills-02.png`, `04Skills-03.png`)
   - 技術スキル
   - ツール・フレームワーク
   - スキルレベル表示

5. **Portfolioページ** (`05Portfolip-01.png`, `05Portfolip-02.png`, `05Portfolip-03.png`)
   - プロジェクト一覧
   - 作品詳細
   - フィルタリング機能

6. **Contactページ** (`06Contact-01.png`, `06Contact-02.png`)
   - お問い合わせフォーム
   - 連絡先情報
   - ソーシャルリンク

## デザイン仕様
### カラーパレット
- **プライマリ**: モダンなグラデーション (#667eea → #764ba2)
- **セカンダリ**: アクセントカラー (#f093fb → #f5576c)
- **背景**: ダークモード対応 (#0f172a / #ffffff)
- **テキスト**: 高コントラスト (#f8fafc / #1e293b)

### フォント
- **英語**: Inter (Google Fonts)
- **日本語**: Noto Sans JP (Google Fonts)
- **見出し**: フォントウェイト 700
- **本文**: フォントウェイト 400

### レイアウト
- **グリッドシステム**: CSS Grid + Flexbox
- **コンテナ**: 最大幅 1200px
- **スペーシング**: Tailwind CSS の標準スペーシング
- **ブレークポイント**: sm(640px), md(768px), lg(1024px), xl(1280px)

## 機能要件
### 共通機能
- レスポンシブナビゲーション
- ダーク/ライトモード切り替え
- スムーズスクロール
- ローディングアニメーション
- SEO最適化

### ページ別機能
- **ホーム**: パララックス効果、CTAボタン
- **About**: タイムライン表示、スキルバー
- **Services**: カードレイアウト、ホバーエフェクト
- **Skills**: プログレスバー、カテゴリフィルター
- **Portfolio**: ギャラリー表示、モーダル詳細
- **Contact**: フォームバリデーション、送信確認

## アニメーション・インタラクション
- **ページ遷移**: Framer Motion によるスムーズトランジション
- **スクロールアニメーション**: Intersection Observer API
- **ホバーエフェクト**: カードの浮き上がり効果
- **ローディング**: スケルトンローダー
- **Micro-interactions**: ボタン、リンクの細かなアニメーション

## 参考画像
- **ホームページ**: `assets/images/01Home-01.png`, `assets/images/01Home-02.png`
- **Aboutページ**: `assets/images/02About-01.png`, `assets/images/02About-02.png`, `assets/images/02About-03.png`
- **Servicesページ**: `assets/images/03Services-01.png`, `assets/images/03Services-02.png`, `assets/images/03Services-03.png`
- **Skillsページ**: `assets/images/04Skills-01.png`, `assets/images/04Skills-02.png`, `assets/images/04Skills-03.png`
- **Portfolioページ**: `assets/images/05Portfolip-01.png`, `assets/images/05Portfolip-02.png`, `assets/images/05Portfolip-03.png`
- **Contactページ**: `assets/images/06Contact-01.png`, `assets/images/06Contact-02.png`

## アイコン・画像
- **アイコン**: Lucide React ライブラリを使用
- **画像**: プレースホルダー画像として Unsplash API または Next.js Image 最適化
- **アバター**: デフォルトアバターまたはプレースホルダー

## パフォーマンス要件
- **Core Web Vitals**: 良好なスコアを維持
- **画像最適化**: Next.js Image コンポーネント使用
- **コード分割**: 動的インポート
- **キャッシュ戦略**: 適切なキャッシュヘッダー設定 