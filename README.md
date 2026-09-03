# ponpokoken.com 保守しやすい版

## 設計

ページを資格ごとに手書きしません。

- `data/certifications.js` : 資格マスター
- `data/products.js` : 教材・Impactリンクのマスター
- `data/articles.js` : note記事マスター
- `app/[slug]/page.js` : 全資格共通テンプレート
- `app/page.js` : 資格マスターからトップ一覧を自動生成

## 新しい資格を追加する方法

基本的に `data/certifications.js` に1件追加するだけです。
教材を使う場合は `data/products.js` に教材を追加し、`productId` で参照します。
note記事を使う場合は `data/articles.js` に追加し、`articleIds` で参照します。

資格を追加すると、

1. トップページに自動表示
2. `/{slug}` の詳細ページが自動生成
3. 共通デザインで表示

されます。

## リンク変更が楽な理由

例えばAWS SAAのUdemyリンクを複数資格ページで使っていても、`data/products.js` の `saa-udemy` を1か所変えるだけで全ページに反映されます。

## ローカル実行

```bash
npm install
npm run dev
```

`http://localhost:3000`

## 最初に変更する場所

`data/products.js` の以下をImpactで発行した実URLに変更してください。

- `YOUR_IMPACT_UDEMY_LINK_LPIC101`
- `YOUR_IMPACT_UDEMY_LINK_LPIC102`
- `YOUR_IMPACT_UDEMY_LINK_SAA`
- `YOUR_IMPACT_UDEMY_LINK_CCNA`
- `YOUR_IMPACT_UDEMY_LINK_AZ900`

`data/articles.js` のnote URLも実際の記事URLに変更してください。

## 転職アフィリエイト

自作CTAにアフィリエイトURLを入れる前提ではなく、`components/CareerAd.js` の広告枠へ、各ASP・広告主が認める公式広告コードを入れる設計です。

## 将来30資格を超えたら

今のデータ構造をそのままGoogle Sheets / CMS / Supabaseへ移せます。画面テンプレートは変更しなくて済みます。
