export const RECEIPT_TEMPLATES = [
  {
    "id": "R001",
    "date": "2025-11-28",
    "vendor": "スターバックス コーヒー 渋谷店",
    "category_hint": "飲食",
    "amount_total": 1320,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "BizDev",
    "project": "スポンサー営業",
    "memo": "打合せ（スポンサー候補）",
    "image_text": "コーヒー 2点 1200\n消費税10% 120\n合計 1320\nクレジット",
    "line_items": [
      {
        "label": "飲食",
        "net": 1200,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "会議費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.88,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R002",
    "date": "2025-11-29",
    "vendor": "JR東日本",
    "category_hint": "交通",
    "amount_total": 980,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "制作",
    "project": "撮影会",
    "memo": "電車移動",
    "image_text": "乗車券\n運賃 980\n(10%対象)\n現金",
    "line_items": [
      {
        "label": "交通",
        "net": 891,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "旅費交通費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.93,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R003",
    "date": "2025-11-30",
    "vendor": "Amazon Web Services",
    "category_hint": "SaaS",
    "amount_total": 15432,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "開発",
    "project": "Contestサイト",
    "memo": "クラウド利用料",
    "image_text": "AWS利用料\n小計 14029\n消費税 1403\n合計 15432",
    "line_items": [
      {
        "label": "クラウド",
        "net": 14029,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "通信費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.8,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R004",
    "date": "2025-11-27",
    "vendor": "セブン-イレブン",
    "category_hint": "雑貨",
    "amount_total": 550,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "運営",
    "project": "忘年会",
    "memo": "備品(文房具)",
    "image_text": "ボールペン 2\nノート 1\n小計 500\n税 50\n合計 550",
    "line_items": [
      {
        "label": "文具",
        "net": 500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.86,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R005",
    "date": "2025-11-25",
    "vendor": "ローソン",
    "category_hint": "飲食/軽減",
    "amount_total": 540,
    "tax_included": true,
    "tax_rate": null,
    "payment_method": "employee_cash",
    "department": "制作",
    "project": "撮影会",
    "memo": "差し入れ(おにぎり/お茶)",
    "image_text": "おにぎり 2  (8%)\nお茶 1 (8%)\n小計 500\n税 40\n合計 540",
    "line_items": [
      {
        "label": "食料品(軽減)",
        "net": 500,
        "tax_rate": 0.08
      }
    ],
    "expected": {
      "debit_account": "福利厚生費",
      "credit_account": "現金",
      "tax_category": "課税仕入8%",
      "need_confirmation": true,
      "confirm_question": "社内向けの差し入れ(福利厚生)か、打合せ(会議費)かどっち？",
      "confidence": 0.55,
      "action": "要確認"
    }
  },
  {
    "id": "R006",
    "date": "2025-11-24",
    "vendor": "Google Workspace",
    "category_hint": "SaaS",
    "amount_total": 8160,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "bank_transfer",
    "department": "管理",
    "project": "全社共通",
    "memo": "月額サブスク",
    "image_text": "Google Workspace\n月額 7420\n税 740\n合計 8160",
    "line_items": [
      {
        "label": "SaaS",
        "net": 7420,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "通信費",
      "credit_account": "普通預金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.78,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R007",
    "date": "2025-11-20",
    "vendor": "Adobe",
    "category_hint": "SaaS",
    "amount_total": 6600,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "制作",
    "project": "ショートフィルム",
    "memo": "編集ソフト",
    "image_text": "Adobe\n小計 6000\n税 600\n合計 6600\nカード",
    "line_items": [
      {
        "label": "ソフトウェア",
        "net": 6000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "支払手数料",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "勘定科目は「通信費」「支払手数料」「ソフトウェア」どれで統一？社内ルール確認。",
      "confidence": 0.52,
      "action": "要確認"
    }
  },
  {
    "id": "R008",
    "date": "2025-11-18",
    "vendor": "ホテルニューオオタニ",
    "category_hint": "接待",
    "amount_total": 38500,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_card_personal",
    "department": "BizDev",
    "project": "スポンサー営業",
    "memo": "会食(取引先) 立替",
    "image_text": "ご飲食代\n小計 35000\n税 3500\n合計 38500\n立替",
    "line_items": [
      {
        "label": "会食",
        "net": 35000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "接待交際費",
      "credit_account": "未払金(立替精算)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.84,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R009",
    "date": "2025-11-21",
    "vendor": "郵便局",
    "category_hint": "郵送",
    "amount_total": 140,
    "tax_included": true,
    "tax_rate": null,
    "payment_method": "employee_cash",
    "department": "管理",
    "project": "契約書",
    "memo": "切手",
    "image_text": "切手 140\n合計 140",
    "line_items": [
      {
        "label": "切手",
        "net": 140,
        "tax_rate": null
      }
    ],
    "expected": {
      "debit_account": "通信費",
      "credit_account": "現金",
      "tax_category": "非課税",
      "need_confirmation": false,
      "confidence": 0.9,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R010",
    "date": "2025-11-22",
    "vendor": "タイムズカーシェア",
    "category_hint": "移動",
    "amount_total": 3120,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "制作",
    "project": "撮影会",
    "memo": "機材搬入",
    "image_text": "タイムズ利用料\n小計 2837\n税 283\n合計 3120",
    "line_items": [
      {
        "label": "レンタカー",
        "net": 2837,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "旅費交通費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.81,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R011",
    "date": "2025-11-23",
    "vendor": "Apple Store",
    "category_hint": "備品",
    "amount_total": 198000,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "bank_transfer",
    "department": "開発",
    "project": "全社共通",
    "memo": "MacBook購入",
    "image_text": "MacBook\n小計 180000\n税 18000\n合計 198000",
    "line_items": [
      {
        "label": "PC",
        "net": 180000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "工具器具備品",
      "credit_account": "普通預金",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "固定資産計上/減価償却のルール（少額減価償却の可否）を確認。",
      "confidence": 0.6,
      "action": "固定資産判定"
    }
  },
  {
    "id": "R012",
    "date": "2025-11-19",
    "vendor": "Zoom",
    "category_hint": "SaaS",
    "amount_total": 2200,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "全社",
    "project": "全社共通",
    "memo": "月額",
    "image_text": "Zoom\n小計 2000\n税 200\n合計 2200",
    "line_items": [
      {
        "label": "SaaS",
        "net": 2000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "通信費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confidence": 0.8,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R013",
    "date": "2025-11-30",
    "vendor": "カフェ・ベローチェ",
    "category_hint": "その他",
    "amount_total": 2200,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "BizDev",
    "project": "全社共通",
    "memo": "",
    "image_text": "カフェ・ベローチェ\n小計 2000\n税 200\n合計 2200",
    "line_items": [
      {
        "label": "misc",
        "net": 2000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "会議費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R014",
    "date": "2025-11-05",
    "vendor": "カフェ・ベローチェ",
    "category_hint": "その他",
    "amount_total": 1650,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "制作",
    "project": "全社共通",
    "memo": "",
    "image_text": "カフェ・ベローチェ\n小計 1500\n税 150\n合計 1650",
    "line_items": [
      {
        "label": "misc",
        "net": 1500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "会議費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R015",
    "date": "2025-11-22",
    "vendor": "ヤマト運輸",
    "category_hint": "その他",
    "amount_total": 550,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "開発",
    "project": "撮影会",
    "memo": "",
    "image_text": "ヤマト運輸\n小計 500\n税 50\n合計 550",
    "line_items": [
      {
        "label": "misc",
        "net": 500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "荷造運賃",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R016",
    "date": "2025-11-07",
    "vendor": "ヤマト運輸",
    "category_hint": "その他",
    "amount_total": 550,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "開発",
    "project": "ショートフィルム",
    "memo": "",
    "image_text": "ヤマト運輸\n小計 500\n税 50\n合計 550",
    "line_items": [
      {
        "label": "misc",
        "net": 500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "荷造運賃",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R017",
    "date": "2025-11-11",
    "vendor": "メルカリ",
    "category_hint": "その他",
    "amount_total": 1650,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_card_personal",
    "department": "BizDev",
    "project": "全社共通",
    "memo": "",
    "image_text": "メルカリ\n小計 1500\n税 150\n合計 1650",
    "line_items": [
      {
        "label": "misc",
        "net": 1500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "未払金(立替精算)",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "用途/参加者/証憑の粒度で科目が変わるので確認（雑費に逃げない）。",
      "confidence": 0.58,
      "action": "要確認"
    }
  },
  {
    "id": "R018",
    "date": "2025-11-22",
    "vendor": "メルカリ",
    "category_hint": "その他",
    "amount_total": 8800,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_card_personal",
    "department": "管理",
    "project": "全社共通",
    "memo": "",
    "image_text": "メルカリ\n小計 8000\n税 800\n合計 8800",
    "line_items": [
      {
        "label": "misc",
        "net": 8000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "未払金(立替精算)",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "用途/参加者/証憑の粒度で科目が変わるので確認（雑費に逃げない）。",
      "confidence": 0.58,
      "action": "要確認"
    }
  },
  {
    "id": "R019",
    "date": "2025-11-17",
    "vendor": "ビックカメラ",
    "category_hint": "その他",
    "amount_total": 1650,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "管理",
    "project": "全社共通",
    "memo": "",
    "image_text": "ビックカメラ\n小計 1500\n税 150\n合計 1650",
    "line_items": [
      {
        "label": "misc",
        "net": 1500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R020",
    "date": "2025-11-24",
    "vendor": "ビックカメラ",
    "category_hint": "その他",
    "amount_total": 2200,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "管理",
    "project": "撮影会",
    "memo": "",
    "image_text": "ビックカメラ\n小計 2000\n税 200\n合計 2200",
    "line_items": [
      {
        "label": "misc",
        "net": 2000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R021",
    "date": "2025-11-24",
    "vendor": "ココカラファイン",
    "category_hint": "その他",
    "amount_total": 330,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "運営",
    "project": "全社共通",
    "memo": "",
    "image_text": "ココカラファイン\n小計 300\n税 30\n合計 330",
    "line_items": [
      {
        "label": "misc",
        "net": 300,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R022",
    "date": "2025-11-19",
    "vendor": "ココカラファイン",
    "category_hint": "その他",
    "amount_total": 4950,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "管理",
    "project": "Contestサイト",
    "memo": "",
    "image_text": "ココカラファイン\n小計 4500\n税 450\n合計 4950",
    "line_items": [
      {
        "label": "misc",
        "net": 4500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R023",
    "date": "2025-11-05",
    "vendor": "ドン・キホーテ",
    "category_hint": "その他",
    "amount_total": 1100,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "管理",
    "project": "Contestサイト",
    "memo": "",
    "image_text": "ドン・キホーテ\n小計 1000\n税 100\n合計 1100",
    "line_items": [
      {
        "label": "misc",
        "net": 1000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "用途/参加者/証憑の粒度で科目が変わるので確認（雑費に逃げない）。",
      "confidence": 0.58,
      "action": "要確認"
    }
  },
  {
    "id": "R024",
    "date": "2025-11-27",
    "vendor": "ドン・キホーテ",
    "category_hint": "その他",
    "amount_total": 880,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "開発",
    "project": "スポンサー営業",
    "memo": "",
    "image_text": "ドン・キホーテ\n小計 800\n税 80\n合計 880",
    "line_items": [
      {
        "label": "misc",
        "net": 800,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "用途/参加者/証憑の粒度で科目が変わるので確認（雑費に逃げない）。",
      "confidence": 0.58,
      "action": "要確認"
    }
  },
  {
    "id": "R025",
    "date": "2025-11-07",
    "vendor": "Peatix",
    "category_hint": "その他",
    "amount_total": 550,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "制作",
    "project": "撮影会",
    "memo": "",
    "image_text": "Peatix\n小計 500\n税 50\n合計 550",
    "line_items": [
      {
        "label": "misc",
        "net": 500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "支払手数料",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "用途/参加者/証憑の粒度で科目が変わるので確認（雑費に逃げない）。",
      "confidence": 0.58,
      "action": "要確認"
    }
  },
  {
    "id": "R026",
    "date": "2025-11-05",
    "vendor": "Peatix",
    "category_hint": "その他",
    "amount_total": 4950,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "運営",
    "project": "撮影会",
    "memo": "",
    "image_text": "Peatix\n小計 4500\n税 450\n合計 4950",
    "line_items": [
      {
        "label": "misc",
        "net": 4500,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "支払手数料",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": true,
      "confirm_question": "用途/参加者/証憑の粒度で科目が変わるので確認（雑費に逃げない）。",
      "confidence": 0.58,
      "action": "要確認"
    }
  },
  {
    "id": "R027",
    "date": "2025-11-25",
    "vendor": "stripe",
    "category_hint": "その他",
    "amount_total": 34000,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "開発",
    "project": "ショートフィルム",
    "memo": "",
    "image_text": "stripe\n小計 30909\n税 3091\n合計 34000",
    "line_items": [
      {
        "label": "misc",
        "net": 30909,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "支払手数料",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R028",
    "date": "2025-11-29",
    "vendor": "stripe",
    "category_hint": "その他",
    "amount_total": 5800,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "corporate_card",
    "department": "BizDev",
    "project": "ショートフィルム",
    "memo": "",
    "image_text": "stripe\n小計 5273\n税 527\n合計 5800",
    "line_items": [
      {
        "label": "misc",
        "net": 5273,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "支払手数料",
      "credit_account": "未払金(法人カード)",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R029",
    "date": "2025-11-28",
    "vendor": "コンビニコピー",
    "category_hint": "その他",
    "amount_total": 6600,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "開発",
    "project": "Contestサイト",
    "memo": "",
    "image_text": "コンビニコピー\n小計 6000\n税 600\n合計 6600",
    "line_items": [
      {
        "label": "misc",
        "net": 6000,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  },
  {
    "id": "R030",
    "date": "2025-11-14",
    "vendor": "コンビニコピー",
    "category_hint": "その他",
    "amount_total": 880,
    "tax_included": true,
    "tax_rate": 0.1,
    "payment_method": "employee_cash",
    "department": "管理",
    "project": "全社共通",
    "memo": "",
    "image_text": "コンビニコピー\n小計 800\n税 80\n合計 880",
    "line_items": [
      {
        "label": "misc",
        "net": 800,
        "tax_rate": 0.1
      }
    ],
    "expected": {
      "debit_account": "消耗品費",
      "credit_account": "現金",
      "tax_category": "課税仕入10%",
      "need_confirmation": false,
      "confirm_question": null,
      "confidence": 0.82,
      "action": "そのまま記帳"
    }
  }
];
