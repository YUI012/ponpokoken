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
      {
        type: "product",
        productId: "lpic102-udemy",
        title: "101合格後"
      }
    ],
    articleIds: [
      "lpic-2weeks",
      "lpic-vs-ccna",
      "lpic-vs-saa"
    ],
    nextCerts: ["aws-saa", "ccna"],
    showCareerAd: true,
    enabled: true
  },

  {
    slug: "ccna",
    name: "CCNA",
    category: "Network",
    shortest: "最短10日〜",
    summary:
      "CCNAは10日合格の実例あり。短期間で取るならネットワーク基礎と問題演習を集中して進める。",
    steps: [
      {
        type: "product",
        productId: "ccna-udemy",
        title: "まずこれ"
      }
    ],
    articleIds: [
      "ccna-shortest",
      "ccna-simulation",
      "lpic-vs-ccna"
    ],
    nextCerts: ["aws-saa"],
    showCareerAd: true,
    enabled: true
  },

  {
    slug: "aws-saa",
    name: "AWS SAA",
    category: "AWS",
    shortest: "最短1日〜",
    summary:
      "AWS経験者では1日〜5日の短期合格例あり。AWSの基礎を押さえたら問題演習で仕上げる。",
    steps: [
      {
        type: "product",
        productId: "saa-udemy",
        title: "まずこれ"
      }
    ],
    articleIds: [
      "saa-shortest",
      "saa-mock-score",
      "lpic-vs-saa"
    ],
    nextCerts: [],
    showCareerAd: true,
    enabled: true
  },

  {
    slug: "az-900",
    name: "AZ-900",
    category: "Azure",
    shortest: "最短3時間〜",
    summary:
      "Azure入門資格。IT・クラウド経験者では3時間まで圧縮した合格例があります。",
    steps: [
      {
        type: "product",
        productId: "az900-udemy",
        title: "まずこれ"
      }
    ],
    articleIds: [
      "az900-3hours"
    ],
    nextCerts: ["aws-saa"],
    showCareerAd: false,
    enabled: true
  },

  {
    slug: "linuc-level1",
    name: "LinuC Level1",
    category: "Linux",
    shortest: "最短1〜2週間〜",
    summary:
      "LinuC Level1は101・102の2試験。教材を1つに絞ってLinux基礎からまとめて進める。",
    steps: [
      {
        type: "product",
        productId: "linuc-udemy",
        title: "101・102をまとめて"
      }
    ],
    articleIds: [
      "linuc-udemy",
      "lpic-vs-linuc"
    ],
    nextCerts: ["aws-saa"],
    showCareerAd: false,
    enabled: true
  },

  {
    slug: "aws-clf",
    name: "AWS CLF",
    category: "AWS",
    shortest: "最短1週間〜",
    summary:
      "AWS入門資格。1週間・約13時間などの短期合格例があり、AWS未経験からの入口にも使いやすい。",
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
  }
];

export const certBySlug = Object.fromEntries(
  certifications.map((cert) => [cert.slug, cert])
);