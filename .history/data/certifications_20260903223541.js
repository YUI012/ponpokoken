export const certifications = [
  {
    slug: "lpic",
    name: "LPIC-1",
    category: "Linux",
    shortest: "最短2週間〜",
    summary: "Linux資格を短期間で取りたい人向け。教材を増やしすぎず、101→102の順で進む。",
    steps: [
      { type: "product", productId: "lpic101-udemy", title: "まずこれ" },
      { type: "product", productId: "lpic102-udemy", title: "101合格後" }
    ],
    articleIds: ["lpic-2weeks", "lpic101-hours", "lpic102-shortest"],
    nextCerts: ["aws-saa", "ccna"],
    showCareerAd: true,
    enabled: true
  },
  {
    slug: "ccna",
    name: "CCNA",
    category: "Network",
    shortest: "最短10日〜",
    summary: "ネットワーク資格を短期間で取りたい人向け。インプット後は問題演習とPacket Tracerへ。",
    steps: [
      { type: "product", productId: "ccna-udemy", title: "まずこれ" }
    ],
    articleIds: ["ccna-shortest"],
    nextCerts: ["aws-saa"],
    showCareerAd: true,
    enabled: true
  },
  {
    slug: "aws-saa",
    name: "AWS SAA",
    category: "AWS",
    shortest: "最短1〜2週間〜",
    summary: "AWSの定番資格。最短合格を狙うなら教材を1つに絞って問題演習へ。",
    steps: [
      { type: "product", productId: "saa-udemy", title: "まずこれ" }
    ],
    articleIds: ["saa-shortest"],
    nextCerts: [],
    showCareerAd: true,
    enabled: true
  },
  {
    slug: "az-900",
    name: "AZ-900",
    category: "Azure",
    shortest: "最短3時間〜",
    summary: "Azure入門資格を最短で。短時間インプット→模擬問題の順で進む。",
    steps: [
      { type: "product", productId: "az900-udemy", title: "まずこれ" }
    ],
    articleIds: [],
    nextCerts: [],
    showCareerAd: false,
    enabled: true
  },
  {
    slug: "linuc-level1",
    name: "LinuC Level1",
    category: "Linux",
    shortest: "最短1〜2週間〜",
    summary: "LinuC Level1を短期間で取りたい人向け。",
    steps: [],
    articleIds: [],
    nextCerts: ["aws-saa"],
    showCareerAd: false,
    enabled: true
  },
  {
    slug: "aws-clf",
    name: "AWS CLF",
    category: "AWS",
    shortest: "最短1日〜",
    summary: "AWS入門資格を短期間で取りたい人向け。",
    steps: [],
    articleIds: [],
    nextCerts: ["aws-saa"],
    showCareerAd: false,
    enabled: true
  }
];

export const certBySlug = Object.fromEntries(certifications.map((cert) => [cert.slug, cert]));
