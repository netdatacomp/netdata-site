import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const services = [
  ['01', 'Infraestrutura', 'Computadores, upgrades e manutenção para sua operação continuar funcionando.'],
  ['02', 'Redes e conectividade', 'Wi-Fi, cabeamento, roteadores e compartilhamento para ambientes residenciais e empresariais.'],
  ['03', 'Servidores', 'Configuração, manutenção e organização da infraestrutura de servidores.'],
  ['04', 'Segurança', 'Proteção, antivírus e boas práticas para reduzir riscos e perdas.'],
  ['05', 'Backup', 'Estratégias de backup para manter seus dados protegidos e recuperáveis.'],
  ['06', 'Suporte técnico', 'Atendimento remoto e em domicílio para resolver problemas com agilidade.']
]
const highlights = [['28+', 'anos de experiência'], ['1996', 'desde o início'], ['100%', 'atendimento próximo'], ['SC', 'Tubarão e região']]

export default function Home() {
  return (
    <>
      <PageMeta title="NetData Computadores | Tecnologia, suporte e infraestrutura em Tubarão/SC" description="Soluções de tecnologia, manutenção, redes, segurança, backup e suporte técnico para residências e empresas em Tubarão/SC." />
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
            <img src={`${import.meta.env.BASE_URL}images/netdata-assistencia-tecnica.webp?v=3`} alt="Técnico realizando manutenção em notebook em uma bancada de assistência técnica" fetchPriority="high" />
          </div>
        </div>
      </section>
      <section className="home-reference-benefits" aria-label="Diferenciais da NetData">
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
      <section className="section solutions-section"><div className="container">
        <div className="section-header section-header-left"><span className="section-label">Nossas soluções</span><h2 className="nowrap-title">Tecnologia pensada para o seu dia a dia.</h2><p>Do computador à infraestrutura de rede, reunimos as soluções essenciais para manter sua tecnologia funcionando.</p></div>
        <div className="services-grid modern-services">{services.map(([number,title,text]) => {const imageMap={'Infraestrutura':['https://images.unsplash.com/photo-1648565726114-cfb73eb46340?auto=format&fit=crop&fm=jpg&q=85&w=1200','Infraestrutura de servidores e tecnologia'],'Redes e conectividade':['https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?auto=format&fit=crop&fm=jpg&q=85&w=1200','Switch de rede com cabos Ethernet'],'Servidores':['https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1200&q=85','Rack de servidores em data center'],'Segurança':['https://images.unsplash.com/photo-1614064642639-e398cf05badb?auto=format&fit=crop&w=1200&q=85','Notebook com proteção e segurança digital'],'Backup':['https://images.unsplash.com/photo-1779896412280-cff477924a69?auto=format&fit=crop&w=1200&q=85','SSD externo para armazenamento e backup'],'Suporte técnico':['https://utidainformatica.net/assets/atendimento-diagnostico-g-ZvmgzA.webp','Técnico de informática realizando diagnóstico e suporte']};const [src,alt]=imageMap[title];return <article className="service-card modern-card" key={title}><div className="card-top"><div className="home-service-image"><img src={src} alt={alt} loading="lazy"/></div><span className="card-arrow">↗</span></div><h3>{title}</h3><p>{text}</p><Link to="/servicos">Saiba mais <span>→</span></Link></article>})}</div>
      </div></section>
      <section className="impact-section"><div className="container impact-inner">
        <div className="impact-copy"><span className="section-label section-label-dark">Por que escolher a NetData?</span><h2>Sua tecnologia conectada. Seu negócio em evolução.</h2><p>Infraestrutura, segurança e suporte de TI trabalhando juntos para manter sua empresa produtiva, conectada e preparada para o próximo desafio.</p><Link to="/contato" className="btn btn-blue">Fale com nossa equipe</Link></div>
        <div className="highlights-grid">
          <div className="highlight tech-highlight"><span className="highlight-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 13 4-4"/><path d="M7 17h.01M17 17h.01"/></svg></span><strong>Performance</strong><span>Tecnologia preparada para acompanhar o ritmo da sua empresa.</span></div>
          <div className="highlight tech-highlight"><span className="highlight-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10.5 10V8.8a1.5 1.5 0 0 1 3 0V10"/></svg></span><strong>Segurança</strong><span>Proteção para seus dados, sistemas e infraestrutura.</span></div>
          <div className="highlight tech-highlight"><span className="highlight-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12 5 17M12 12l7 5"/></svg></span><strong>Conectividade</strong><span>Redes estáveis para manter tudo funcionando.</span></div>
          <div className="highlight tech-highlight"><span className="highlight-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="12" width="4" height="6" rx="2"/><rect x="17" y="12" width="4" height="6" rx="2"/><path d="M17 18c-.5 2-2 3-5 3"/></svg></span><strong>Suporte especializado</strong><span>Atendimento rápido e soluções objetivas.</span></div>
        </div>
      </div></section>
      <section className="section about-modern"><div className="container about-modern-grid">
        <div className="about-panel about-photo-panel"><img src={`${import.meta.env.BASE_URL}images/netdata-assistencia-tecnica.webp?v=2`} alt="Assistência técnica de informática: técnico realizando manutenção em notebook" loading="lazy"/><div className="about-photo-caption"><span>Desde 1996</span><strong>Experiência que faz diferença.</strong></div></div>
        <div><span className="section-label">Sobre a NetData</span><h2>Experiência de verdade, tecnologia para hoje.</h2><p>Começamos atendendo empresas de grande porte e, desde 1996, tornamos nossa experiência acessível também a residências e pequenas empresas.</p><p>Hoje, nosso foco é entregar atendimento próximo, diagnóstico claro e soluções que realmente resolvam o problema.</p><div className="mini-points"><span>✓ Diagnóstico técnico</span><span>✓ Atendimento em domicílio</span><span>✓ Suporte remoto</span><span>✓ Soluções para empresas</span></div></div>
      </div></section>
      <section className="cta-banner modern-cta"><div className="container"><span className="cta-kicker">NETDATA COMPUTADORES</span><h2>Precisa de uma TI mais eficiente?</h2><p>Vamos entender sua necessidade e encontrar uma solução.</p><div className="cta-buttons"><Link to="/contato" className="btn btn-blue">Fale com a NetData</Link><Link to="/servicos" className="btn btn-outline">Ver soluções</Link></div></div></section>
    </>
  )
}
