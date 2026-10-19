import { useEffect, useState } from 'react'
import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    alt: 'Placa eletrônica e componentes de tecnologia',
    eyebrow: 'Tecnologia e inovação',
    title: 'Tecnologia que aproxima e transforma',
    description: 'Soluções de informática pensadas para as necessidades de cada cliente.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
    alt: 'Servidores em uma infraestrutura de tecnologia',
    eyebrow: 'Infraestrutura e redes',
    title: 'Conectividade para seguir em frente',
    description: 'Infraestrutura confiável para manter equipamentos, redes e operações funcionando.',
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=85',
    alt: 'Profissional trabalhando com segurança digital',
    eyebrow: 'Segurança da informação',
    title: 'Mais cuidado com seus dados',
    description: 'Boas práticas e soluções que ajudam a proteger informações e sistemas.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
    alt: 'Equipamentos de rede e conectividade',
    eyebrow: 'Backup e conectividade',
    title: 'Tecnologia preparada para o dia a dia',
    description: 'Apoio técnico e recursos para ajudar sua tecnologia a acompanhar sua rotina.',
  },
]

export default function Sobre() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % slides.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [isPaused])

  const goToSlide = (index) => setActiveSlide((index + slides.length) % slides.length)

  return <>
    <PageMeta title="Sobre a NetData | NetData Computadores" description="Conheça a NetData Computadores: experiência em informática, atendimento próximo e tecnologia para empresas e pessoas." />
    <section className="section about-intro-section">
      <div className="container two-cols">
        <div>
          <span className="section-label">Quem somos</span>
          <h2>Tecnologia próxima, soluções com propósito</h2>
          <p>A NetData Computadores oferece suporte técnico, assistência, serviços de informática e soluções de conectividade para ajudar empresas e pessoas a manter sua tecnologia funcionando.</p>
          <p>Nosso foco é entender cada necessidade, explicar as opções com clareza e recomendar soluções adequadas ao dia a dia de cada cliente.</p>
          <Link to="/contato" className="btn btn-blue">Fale com a NetData</Link>
        </div>
        <div
          className="about-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
          }}
          aria-roledescription="carrossel"
          aria-label="Temas de tecnologia da NetData"
        >
          {slides.map((slide, index) => (
            <div className={`about-carousel-slide${index === activeSlide ? ' is-active' : ''}`} key={slide.image} aria-hidden={index !== activeSlide}>
              <img src={slide.image} alt={slide.alt} loading={index === 0 ? 'eager' : 'lazy'} />
              <div className="about-carousel-shade" />
              <div className="about-carousel-caption">
                <span>{slide.eyebrow}</span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          <button className="about-carousel-arrow about-carousel-prev" type="button" aria-label="Imagem anterior" onClick={() => goToSlide(activeSlide - 1)}>‹</button>
          <button className="about-carousel-arrow about-carousel-next" type="button" aria-label="Próxima imagem" onClick={() => goToSlide(activeSlide + 1)}>›</button>
          <div className="about-carousel-dots" aria-label="Selecionar imagem">
            {slides.map((slide, index) => (
              <button key={slide.image} type="button" className={`about-carousel-dot${index === activeSlide ? ' is-active' : ''}`} aria-label={`Mostrar imagem ${index + 1}: ${slide.eyebrow}`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => goToSlide(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
}
