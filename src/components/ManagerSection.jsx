import React from 'react';

export default function ManagerSection() {
  return (
    <section className="manager-sec" id="manager">
      <div className="wrap manager-grid">
        <div className="manager-photo-container">
          <img 
            src="/picters/photo_2026-08-11_19-02-59.jpg" 
            alt="Балабақша меңгерушісі" 
            className="manager-img"
          />
          <div className="manager-badge">
            <span>Балабақша меңгерушісі</span>
          </div>
        </div>

        <div className="manager-info">
          <div className="eyebrow"><span className="dot"></span> Меңгеруші сөзі</div>
          <h2>«Әр баланың күлкісі — біздің ең үлкен жетістігіміз»</h2>
          <p className="manager-quote">
            «Гүлден » бөбекжай балабақшасына қош келдіңіздер! Біздің басты мақсатымыз — әрбір бүлдіршінге жылылық, қауіпсіздік және сапалы тәрбие беру. Балаларыңыздың жан-жақты дамуы мен денсаулығы үшін барлық жағдай жасалған.
          </p>
          
          <div className="manager-details">
            <div className="m-detail">
              <b>Тәжірибесі мен қызметі:</b>
              <span>Жоғары санатты педагог, балабақша меңгерушісі</span>
            </div>
            <div className="m-detail">
              <b>Ата-аналарды қабылдау уақыты:</b>
              <span>Дүйсенбі - Жұма: 09:00 - 17:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}