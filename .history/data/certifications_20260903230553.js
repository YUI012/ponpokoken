export const certifications = [
  {
    slug: "lpic",
    name: "LPIC-1",
    category: "Linux",
    shortest: "最短2週間〜",

    summary:
      "LPIC-1は101・102の2試験。短期合格例では約2週間で両方取得したケースがあります。",

    steps: [
      {
        type: "product",
        productId: "lpic101-udemy",
        title: "まず101"
      },
    ],

    articleIds: [
      "lpic-2weeks",
      "lpic-vs-ccna",
      "lpic-vs-saa"
    ],

    nextCerts: ["ccna", "aws-saa"],

    showCareerAd: true,
    enabled: true
  },

  {
    slug: "ccna",
    name: "CCNA",
    category: "Network",
    shortest: "最短10日〜",

    summary:
      "CCNAは10日で合格した短期例あり。基礎を一気に学び、問題演習とシミュレーション対策で仕上げる。",

    steps: [
      {
        type: "product",
        productId: "ccna-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "ccna-10days",
      "ccna-udemy",
      "ccna-simulation"
    ],

    nextCerts: ["aws-saa"],

    showCareerAd: true,
    enabled: true
  },

  {
    slug: "aws-clf",
    name: "AWS CLF",
    category: "AWS",
    shortest: "最短1週間〜",

    summary:
      "AWS入門資格。1週間前後で合格した短期例があり、AWS未経験からクラウド資格を始めたい人向け。",

    steps: [
      {
        type: "product",
        productId: "clf-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "aws-clf-1week",
      "aws-clf-difficulty",
      "aws-clf-skip"
    ],

    nextCerts: ["aws-saa"],

    showCareerAd: false,
    enabled: true
  },

  {
    slug: "aws-saa",
    name: "AWS SAA",
    category: "AWS",
    shortest: "最短1日〜",

    summary:
      "AWS経験者では1日から数日で合格した短期例あり。基礎理解後は模擬試験を中心に仕上げる。",

    steps: [
      {
        type: "product",
        productId: "saa-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "aws-saa-1day",
      "aws-saa-udemy",
      "aws-saa-mock-score"
    ],

    nextCerts: ["aws-ai"],

    showCareerAd: true,
    enabled: true
  },

  {
    slug: "aws-ai",
    name: "AWS AI Practitioner",
    category: "AWS / AI",
    shortest: "最短10時間〜",

    summary:
      "AWSのAI入門資格。短期合格例では10時間前後。Udemyと模擬試験を使って効率よく仕上げる。",

    steps: [
      {
        type: "product",
        productId: "aws-ai-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "aws-ai-10hours",
      "aws-ai-udemy-shortest",
      "aws-ai-mock-score"
    ],

    nextCerts: ["aws-saa"],

    showCareerAd: false,
    enabled: true
  },

  {
    slug: "ai-900",
    name: "AI-900",
    category: "Azure / AI",
    shortest: "最短10時間〜",

    summary:
      "MicrosoftのAI入門資格。AI・機械学習の基礎を短時間で理解して資格取得したい人向け。",

    steps: [
      {
        type: "product",
        productId: "ai900-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "ai900-10hours",
      "ai900-related-az900",
      "ai900-related-sc900"
    ],

    nextCerts: ["az-900", "sc-900"],

    showCareerAd: false,
    enabled: true
  },

  {
    slug: "az-900",
    name: "AZ-900",
    category: "Azure",
    shortest: "最短3時間〜",

    summary:
      "Azure入門資格。IT・クラウド経験者では3時間まで圧縮した短期合格例があります。",

    steps: [
      {
        type: "product",
        productId: "az900-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "az900-3hours",
      "az900-udemy",
      "az900-related-sc900"
    ],

    nextCerts: ["ai-900", "sc-900"],

    showCareerAd: false,
    enabled: true
  },

  {
    slug: "sc-900",
    name: "SC-900",
    category: "Security",
    shortest: "最短3時間〜",

    summary:
      "Microsoftのセキュリティ入門資格。基礎知識がある人なら短時間での取得も狙いやすい。",

    steps: [
      {
        type: "product",
        productId: "sc900-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "sc900-3hours",
      "sc900-related-az900",
      "sc900-related-ai900"
    ],

    nextCerts: ["az-900"],

    showCareerAd: false,
    enabled: true
  },

  {
    slug: "generative-ai-passport",
    name: "生成AIパスポート",
    category: "AI",
    shortest: "最短20時間〜",

    summary:
      "生成AIの基礎・活用・リスクを学ぶ入門資格。20時間前後で合格した短期例を参考に進める。",

    steps: [
      {
        type: "product",
        productId: "generative-ai-passport-udemy",
        title: "まずこれ"
      }
    ],

    articleIds: [
      "generative-ai-passport-20hours",
      "generative-ai-passport-udemy",
      "generative-ai-passport-chatgpt"
    ],

    nextCerts: ["aws-ai", "ai-900"],

    showCareerAd: false,
    enabled: true
  },

  {
    slug: "linuc-level1",
    name: "LinuC Level1",
    category: "Linux",
    shortest: "最短1〜2週間〜",

    summary:
      "LinuC Level1は101・102の2試験。1つの教材で両試験をまとめて進めたい人向け。",

    steps: [
      {
        type: "product",
        productId: "linuc-udemy",
        title: "101・102をまとめて"
      }
    ],

    articleIds: [
      "linuc-udemy",
      "lpic-vs-linuc",
      "lpic-2weeks"
    ],

    nextCerts: ["lpic", "aws-saa"],

    showCareerAd: false,
    enabled: true
  }
];

export const certBySlug = Object.fromEntries(
  certifications.map((cert) => [cert.slug, cert])
);