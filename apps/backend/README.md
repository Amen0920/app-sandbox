# Backend

## 技術スタック

- Framework: Hono
- GraphQL Server: GraphQL Yoga
- GraphQL Schema Builder: Pothos
- ORM: Prisma
- DataBase: PostgreSQL
- Auth: JWT (予定)

## はじめに

### 1. 依存関係のインストール

プロジェクトの依存関係をインストールします
ルートディレクトリで以下のコマンドを実行

```bash
pnpm install
```

### 2. 環境変数の設定

.env.example ファイルを参照して .env ファイルを作成し、必要な環境変数を設定します。特にデータベース接続情報は必須です。

```bash
cp .env.example .env
```

### 3. データベースコンテーナーの生成

データベースコンテーナーを Docker で生成します。

```bash
docker compose up -d
```

### 4. Prisma のセットアップ

Prisma マイグレーションを実行してデータベーススキーマを適用し、Prisma Client を生成します:

```bash
pnpm generate
pnpm prisma:migrate
```

ダミーデータの追加 (オプション):
prisma/seed.ts ファイルに定義されたダミーデータをデータベースに追加できます。

```bash
pnpm prisma:seed
```

### 5. サーバーの起動

サーバーを起動します。

```bash
pnpm run dev
```

サーバーが正常に起動すると、次のアドレスで GraphQL Playground にアクセスできます

http://localhost:3000/graphql
