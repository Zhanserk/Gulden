import React, { useState } from 'react';

const enc = (path) => {
  const cleanPath = path.replace(/[\u00a0\u1680\u180e\u2000-\u200b\u202f\u205f\u3000\ufeff]/g, ' ');
  return cleanPath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
};

const archive = [
  {
    year: "2025–2026",
    type: "groups",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 кіші топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/lit/2025-2026 кіші топ.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 ортаңғы топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/orta/2025-2026 ортаңғы топ.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 ересек топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/big/2025-2026 ересек.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 МА топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/ma/2025-2026 m.pdf" },
        ],
      },
      {
        name: "Әкімшілік жоспарлар 2025-2026",
        items: [
          { label: "Балабақша жылдық жоспар 25-26", file: "/dock/Балабақша жылдык жоспар 25-26.pdf" },
          { label: "Оқу-жұмыс жоспары", file: "/dock/2025-2026 -ож Оқу-жұмыс-жоспары ұ.pdf" },
          { label: "Күн тәртібі 2025-2026 ж.", file: "/dock/Күн тәртібі 2025-2026 ж.pdf" },
          { label: "Әдіскер айлық 25-26", file: "/dock/Әдіскер айлық 25-26 .pdf" },
          { label: "Меңгеруші хаттама 25-26", file: "/dock/меңгеруші хаттама 25-26.pdf" },
          { label: "Пед кеңес 25-26", file: "/dock/пед кеңес 25-26.pdf" },
          { label: "Ата-ана жиналысы хаттамасы 25-26", file: "/dock/Ата-ана жиналысы хаттамасы 25-26.pdf" },
          { label: "Медбике жұмыс жоспары 25-26", file: "/dock/2025-2026 медбике жұмыс жоспары.pdf" },
          { label: "Медбике сауықтыру жоспары 2025", file: "/dock/2025 медбике сауықтыру жоспары.pdf" },
          
        ]
      }
    ],
  },
  {
    year: "2024–2025",
    type: "groups",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2024-2025 кіші топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/lit/2024-2025 кіші топ.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2024-2025 ортаңғы топ жаз сауықтыру .pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/orta/2024-2025 ортаңғы топ.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2024-2025 ересек жаз сауықтыру (2).pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/big/2024-2025 ересек.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2024-2025 МА топ жаз сауықтыру  (2).pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/ma/2024-2025 m.pdf" },
        ],
      },
      {
        name: "Әкімшілік жоспарлар 2024-2025",
        items: [
          { label: "Балабақша жылдық жоспар 24-25", file: "/dock/Балабақша жылдық жоспар 24-25.pdf" },
          { label: "Оқу-жұмыс жоспары", file: "/dock/2024-2025-ож-Оқу-жұмыс-жоспары-ұйымдастырылған-оқу-қызмет-кестесі.pdf" },
          { label: "Күн тәртібі 2024-2025 ж.", file: "/dock/Күн тәртібі 2024-2025 ж.pdf" },
          { label: "Әдіскер айлық 24-25", file: "/dock/Әдіскер айлық 24-25.pdf" },
          { label: "Меңгеруші хаттама 24-25 ож", file: "/dock/меңгеруші хаттама 24-25 ож.pdf" },
          { label: "Пед кеңес 24-25 ож", file: "/dock/пед кеңес 24-25 ож.pdf" },
          { label: "Педагогикалық әдеп жоспары", file: "/dock/Педагогикалық әдеп жоспары 2024-2025.pdf" },
          { label: "Педагогикалық әдеп хаттамалар", file: "/dock/Педагогикалық әдеп хаттамалар 2024-2025.pdf" },
          { label: "ППҚ жоспары", file: "/dock/ППҚ_жоспар_2024-2025.pdf" },
          { label: "Медбике жұмыс жоспары 24-25", file: "/dock/2024-2025 медбике жұмыс жоспары.pdf" },
          { label: "Медбике сауықтыру жұмысы 2024", file: "/dock/2024 медбике сауықтыру жұмысы.pdf" },
          { label: "Мектепке дейінгі ұйымдар үшін оқу-әдістемелік кешендердің болуы туралы мәліметтер(Excel)", file: "/dock/Excel 2024 - 2025.xlsx"},
        ]
      }
    ],
  },
  {
    year: "2023–2024",
    type: "groups",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023_2024_кіші_топ_жаз_сауықтыру_2023_2024.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/lit/2023-2024 кіші топ.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023_2024_ортаңғы_жаз_сауықтыру_Балшекер_.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/orta/2023-2024 ортаңғы топ.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023-2024 ересек топ  жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "dock/big/2023_2024_ересек.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023-2024 МА топ жаз сауықтыру  docx.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/ma/2023-2024 m.pdf" },
        ],
      },
      {
        name: "Әкімшілік жоспарлар 2023-2024",
        items: [
          { label: "Балабақша жылдық жоспар 23-24", file: "/dock/Балабақша жылдық жоспар 23-24.pdf" },
          { label: "Оқу-жұмыс жоспары кестесі", file: "/dock/2023_2024_Ок.pdf" },
          { label: "Күн тәртібі 2023-2024 ж.", file: "/dock/Күн тәртібі 2023-2024 ж.pdf" },
          { label: "Әдіскер айлық 23-24", file: "/dock/Әдіскер айлық 23-24.pdf" },
          { label: "Меңгеруші хаттама 23-24 ож", file: "/dock/меңгеруші хаттама 23-24 ож.pdf" },
          { label: "Пед кеңес 23-24", file: "/dock/пед кеңес 23-24 .pdf" },
          { label: "Ата-ана жиналысы хатамасы 23-24", file: "/dock/Ата-ана жиналысы хатамасы 23-24 01.pdf" },
          { label: "Медбике жұмыс жоспары 23-24", file: "/dock/2023-2024 медбике жұмыс жоспары.pdf" },
          { label: "Мектепке дейінгі ұйымдар үшін оқу-әдістемелік кешендердің болуы туралы мәліметтер (Excel)", file: "/dock/Excel 2023 - 2024.xlsx" },
          { label: "2023 -2024 оқу жылы  тәрбиеленушілер контингентінің құрылымы (Excel)", file: "/dock/Excel 2025 - 2026.xlsx" },
        ]
      }
    ],
  },
  {
    year: "Ресми & Әкімшілік құжаттар",
    type: "official",
    groups: [
      {
        name: "Ресми мемлекеттік құжаттар",
        items: [
          { label: "Балабақша Лицензиясы", file: "/dock/ЛИЦЕНЗИЯ.pdf" },
          { label: "Серіктестік құжаты (ЖШС)", file: "/dock/СЕРІКТЕСТІГ.pdf" },
          { label: "Жоғары білім туралы құжат", file: "/dock/Жозары білім туралы.pdf" },
          { label: "Нысанды БКСЖ коды", file: "/dock/Нысанный БКСЖ бойыиша коды.pdf" },
          { label: "ҚР нормативтік құжаты", file: "/dock/ЕСЛУБЛИКАСЫ.pdf" },
          { label: "Бұйрық ППК", file: "/dock/Бұйрық ППК.pdf" },
          { label: "Қамқоршылық құрамы", file: "/dock/қамқоршылық құрам.pdf" },
        ]
      }
    ]
  }
];

