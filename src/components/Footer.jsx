import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-main">
          <div className="foot-brand">
            <div className="logo" style={{ color: '#fff' }}>
              <div className="logo-mark" style={{ background: '#EC4899' }}>Г</div>
              <div className="logo-text">
                <span className="logo-title">Гүлден </span>
                <span className="logo-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Бөбекжай балабақшасы</span>
              </div>
            </div>
            <p className="foot-desc">
              Балаңыздың жарқын болашағы, сапалы білімі мен қауіпсіз дамуы үшін сенімді мекен.
            </p>
          </div>

          <div className="foot-info">
            <h4>Байланыс & Мекенжай</h4>
            <p>📍 <strong>Мекенжай:</strong> 160900, Түркістан облысы, Сарыағаш ауданы, Сарыағаш қ., Бұхарбай Оспанов көшесі, № 18 үй</p>
            <p>🆔 <strong>БСН:</strong> 170140013890</p>
            <p>🏢 <strong>Ұйым:</strong> «Гүлден KZ» бөбекжай балабақшасы» ЖШС</p>
          </div>

          <div className="foot-links">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#about">Біз туралы</a></li>
              <li><a href="#groups">Топтар</a></li>
              <li><a href="#trust">Құжаттар & Жоспарлар</a></li>
              <li><a href="#contact">Байланыс</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} «Гүлден KZ» бөбекжай балабақшасы. Барлық құқықтар қорғалған.</div>
        </div>
      </div>
    </footer>
  );
}