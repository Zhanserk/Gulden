import React, { useState } from 'react';

/* Файл жолдарындағы бос орындар мен кирилл әріптерін дұрыс кодтау үшін */
const enc = (path) => encodeURI(path);

/* ---------- Оқу-әдістемелік жоспарлар архиві (жылдар бойынша) ----------
   Барлық файл атаулары public/dock қалтасындағы нақты атауларға дәл сай
   тексеріліп түзетілді (2025-08-11). */
const archive = [
  {
    year: "2025–2026",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 кіші топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2025-2026 кіші топ прес,цик.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 ортаңғы топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2025-2026 ортаңғы топ прес,цик.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 ересек топ жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2025-2026 ересек топ прес,цик.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          // Файл атауындағы "МА" — кирилл әріптерімен жазылған, латынша емес
          { label: "Жаз сауықтыру жоспары", file: "/dock/2025-2026 МА топ жаз сауықтыру.pdf" },
        ],
      },
    ],
  },
  {
    year: "2024–2025",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2024-2025 кіші топ жаз сауықтыру.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2024-2025 ортаңғы топ прес,цик.pdf" },
        ],
      },
    ],
  },
  {
    year: "2023–2024",
    groups: [
      {
        name: "Кіші топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023_2024_кіші_топ_жаз_сауықтыру_2023_2024.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2023-2024 кіші топ  преспект,цик.pdf" },
        ],
      },
      {
        name: "Ортаңғы топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023_2024_ортаңғы_жаз_сауықтыру_Балшекер_.pdf" },
        ],
      },
      {
        name: "Ересек топ",
        items: [
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023-2024 ересек топ  жаз сауықтыру.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2023_2024_ересек_топ_преспектива_циклограмма.pdf" },
        ],
      },
      {
        name: "МА тобы",
        items: [
          // Файл атауындағы "МА" — кирилл әріптерімен жазылған, латынша емес
          { label: "Жаз сауықтыру жоспары", file: "/dock/2023-2024 МА топ жаз сауықтыру  docx.pdf" },
          { label: "Преспективті-циклограммалық жоспар", file: "/dock/2023-2024 МА топ прес,цик.pdf" },
        ],
      },
      {
        name: "Жалпы құжаттар",
        items: [
          { label: "Оқу жұмыс жоспарының ұйымдастырылған іс-әрекет кестесі", file: "/dock/2023_2024_ож_Оқу_жұмыс_жоспары_ұйымдастырылған_ic_әрекетінің_кестесі.pdf" },
          { label: "Медбикенің жұмыс жоспары", file: "/dock/2023-2024 медбике жұмыс жоспары.pdf" },
        ],
      },
    ],
  },
];

export default function TrustDocuments() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="trust" id="trust">
      <div className="wrap">
        {/* ---- Оқу-әдістемелік жоспарлар архиві ---- */}
        <div className="section-head">
          <div className="eyebrow">Оқу-әдістемелік жоспарлар</div>
          <h2>Топтар бойынша жылдық жоспарлар</h2>
          <p style={{ marginTop: '8px', color: 'var(--ink-soft)' }}>
            Әр оқу жылына арналған сауықтыру және циклограммалық жоспарлармен танысыңыз.
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
                {group.items.map((item) => (
                  <li key={item.file}>
                    <a href={enc(item.file)} target="_blank" rel="noreferrer">
                      <span className="doc-link-ic">📄</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}