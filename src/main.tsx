import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

type Phase = {
  name: string
  label: string
  className: string
  text: string
}

const image = {
  hero: `${import.meta.env.BASE_URL}images/moons-hero.jpg`,
  lunar: `${import.meta.env.BASE_URL}images/moon-lunar.jpg`,
  phases: `${import.meta.env.BASE_URL}images/moon-phases.jpg`,
  earth: `${import.meta.env.BASE_URL}images/earth-moon.jpg`,
  gallery: `${import.meta.env.BASE_URL}images/solar-gallery.jpg`,
}

const featured = [
  { system: 'Saturno', moon: 'Mimas · Encélado · Titã', blurb: 'Saturno tem mais luas do que qualquer outro planeta.' },
  { system: 'Urano', moon: 'Titânia · Oberon · Miranda', blurb: 'As luas de Urano recebem nomes da grande literatura.' },
  { system: 'Netuno', moon: 'Tritão · Nereida', blurb: 'Netuno tem 16 luas conhecidas.' },
  { system: 'Plutão', moon: 'Caronte · Hidra · Nix', blurb: 'Plutão tem cinco luas.' },
  { system: 'Terra', moon: 'A Lua', blurb: 'A Lua torna a Terra mais habitável ao moderar sua oscilação.' },
  { system: 'Marte', moon: 'Fobos · Deimos', blurb: 'Marte tem duas pequenas luas: Fobos e Deimos.' },
  { system: 'Júpiter', moon: 'Io · Europa · Ganimedes', blurb: 'Dezenas de luas orbitam este mundo gigante.' },
]

const moonSystems = [
  { planet: 'Terra', count: '1 Lua', moons: 'A Lua', description: 'A Lua torna a Terra mais habitável ao moderar sua oscilação.', url: 'https://science.nasa.gov/moon/' },
  { planet: 'Marte', count: '2 luas', moons: 'Fobos · Deimos', description: 'Duas companheiras pequenas e irregulares cruzam o céu marciano.', url: 'https://science.nasa.gov/mars/moons/' },
  { planet: 'Júpiter', count: 'Dezenas', moons: 'Io · Europa · Ganimedes · Calisto', description: 'Dezenas de luas orbitam este mundo gigante.', url: 'https://science.nasa.gov/jupiter/jupiter-moons/' },
  { planet: 'Saturno', count: 'Mais luas', moons: 'Titã · Encélado · Mimas · Jápeto', description: 'Saturno tem mais luas do que qualquer outro planeta.', url: 'https://science.nasa.gov/saturn/moons/' },
  { planet: 'Urano', count: 'Literatura', moons: 'Ariel · Umbriel · Titânia · Miranda', description: 'As luas de Urano recebem nomes da grande literatura.', url: 'https://science.nasa.gov/uranus/moons/' },
  { planet: 'Netuno', count: '16 luas', moons: 'Tritão · Nereida', description: 'Netuno tem 16 luas conhecidas.', url: 'https://science.nasa.gov/neptune/moons/' },
  { planet: 'Plutão', count: '5 luas', moons: 'Caronte · Nix · Hidra', description: 'Plutão tem cinco luas.', url: 'https://science.nasa.gov/dwarf-planets/pluto/moons/' },
]

const phases: Phase[] = [
  { name: 'Nova', label: '01', className: 'new', text: 'A Lua fica entre a Terra e o Sol e sua face iluminada fica voltada para longe de nós.' },
  { name: 'Crescente', label: '02', className: 'crescent', text: 'Um fino arco de luz aparece quando começamos a ver uma parte da face iluminada.' },
  { name: 'Cheia', label: '03', className: 'full', text: 'A face voltada à Terra recebe luz solar direta e parece completamente iluminada.' },
  { name: 'Minguante', label: '04', className: 'waning', text: 'A luz visível diminui gradualmente até o ciclo recomeçar.' },
]

