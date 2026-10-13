import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <PageMeta
        title="NetData Computadores | Soluções em TI para sua empresa"
        description="Soluções completas em informática, suporte técnico, segurança e conectividade para manter sua empresa sempre conectada e produtiva."
      />

      <section className="home-reference-hero">
        <div className="home-reference-shapes" aria-hidden="true"><span></span><span></span><span></span></div>
        <div className="container home-reference-hero-inner">
          <div className="home-reference-copy">
            <span className="home-reference-kicker"><i></i> Soluções em TI para sua empresa</span>
            <h1>Experiência de verdade, <span>tecnologia para hoje.</span></h1>
            <p>Soluções completas em informática, com suporte especializado, para manter o seu negócio sempre conectado e produtivo.</p>
            <Link to="/servicos" className="home-reference-button"><span className="home-reference-arrow">→</span> Conheça nossos serviços</Link>
          </div>
          <div className="home-reference-photo">
            <img src="https://images.pexels.com/photos/33531806/pexels-photo-33531806/free-photo-of-technician-repairing-laptop-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Técnico especializado realizando manutenção em notebook em uma bancada de assistência técnica" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="home-reference-benefits" aria-label="Diferenciais e benefícios da NetData">
        <div className="container home-reference-benefits-grid">
          <div className="home-reference-benefit">
            <span className="home-reference-icon" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 45a25 25 0 0 1 48 0"/><path d="M13 36l-5-1M20 22l-4-4M32 17v-6M44 22l4-4M52 36l5-1"/><path d="M32 39l13-14"/><circle cx="32" cy="39" r="4" fill="currentColor"/></svg></span>
            <div><strong>Performance</strong><p>Tecnologia preparada para acompanhar o ritmo da sua empresa.</p></div>
          </div>
          <div className="home-reference-benefit">
            <span className="home-reference-icon" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M32 6 53 14v16c0 14-9 23-21 28C20 53 11 44 11 30V14L32 6Z"/><rect x="23" y="28" width="18" height="15" rx="3"/><path d="M27 28v-5a5 5 0 0 1 10 0v5"/><circle cx="32" cy="35" r="1.5" fill="currentColor"/></svg></span>
            <div><strong>Segurança</strong><p>Proteção para seus dados, sistemas e infraestrutura.</p></div>
          </div>
          <div className="home-reference-benefit">
            <span className="home-reference-icon" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 43h29a12 12 0 0 0 1-24 17 17 0 0 0-32-2A13 13 0 0 0 18 43Z"/><path d="M32 43v8M18 43v8M46 43v8"/><circle cx="18" cy="55" r="4"/><circle cx="32" cy="55" r="4"/><circle cx="46" cy="55" r="4"/></svg></span>
            <div><strong>Conectividade</strong><p>Redes estáveis para manter tudo funcionando.</p></div>
          </div>
          <div className="home-reference-benefit">
            <span className="home-reference-icon" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 35v-6a20 20 0 0 1 40 0v6"/><rect x="8" y="32" width="10" height="17" rx="5"/><rect x="46" y="32" width="10" height="17" rx="5"/><path d="M51 49c-2 7-8 10-17 10h-3"/><rect x="26" y="55" width="8" height="6" rx="2"/></svg></span>
            <div><strong>Suporte especializado</strong><p>Atendimento rápido e soluções objetivas.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-banner modern-cta">
        <div className="container">
          <span className="cta-kicker">NETDATA COMPUTADORES</span>
          <h2>Precisa de ajuda com sua tecnologia?</h2>
          <p>Conheça nossos serviços ou fale com nossa equipe para encontrar a solução ideal.</p>
          <div className="cta-buttons">
            <Link to="/servicos" className="btn btn-blue">Conheça nossos serviços</Link>
            <Link to="/contato" className="btn btn-outline">Fale com a NetData</Link>
          </div>
        </div>
      </section>
    </>
  )
}
