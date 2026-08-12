import React from 'react';
import Header from './components/Header';
import TrustDocuments from './components/TrustDocuments';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="wrap hero-grid">
          <div className="hero-content">
            <div className="eyebrow"><span className="dot"></span> Сенімді & Қауіпсіз балабақша</div>
            <h1>Балаңыздың күні <span className="crayon">күлкіге</span> толы өтетін мекен</h1>
            <p className="lead">
              «Гүлден » бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және білікті тәрбиешілер. Санитарлық нормаларға толық сай, лицензияланған медициналық қызмет.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Экскурсияға жазылу</a>
              <a href="#about" className="btn btn-ghost">Толығырақ білу</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <b>2017 ж.</b>
                <span>берілген лицензия мен тәжірибе</span>
              </div>
              <div className="stat">
                <b>4 топ</b>
                <span>Кіші, Ортаңғы, Ересек, МА</span>
              </div>
              <div className="stat">
                <b>100%</b>
                <span>санитарлық нормаларға сай</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="blob blob-1"></div>
            <div className="hero-photo">
              <div 
                className="ph" 
                style={{ backgroundImage: "url('/photo%20sadika%20main%20stereett/photo_17_2026-08-12_19-11-11.jpg')" }}
              ></div>
            </div>
            <div className="float-card fc-1"><div className="ic">🧸</div>Жеке шкафшалар</div>
            <div className="float-card fc-2"><div className="ic">☀️</div>Жарық, жылы бөлмелер</div>
            <div className="float-card fc-3"><div className="ic">🌳</div>Ашық ауада серуен</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-single-photo-box">
            <img 
              src="/photo%20sadik%20vnitry/photo_1_2026-08-12_19-11-11.jpg" 
              alt="Гүлден балабақшасы" 
              className="about-single-img" 
            />
            <div className="photo-badge">
              <span className="ic">⭐</span>
              <span>Қауіпсіз & Ыңғайлы орта</span>
            </div>
          </div>

          <div className="about-text">
            <div className="eyebrow"><span className="dot"></span> Біз туралы</div>
            <h2>Әрбір бөлме — балаға арналған кішкентай әлем</h2>
            
            <p className="address-highlight">
              📍 <strong>Мекенжайымыз:</strong> 160900, Қазақстан Республикасы, Түркістан облысы, Сарыағаш ауданы, Сарыағаш қ., Бұхарбай Оспанов көшесі, № 18 үй.
            </p>

            <p>
              «Гүлден » бөбекжай балабақшасында әрбір жас тобына арнайы бөлінген киім шешетін бөлме, ойын бөлмесі, жатын бөлмесі және дәретхана бар — әр топ бір-бірінен оқшауланған.
            </p>
            <p>
              Едендер заманауи жылыту жүйесімен (теплый пол) жабдықталған, терезелер қауіпсіздік құрылғыларымен қамтамасыз етілген. Барлық жиһаз бен жабдық балалардың бой-жас ерекшеліктеріне сай таңдалған.
            </p>

            <div className="about-facts">
              <div className="fact"><span className="ic">🛏️</span><div><strong>Жеке кереует</strong><span>Әр балаға жеке стационарлық кереует</span></div></div>
              <div className="fact"><span className="ic">🧼</span><div><strong>Санитарлық норма</strong><span>Тексеруден толық өтті</span></div></div>
              <div className="fact"><span className="ic">🔥</span><div><strong>Жылы едендер</strong><span>Барлық бөлмелерде орнатылған</span></div></div>
              <div className="fact"><span className="ic">☀️</span><div><strong>Табиғи жарық</strong><span>Күннен қорғау жүйесімен</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGER CARD SECTION */}
      <section className="manager-sec" id="manager">
        <div className="wrap">
          <div className="manager-card">
            <div className="manager-photo-wrapper">
              <img 
                src="/picters/photo_2026-08-11_19-02-59.jpg" 
                alt="Балабақша меңгерушісі" 
              />
              <div className="manager-badge">
                Балабақша меңгерушісі
              </div>
            </div>

            <div className="manager-info">
              <div className="eyebrow"><span className="dot"></span> Меңгеруші сөзі</div>
              <h3>«Әр баланың күлкісі — біздің ең үлкен жетістігіміз»</h3>
              <p className="manager-quote">
                «Гүлден » бөбекжай балабақшасына қош келдіңіздер! Біздің басты мақсатымыз — әрбір бүлдіршінге жылылық, қауіпсіздік және сапалы тәрбие беру.
              </p>
              
              <div className="manager-meta">
                <div className="manager-meta-item">
                  <strong>Қызметі:</strong>
                  <span>Жоғары санатты педагог, балабақша меңгерушісі</span>
                </div>
                <div className="manager-meta-item">
                  <strong>Қабылдау уақыты:</strong>
                  <span>Дүйсенбі - Жұма: 09:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS SECTION */}
      <section className="groups" id="groups">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow"><span className="dot"></span> Топтар мен бөлмелер</div>
            <h2>Балалардың жас ерекшелігіне сай 4 топ</h2>
            <p>Әр топта киім шешетін, ойын-жатын және санитарлық бөлмелер жеке оқшауланып жоспарланған.</p>
          </div>

          <div className="group-cards">
            <div className="gcard border-blue">
              <div className="num">01</div>
              <h3>Кіші топ</h3>
              <p>Бүлдіршіндерге арналған жұмсақ бейімделу ортасы мен қауіпсіз ойын аймағы.</p>
              <ul>
                <li>Жеке киім шкафтары</li>
                <li>Қауіпсіз дамытушы ойыншықтар</li>
                <li>Жарық әрі жылы едендер</li>
              </ul>
            </div>

            <div className="gcard border-pink">
              <div className="num">02</div>
              <h3>Ортаңғы топ</h3>
              <p>Тіл дамыту, шығармашылық және белсенді ойындарға арналған кеңістік.</p>
              <ul>
                <li>Кең ойын мен даму бөлмесі</li>
                <li>Жеке стационарлық кереуеттер</li>
                <li>Сенсорлық дамыту бұрыштары</li>
              </ul>
            </div>

            <div className="gcard border-green">
              <div className="num">03</div>
              <h3>Ересек топ</h3>
              <p>Логикалық ойлауды, әлеуметтік дағдыларды және ұжымдық жұмысты қалыптастыру.</p>
              <ul>
                <li>Мектепке дайындық негіздері</li>
                <li>Жеке гигиена бөлмелері</li>
                <li>Дене шынықтыру бұрышы</li>
              </ul>
            </div>

            <div className="gcard border-yellow">
              <div className="num">04</div>
              <h3>Мектепалды (МА) тобы</h3>
              <p>Мектеп өміріне толыққанды дайындық, жазу, есеп және сауат ашу сабақтары.</p>
              <ul>
                <li>Интерактивті оқыту құралдары</li>
                <li>Дәйекті оқу-жұмыс кестесі</li>
                <li>Тілдік & математикалық база</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="adv-sec">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow"><span className="dot"></span> Неге бізді таңдайды</div>
            <h2>Ата-аналар сенетін басты артықшылықтар</h2>
          </div>
          <div className="adv-grid">
            <div className="adv">
              <div className="ic">🛡️</div>
              <h4>Толық қауіпсіздік</h4>
              <p>Терезелер мен жарықтандыру құралдарында арнайы қоршау жүйелері орнатылған, бейнебақылау бар.</p>
            </div>
            <div className="adv">
              <div className="ic">🎨</div>
              <h4>Дамыту ортасы</h4>
              <p>Әр бөлме ойын, шығармашылық және демалуға арналған арнайы аймақтарға бөлінген.</p>
            </div>
            <div className="adv">
              <div className="ic">👩‍⚕️</div>
              <h4>Медициналық бақылау</h4>
              <p>Арнайы жабдықталған медбике бөлмесі және лицензияланған медициналық бақылау қызметі.</p>
            </div>
            <div className="adv">
              <div className="ic">🧼</div>
              <h4>Тазалық пен гигиена</h4>
              <p>Барлық үй-жайлар мен ойыншықтар санитарлық қағидаларға толық сәйкес дезинфекцияланады.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / DAY SCHEDULE */}
      <section className="day" id="day">
        <div className="wrap day-grid">
          <div className="section-head">
            <div className="eyebrow"><span className="dot"></span> Күн тәртібі</div>
            <h2>Балаңыздың балабақшадағы бір күні</h2>
            <p>Ойын, тамақтану, ұйқы және дамыту сабақтары — барлығы теңгерімді жоспарланған.</p>
          </div>
          <div className="timeline">
            <div className="titem">
              <b className="time">08:00 — 08:30</b>
              <div>
                <strong>Қабылдау & Таңғы жаттығу</strong>
                <p>Балаларды жылы қарсы алу, сергіту жаттығулары</p>
              </div>
            </div>
            <div className="titem">
              <b className="time">08:30 — 09:00</b>
              <div>
                <strong>Таңғы ас</strong>
                <p>Дәмді әрі витаминдерге бай пайдалы таңғы ас</p>
              </div>
            </div>
            <div className="titem">
              <b className="time">09:00 — 11:00</b>
              <div>
                <strong>Ұйымдастырылған оқу қызметі</strong>
                <p>Дамыту сабақтары, тіл дамыту, сурет салу, логика</p>
              </div>
            </div>
            <div className="titem">
              <b className="time">11:00 — 12:30</b>
              <div>
                <strong>Таза ауадағы серуен</strong>
                <p>Ашық алаңдағы белсенді ойындар мен серуендеу</p>
              </div>
            </div>
            <div className="titem">
              <b className="time">12:30 — 15:30</b>
              <div>
                <strong>Түскі ас & Күндізгі ұйқы</strong>
                <p>Толыққанды түскі ас және жеке кереуеттерде демалу</p>
              </div>
            </div>
            <div className="titem">
              <b className="time">15:30 — 18:30</b>
              <div>
                <strong>Бесін ас & Үйге қайту</strong>
                <p>Жеңіл бесін ас, еркін ойындар, ата-аналарды күту</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery" id="gallery">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow"><span className="dot"></span> Галерея</div>
            <h2>Балабақшамыздағы жайлы сәттер</h2>
            <p>Жарық ойын бөлмелері, таза жатын орындары және қауіпсіз аула.</p>
          </div>
          <div className="gal-grid">
            {[1, 2, 5, 6, 9, 10, 11, 12, 14, 16].map((num, i) => (
              <div
                key={num}
                className={`g-item ${i === 0 ? 'g-wide' : ''} ${i === 1 ? 'g-tall' : ''}`}
                style={{ backgroundImage: `url('/photo%20sadik%20vnitry/photo_${num}_2026-08-12_19-11-11.jpg')` }}
              >
                <span>Балабақша ішінде</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST DOCUMENTS SECTION */}
      <TrustDocuments />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
}