const news = [
  { type: 'LEITURA DE 24 MIN', title: 'O que o Webb está ensinando sobre nosso Sistema Solar', tag: 'ANÁLISE', url: 'https://www.nasa.gov/podcasts/curious-universe/what-webb-is-teaching-us-about-our-solar-system/' },
  { type: 'LEITURA DE 7 MIN', title: 'Previsão para Titã: parcialmente nublado, com chuvas ocasionais de metano', tag: 'ARTIGO', url: 'https://science.nasa.gov/missions/webb/webbs-titan-forecast-partly-cloudy-with-occasional-methane-showers/' },
  { type: 'LEITURA DE 3 MIN', title: 'Instrumento da NASA para observar a Lua terá uma nova chance de operar no ambiente lunar', tag: 'ARTIGO', url: 'https://www.nasa.gov/centers-and-facilities/kennedy/nasa-moon-observing-instrument-to-get-another-shot-at-lunar-ops/' },
  { type: 'LEITURA DE 2 MIN', title: 'Escudo de poeira da NASA repele com sucesso regolito lunar na Lua', tag: 'ARTIGO ILUSTRADO', url: 'https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={`arrow ${diagonal ? 'diagonal' : ''}`} aria-hidden="true">↗</span>
}

function OrbitMark() {
  return (
    <svg className="orbit-mark" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="50" cy="50" rx="43" ry="17" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-35 50 50)" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      <circle cx="83" cy="35" r="3" fill="currentColor" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(2)
  const [scrolled, setScrolled] = useState(false)
  const phase = phases[phaseIndex]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
        <a className="brand" href="#inicio" aria-label="Lunarium, início" onClick={() => scrollTo('inicio')}>
          <OrbitMark />
          <span>Lunarium</span>
        </a>
        <div className="edition-chip"><span className="pulse-dot" /> EDIÇÃO 01 · 2026</div>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
          <button onClick={() => scrollTo('mapa')}>Mapa lunar</button>
          <button onClick={() => scrollTo('fases')}>Fases</button>
          <button onClick={() => scrollTo('noticias')}>Radar</button>
          <a href="https://science.nasa.gov/solar-system/moons/" target="_blank" rel="noreferrer">Fonte NASA <Arrow /></a>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> UM GUIA DE CAMPO PARA O CÉU PRÓXIMO</p>
            <h1>As luas<br /><em>contam</em><br />histórias.</h1>
            <p className="hero-intro">Corpos formados naturalmente que orbitam planetas são chamados de luas, ou satélites planetários. São centenas — cada uma com sua própria superfície, ritmo e mistério.</p>
            <div className="hero-actions">
              <button className="round-button" onClick={() => scrollTo('mapa')}>Explorar <Arrow diagonal /></button>
              <p>ROLAR PARA DESCOBRIR<br /><span>↓</span></p>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-image-wrap"><img src={image.hero} alt="Montagem de luas orbitando um planeta" /></div>
          </div>
          <a className="hero-credit" href="https://science.nasa.gov/solar-system/moons/" target="_blank" rel="noreferrer">Imagem pública NASA <Arrow /></a>
        </section>

        <section className="featured" aria-labelledby="destaques-title">
          <div className="section-meta"><span>02</span><p id="destaques-title">DESTAQUES DO SISTEMA</p><span className="meta-line" /></div>
          <div className="feature-track">
            {featured.map((item, index) => (
              <article className="feature-card" key={item.system}>
                <div className="feature-number">0{index + 1}</div>
                <div className="feature-content">
                  <p>{item.system}</p>
                  <h2>{item.moon}</h2>
                  <span>{item.blurb}</span>
                </div>
                <button aria-label={`Explorar luas de ${item.system}`} onClick={() => scrollTo('mapa')}><Arrow /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="numbers-section" id="mapa">
          <div className="numbers-panel">
            <div className="number-display"><span>+</span><strong>300</strong><small>LUAS CONFIRMADAS</small></div>
            <div className="number-copy">
              <p className="eyebrow"><span>03</span> QUANTAS LUAS EXISTEM?</p>
              <h2>Um sistema solar em <em>miniatura.</em></h2>
              <p>Nosso Sistema Solar possui centenas de luas conhecidas orbitando planetas e planetas anões. Até alguns asteroides têm luas.</p>
              <p>As luas, também chamadas de satélites naturais, têm muitas formas, tamanhos e tipos. Em geral são corpos sólidos — e algumas têm atmosfera.</p>
              <a className="text-link" href="https://science.nasa.gov/solar-system/moons/" target="_blank" rel="noreferrer">Conheça os fatos <Arrow /></a>
            </div>
          </div>
          <div className="cassini-caption"><span>FICHA DE OBSERVAÇÃO</span><p>Este tipo de comparação, como a feita pela Cassini com Atlas, Daphnis e Pan, revela a diversidade até entre pequenas luas nos anéis de Saturno.</p><small>NASA / JPL-CALTECH / SPACE SCIENCE INSTITUTE</small></div>
        </section>

        <section className="other-moons">
          <div className="other-image"><img src={image.lunar} alt="Lua vista em detalhes contra o fundo escuro" /><span className="media-credit">Imagem: NASA</span></div>
          <div className="other-copy">
            <p className="eyebrow"><span>04</span> OUTRAS LUAS</p>
            <h2>Além dos<br /><em>planetas.</em></h2>
            <p>Luas — ou satélites naturais — também orbitam planetas anões, cometas, asteroides e Objetos Transnetunianos: corpos gelados que orbitam o Sol além de Netuno.</p>
            <div className="orbit-notes">
              <span>PLANETAS ANÕES</span><span>COMETAS</span><span>ASTEROIDES</span><span>TNOs</span>
            </div>
          </div>
        </section>

        <section className="earth-section">
          <div className="earth-copy">
            <p className="eyebrow"><span>05</span> A LUA DA TERRA</p>
            <h2>A companheira<br />que <em>molda</em><br />nosso mundo.</h2>
            <p>De iluminar nossos céus a guardar um registro geológico da história do Sistema Solar, nossa vizinha celeste mais próxima desempenha um papel essencial no estudo da Terra e do espaço ao redor.</p>
            <a className="round-button round-button--light" href="https://science.nasa.gov/moon/" target="_blank" rel="noreferrer">Tudo sobre a Lua <Arrow diagonal /></a>
          </div>
          <div className="earth-orbit"><div className="earth-image"><img src={image.earth} alt="A Terra e a Lua vistas do espaço" /></div><small className="media-credit">Imagem: NASA</small><span>384.400 KM<br />EM MÉDIA</span></div>
        </section>

        <section className="phases-section" id="fases">
          <div className="phases-heading"><p className="eyebrow"><span>06</span> É SÓ UMA FASE</p><h2>A Lua muda — <em>o olhar também.</em></h2></div>
          <div className="phase-experience">
            <div className={`phase-moon phase-moon--${phase.className}`} aria-label={`Fase lunar selecionada: ${phase.name}`}>
              <img src={image.phases} alt="Fases da Lua em uma sequência fotográfica" />
              <div className="phase-mask" />
              <span className="media-credit">Imagem: NASA</span>
            </div>
            <div className="phase-controls" role="tablist" aria-label="Fases da Lua">
              {phases.map((item, index) => <button key={item.name} id={`phase-tab-${index}`} role="tab" tabIndex={phaseIndex === index ? 0 : -1} aria-controls="phase-description" aria-selected={phaseIndex === index} className={phaseIndex === index ? 'active' : ''} onClick={() => setPhaseIndex(index)} onKeyDown={(event) => {
                const step = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0
                if (step) {
                  event.preventDefault()
                  const nextIndex = (index + step + phases.length) % phases.length
                  setPhaseIndex(nextIndex)
                  document.getElementById(`phase-tab-${nextIndex}`)?.focus()
                }
              }}><span>{item.label}</span>{item.name}</button>)}
            </div>
            <div className="phase-copy" id="phase-description" role="tabpanel" aria-labelledby={`phase-tab-${phaseIndex}`} aria-live="polite"><span>FASE {phase.label}</span><h3>{phase.name}</h3><p>{phase.text}</p><a className="text-link" href="https://science.nasa.gov/moon/moon-phases/" target="_blank" rel="noreferrer">Aprenda as fases da Lua <Arrow /></a></div>
          </div>
          <p className="phase-note">Às vezes toda a face da Lua parece brilhar; em outras, vemos apenas um fino crescente — ou parece que ela desaparece. Essas mudanças são as fases lunares.</p>
        </section>

        <section className="systems-section">
          <div className="systems-heading"><p className="eyebrow"><span>07</span> CARTOGRAFIA ORBITAL</p><h2>Luas no nosso<br /><em>Sistema Solar</em></h2><p>Sete sistemas, centenas de trajetórias e uma coleção inesgotável de mundos para observar.</p></div>
          <div className="system-list">
            {moonSystems.map((system, index) => (
              <article className="system-row" key={system.planet}>
                <span className="row-index">0{index + 1}</span>
                <div><h3>{system.planet}</h3><p>{system.moons}</p></div>
                <div className="row-info"><strong>{system.count}</strong><span>{system.description}</span></div>
                <a href={system.url} aria-label={`Saiba mais sobre as luas de ${system.planet}`} target="_blank" rel="noreferrer"><Arrow /></a>
              </article>
            ))}
          </div>
          <div className="gallery-banner"><img src={image.gallery} alt="Coleção de corpos celestes do Sistema Solar" /><div><span>GALERIA NASA</span><h3>11 imagens<br />para ampliar<br />sua órbita.</h3><small>Imagens públicas: NASA</small><a href="https://science.nasa.gov/gallery/moons/" target="_blank" rel="noreferrer">Ir para a galeria <Arrow /></a></div></div>
        </section>

        <section className="news-section" id="noticias">
          <div className="news-heading"><p className="eyebrow"><span>08</span> RADAR LUNAR</p><h2>Notícias sobre <em>luas.</em></h2><a className="text-link" href="https://science.nasa.gov/solar-system/moons/" target="_blank" rel="noreferrer">Todos os destaques <Arrow /></a></div>
          <div className="news-list">
            {news.map((item, index) => <a className="news-row" key={item.title} href={item.url} target="_blank" rel="noreferrer"><span>0{index + 1}</span><p><small>{item.type} · {item.tag}</small>{item.title}</p><Arrow /></a>)}
          </div>
        </section>

        <section className="explore-section">
          <p className="eyebrow"><span>09</span> CONTINUE EXPLORANDO</p>
          <h2>O universo não<br />termina na <em>Lua.</em></h2>
          <div className="topic-grid">
            {[['Sol', 'https://science.nasa.gov/sun/'], ['Planetas', 'https://science.nasa.gov/solar-system/planets/'], ['Hipotético Planeta X', 'https://science.nasa.gov/solar-system/planet-x/'], ['Exoplanetas', 'https://science.nasa.gov/exoplanets/']].map(([topic, url], index) => <a key={topic} href={url} target="_blank" rel="noreferrer" className={`topic-card topic-card--${index + 1}`}><span>0{index + 1}</span><h3>{topic}</h3>{topic === 'Hipotético Planeta X' && <p>Pesquisadores da Caltech encontraram evidências de que pode haver um “Planeta X” nas profundezas do Sistema Solar.</p>}<Arrow /></a>)}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><OrbitMark /><span>Lunarium</span></div>
        <p>Uma exploração editorial independente baseada no conteúdo público da NASA Science sobre luas do Sistema Solar.</p>
        <div className="footer-meta"><span>FONTE EDITORIAL: NASA SCIENCE</span><span>PÁGINA DE REFERÊNCIA ATUALIZADA EM 13 OUT 2026</span><a href="https://science.nasa.gov/solar-system/moons/" target="_blank" rel="noreferrer">Visitar NASA <Arrow /></a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
