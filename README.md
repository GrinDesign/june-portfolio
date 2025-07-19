# June's Portfolio Website

Next.js 15を使用したモダンなポートフォリオウェブサイトです。Tailwind CSS v4、Framer Motion、TypeScriptを活用し、レスポンシブデザインとアニメーションを実装しています。

## 🚀 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel (推奨)

## 📁 プロジェクト構造

```
june-portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🛠️ セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

### 3. ブラウザで確認

```
http://localhost:3000
```

## 📝 開発履歴と問題解決

### 1. 初期セットアップ

#### 問題点
- Next.js 15の新しいApp Routerの理解
- Tailwind CSS v4の設定
- TypeScriptの型定義

#### 解決方法
- Next.js公式ドキュメントを参照
- Tailwind CSS v4の新しい構文に適応
- TypeScriptのstrict modeを有効化

### 2. レイアウトとスタイリング

#### 問題点
- レスポンシブデザインの実装
- ダークモードの対応
- カスタムカラーの定義

#### 解決方法
```typescript
// tailwind.config.ts
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
        },
        secondary: {
          50: '#fdf4ff',
          500: '#a855f7',
          600: '#9333ea',
        },
        dark: {
          300: '#d1d5db',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  darkMode: 'class',
}
```

### 3. アニメーション実装

#### 問題点
- Framer Motionの学習曲線
- パフォーマンスの最適化
- アニメーションのタイミング

#### 解決方法
```typescript
// 基本的なアニメーション
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* コンテンツ */}
</motion.div>

// ホバーアニメーション
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {/* ボタンコンテンツ */}
</motion.button>
```

### 4. ページ別の実装

#### Skills ページ
**要件**: 実際のスキルレベルに基づく4セクション構成、AI協働開発の強調

**実装内容**:
- **フロントエンド開発**: React(65%), HTML/CSS(75%), JavaScript(65%), Tailwind CSS(80%), TypeScript(35%)
- **バックエンド開発**: Python(85%), Node.js(65%), API Integration(70%), SQLite(70%), Supabase(60%)
- **デザイン・UI/UX**: CANVA(85%), Photoshop(75%), Figma(60%), Prototyping(60%), Illustrator(45%)
- **ツール・その他**: Claude(95%), ChatGPT(90%), Gemini(85%), Cursor(85%), Git/GitHub(80%), Vercel(70%)
- **独自の価値提供スキル**: AI協働開発、ニーズ理解・整理力、効率化実現力、丁寧なサポート
- **統計数字**: 3ヶ月(AI協働経験)、3倍速(開発効率)、1件(作成件数)

#### Contact ページ
**要件**: Phoneセクション削除、Email/Location更新、ソーシャルアイコン追加、タイトルスタイリング改善

**問題点**: フォームフィールドが横並びになってしまう
**解決方法**: 
1. フレーム構造の見直し（3つの独立したセクション）
2. 縦型レイアウトの強制実装
3. 開発サーバーの再起動とブラウザキャッシュクリア

**最終的な構造**:
```typescript
// 3つの独立したセクション
1. Hero Section (タイトル・サブタイトル)
2. Contact Information Section (コンタクト情報)
3. Contact Form Section (メッセージフォーム)
```

#### Portfolio ページ
**要件**: "Coming Soon"メッセージ、シンプルでエレガントなデザイン

**実装内容**:
- プロジェクトグリッドを"Coming Soon"メッセージに置換
- シンプルなプロジェクトカテゴリプレビューセクション
- 他のページと一貫したスタイリング

### 5. レイアウト調整

#### 問題点
- セクション間の間隔が広すぎる
- PC版での見栄えが悪い（正方形すぎる）
- サブタイトルの位置バランス

#### 解決方法
1. **セクション間隔の調整**:
   ```typescript
   // 前: section-padding
   // 後: section-padding py-16 (Contact), py-8 (Contact), py-16 pb-32 (Form)
   ```

2. **幅の拡大**:
   ```typescript
   // 前: max-w-2xl
   // 後: max-w-4xl (Contact & Form sections)
   ```

3. **サブタイトル位置の調整**:
   ```typescript
   // 前: mt-36
   // 後: mt-24 mb-24 (100px前後の間隔)
   ```

### 6. 開発環境の問題

#### 問題点
- 複数の開発サーバーが同時実行
- ポート競合
- ブラウザキャッシュによる古いコンテンツ表示

#### 解決方法
```bash
# 1. 全てのNode.jsプロセスを停止
pkill -f "next dev"

# 2. 単一の開発サーバーを起動
npm run dev

# 3. ブラウザで強制リロード
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#a855f7)
- **Dark**: Gray scale (#111827 - #d1d5db)

### タイポグラフィ
- **Headings**: Bold, gradient text
- **Body**: Regular, dark-600/dark-300
- **Links**: Primary color with hover effects

### コンポーネント
- **Cards**: White background, rounded corners, shadows
- **Buttons**: Gradient background, hover animations
- **Forms**: Clean inputs with focus states

## 📱 レスポンシブデザイン

### ブレークポイント
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### 実装例
```typescript
// グリッドレイアウト
<div className="grid md:grid-cols-2 gap-6">
  {/* モバイル: 縦並び, デスクトップ: 横並び */}
</div>

// テキストサイズ
<h1 className="text-4xl md:text-6xl">
  {/* モバイル: 4xl, デスクトップ: 6xl */}
</h1>
```

## 🚀 デプロイメント

### Vercel (推奨)
1. GitHubリポジトリをVercelに接続
2. 自動デプロイメントの設定
3. カスタムドメインの設定（オプション）

### 環境変数
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start

# リント
npm run lint

# 型チェック
npm run type-check
```

## 📚 参考資料

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 貢献

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 👤 作者

**June**
- Email: grin.desgin24@gmail.com
- Location: 弘前市、青森県
- LinkedIn: [Your LinkedIn Profile]
- X (Twitter): [Your Twitter Profile]

---

**注意**: このドキュメントは開発プロセス中に作成され、実際の問題解決手順を含んでいます。同様のプロジェクトで参考にしてください。
