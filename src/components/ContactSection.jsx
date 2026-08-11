import React from 'react';

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span> Байланыс</div>
          <h2>Бізге келіңіз немесе хабарласыңыз</h2>
          <p>Балаңызды балабақшаға тіркеу және өтінім қалдыру үшін байланыс мәліметтері:</p>
        </div>

        <div className="contact-grid">
          <div className="ccard">
            <div className="crow">
              <div className="ic">📍</div>
              <div>
                <b>Мекенжай:</b>
                <span>160900, Түркістан облысы, Сарыағаш ауданы, Сарыағаш қ., Бұхарбай Оспанов көшесі, № 18 үй</span>
              </div>
            </div>

            <div className="crow">
              <div className="ic">🆔</div>
              <div>
                <b>БСН (БИН):</b>
                <span>170140013890</span>
              </div>
            </div>

            <div className="crow">
              <div className="ic">🏢</div>
              <div>
                <b>Ресми атауы:</b>
                <span>«Гүлден KZ» бөбекжай балабақшасы» ЖШС</span>
              </div>
            </div>

            <div className="crow">
              <div className="ic">⏰</div>
              <div>
                <b>Жұмыс уақыты:</b>
                <span>Дүйсенбі - Жұма: 08:00 - 18:30</span>
              </div>
            </div>

            <div className="crow">
              <div className="ic">📞</div>
              <div>
                <b>Байланыс телефоны:</b>
                <a href="tel:+77000000000">+7 (700) 000-00-00</a>
              </div>
            </div>
          </div>

          <div className="map-box">
            <div className="map-content">
              <h3>«Гүлден KZ» Балабақшасы</h3>
              <p>📍 Сарыағаш қ., Бұхарбай Оспанов көшесі, № 18 үй</p>
              <div className="map-badge">
                160900, Түркістан облысы, Сарыағаш
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}