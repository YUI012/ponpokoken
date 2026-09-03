export const certifications = [
  {
    slug: "lpic",
    name: "LPIC-1",
    category: "Linux",
    shortest: "最短2週間〜",
    summary:
      "101・102を約2週間で取得した短期合格例あり。Linux経験者ほど短期間で進めやすい。",
    steps: [
      {
        type: "product",
        productId: "lpic-udemy",
        title: "最短対策はこれ"
      }
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
      "10日・約70〜80時間で合格した実例あり。短期なら問題演習とPacket Tracerを早めに回す。",
    steps: [
      {
        type: "product",
        productId: "ccna-udemy",
        title: "最短対策はこれ"
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
      "1週間・約13時間での合格例あり。IT基礎がある人なら問題演習中心で短期合格を狙える。",
    steps: [
      {
        type: "product",
        productId: "clf-udemy",
        title: "最短対策はこれ"
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
      "AWS経験者では1日〜5日の短期合格例あり。基礎があるなら模擬試験中心で仕上げる。",
    steps: [
      {
        type: "product",
        productId: "saa-udemy",
        title: "最短対策はこれ"
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
      "約10時間で合格した実例あり。AWS・AIの基礎がある人ほど短期化しやすい。",
    steps: [
      {
        type: "product",
        productId: "aws-ai-udemy",
        title: "最短対策はこれ"
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
    name: "AI-900 → AI-901",
    category: "Azure / AI",
    shortest: "旧AI-900で約10時間〜",
    summary:
      "旧AI-900では約10時間の合格例あり。現在はAI-901へ移行しているため、現行範囲対応教材で対策する。",
    steps: [
      {
        type: "product",
        productId: "ai900-udemy",
        title: "現行AI-901対策"
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
      "Microsoft資格の前提知識がある人では3時間合格例あり。問題演習中心で短期化しやすい。",
    steps: [
      {
        type: "product",
        productId: "az900-udemy",
        title: "最短対策はこれ"
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
      "3時間・5時間・10時間の短期合格例あり。Microsoft資格経験者は問題演習中心で進めやすい。",
    steps: [
      {
        type: "product",
        productId: "sc900-udemy",
        title: "最短対策はこれ"
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
    shortest: "最短10〜20時間〜",
    summary:
      "約10〜15時間台の合格例あり。短期組ほど教材を増やさず、問題演習と弱点復習を重視している。",
    steps: [
      {
        type: "product",
        productId: "generative-ai-passport-udemy",
        title: "最短対策はこれ"
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
      "101・102をまとめて進めるLinux資格。教材を1本に絞り、両試験を連続して進めたい人向け。",
    steps: [
      {
        type: "product",
        productId: "linuc-udemy",
        title: "101・102をまとめて対策"
      }
    ],
    articleIds: [
      "linuc-udemy",
      "lpic-vs-linuc",
      "linuc-related-lpic"
    ],
    nextCerts: ["lpic", "aws-saa"],
    showCareerAd: false,
    enabled: true
  }
];

export const certBySlug = Object.fromEntries(
  certifications.map((cert) => [cert.slug, cert])
);