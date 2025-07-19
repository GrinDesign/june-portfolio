# Contributing to June's Portfolio Website

このプロジェクトへの貢献を検討していただき、ありがとうございます！このドキュメントでは、プロジェクトへの貢献方法とコーディング規約について説明します。

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18.0.0以上
- npm 9.0.0以上
- Git

### セットアップ手順

1. **リポジトリのクローン**
```bash
git clone https://github.com/your-username/june-portfolio.git
cd june-portfolio
```

2. **依存関係のインストール**
```bash
npm install
```

3. **開発サーバーの起動**
```bash
npm run dev
```

4. **ブラウザで確認**
```
http://localhost:3000
```

## 📋 コーディング規約

### TypeScript

#### 型定義
```typescript
// インターフェースの定義
interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// プロパティの型定義
interface ComponentProps {
    title: string;
    description?: string; // オプショナル
    children: React.ReactNode;
}
```

#### 関数コンポーネント
```typescript
// 基本的な関数コンポーネント
const MyComponent: React.FC<ComponentProps> = ({ title, description, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            {children}
        </div>
    );
};

export default MyComponent;
```

### React/Next.js

#### ファイル構造
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # ホームページ
│   ├── about/
│   │   └── page.tsx       # Aboutページ
│   └── layout.tsx         # ルートレイアウト
├── components/            # 再利用可能なコンポーネント
│   ├── Header.tsx
│   └── Footer.tsx
└── lib/                   # ユーティリティ関数
    └── utils.ts
```

#### コンポーネント命名
- **PascalCase**: `Header.tsx`, `ContactForm.tsx`
- **機能ベース**: コンポーネントの機能を表す名前
- **明確性**: 何をするコンポーネントかが分かる名前

#### フックの使用
```typescript
// カスタムフック
const useContactForm = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        // フォーム送信ロジック
    };

    return { formData, setFormData, handleSubmit };
};
```

### Tailwind CSS

#### クラス名の順序
```typescript
// 推奨: 論理的な順序
<div className="
    // レイアウト
    flex items-center justify-center
    // サイズ
    w-full h-12
    // スペーシング
    px-4 py-2
    // タイポグラフィ
    text-lg font-bold
    // 色
    text-white bg-blue-500
    // 効果
    rounded-lg shadow-md
    // 状態
    hover:bg-blue-600
">
```

#### カスタムクラス
```typescript
// globals.css
@layer components {
    .btn-primary {
        @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
    }
    
    .card {
        @apply bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700;
    }
}
```

### Framer Motion

#### アニメーションの実装
```typescript
// 基本的なアニメーション
<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
>
    {/* コンテンツ */}
</motion.div>

// ホバーアニメーション
<motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
>
    {/* ボタンコンテンツ */}
</motion.button>
```

## 🔧 開発ワークフロー

### 1. ブランチ戦略

```bash
# メインブランチ
main                    # 本番環境
develop                 # 開発環境

# 機能ブランチ
feature/contact-form    # 新機能
bugfix/form-validation  # バグ修正
hotfix/security-patch   # 緊急修正
```

### 2. コミットメッセージ

```
feat: 新しい機能の追加
fix: バグ修正
docs: ドキュメントの更新
style: コードスタイルの変更
refactor: リファクタリング
test: テストの追加・修正
chore: その他の変更
```

#### 例
```bash
git commit -m "feat: add contact form validation"
git commit -m "fix: resolve form field alignment issue"
git commit -m "docs: update README with setup instructions"
```

### 3. プルリクエスト

#### プルリクエストの作成手順
1. 機能ブランチを作成
2. 変更を実装
3. テストを実行
4. プルリクエストを作成
5. レビューを依頼

#### プルリクエストのテンプレート
```markdown
## 📝 変更内容
- 変更の概要
- 実装した機能
- 修正したバグ

## 🧪 テスト
- [ ] 手動テストを実行
- [ ] レスポンシブデザインを確認
- [ ] ブラウザ互換性を確認

## 📸 スクリーンショット
<!-- 変更前後のスクリーンショットを添付 -->

## 🔍 チェックリスト
- [ ] コードがコーディング規約に従っている
- [ ] TypeScriptの型定義が適切
- [ ] アニメーションがスムーズに動作
- [ ] アクセシビリティを考慮している
```

## 🧪 テスト

### 手動テスト
```bash
# 開発サーバー起動
npm run dev

# 以下の項目を確認
1. 全ページが正常に表示される
2. レスポンシブデザインが動作する
3. アニメーションがスムーズに動作する
4. フォームが正常に動作する
5. ダークモードが切り替わる
```

### 自動テスト（将来の実装）
```bash
# ユニットテスト
npm run test

# E2Eテスト
npm run test:e2e

# 型チェック
npm run type-check
```

## 📊 パフォーマンス

### パフォーマンス指標
- **LCP**: < 2.5秒
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: < 500KB

### 最適化のポイント
1. **画像最適化**: Next.js Imageコンポーネントの使用
2. **コード分割**: 動的インポートの活用
3. **アニメーション**: GPUアクセラレーションの活用
4. **キャッシュ**: 適切なキャッシュ戦略

## 🎨 デザインシステム

### カラーパレット
```typescript
// プライマリカラー
primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
}

// セカンダリカラー
secondary: {
    50: '#fdf4ff',
    500: '#a855f7',
    600: '#9333ea',
}

// ダークカラー
dark: {
    300: '#d1d5db',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
}
```

### タイポグラフィ
```typescript
// 見出し
h1: 'text-4xl md:text-6xl font-bold'
h2: 'text-3xl font-bold'
h3: 'text-xl font-semibold'

// 本文
body: 'text-base text-dark-600 dark:text-dark-300'
```

### コンポーネント
```typescript
// カード
.card: 'bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700'

// ボタン
.btn-primary: 'px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-lg hover:shadow-lg transition-all'
```

## 🐛 バグレポート

### バグレポートのテンプレート
```markdown
## 🐛 バグの概要
簡潔なバグの説明

## 🔍 再現手順
1. ページにアクセス
2. 特定の操作を実行
3. エラーが発生

## 📱 環境情報
- OS: macOS 14.0
- ブラウザ: Chrome 120.0
- デバイス: Desktop/Mobile

## 📸 スクリーンショット
<!-- エラーのスクリーンショットを添付 -->

## 💻 期待される動作
正常に動作すべき内容

## 🔧 実際の動作
現在の動作内容
```

## 📚 参考資料

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### ベストプラクティス
- [React Best Practices](https://react.dev/learn)
- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/guides/best-practices)

## 🤝 コミュニティ

### 質問・議論
- GitHub Issues: バグレポートや機能要望
- GitHub Discussions: 一般的な質問や議論
- Pull Requests: コードレビューや改善提案

### 貢献の種類
1. **コード貢献**: 新機能の実装、バグ修正
2. **ドキュメント**: README、コメント、ドキュメントの改善
3. **デザイン**: UI/UXの改善提案
4. **テスト**: テストケースの追加
5. **翻訳**: 多言語対応

---

**このプロジェクトへの貢献を検討していただき、ありがとうございます！一緒に素晴らしいポートフォリオサイトを作りましょう。** 