export default function TrustDocuments() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">
            <span className="dot"></span> Құжаттар мен Жоспарлар
          </div>
          <h2>Ресми құжаттар мен оқу-әдістемелік архив</h2>
          <p>
            Балабақшаның оқу жылдары бойынша бекітілген сауықтыру, циклограммалық және әкімшілік жоспарларымен танысыңыз.
          </p>
        </div>

        <div className="year-tabs">
          {archive.map((block, i) => (
            <button
              key={block.year}
              className={`year-tab ${activeYear === i ? 'active' : ''}`}
              onClick={() => setActiveYear(i)}
              type="button"
            >
              {block.year}
            </button>
          ))}
        </div>

        <div className="doc-groups-grid">
          {archive[activeYear].groups.map((group) => (
            <div key={group.name} className="doc-group-card">
              <h4>{group.name}</h4>
              <ul className="doc-link-list">
                {group.items.map((item) => {
                  const isExcel = item.file.endsWith('.xlsx');
                  return (
                    <li key={item.file}>
                      <a
                        href={enc(item.file)}
                        target={isExcel ? undefined : '_blank'}
                        rel="noreferrer"
                        download={isExcel ? true : undefined}
                      >
                        <span className="doc-link-ic">
                          {isExcel ? '📊' : '📄'}
                        </span>
                        <span className="doc-link-text">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}