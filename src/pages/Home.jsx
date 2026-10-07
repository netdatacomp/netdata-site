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
      <section className="hero hero-modern">
        <div className="hero-grid" aria-hidden="true">
          <span className="node n1"></span><span className="node n2"></span><span className="node n3"></span><span className="node n4"></span><span className="node n5"></span><span className="node n6"></span>
          <span className="line l1"></span><span className="line l2"></span><span className="line l3"></span><span className="line l4"></span><span className="line l5"></span>
        </div>
        <div className="container hero-modern-inner">
          <div className="hero-content">
            <span className="hero-badge"><span className="hero-badge-dot" /> Tecnologia e suporte desde 1996</span>
            <h1 className="hero-title"><span className="hero-title-main">Tecnologia que conecta.</span><span className="hero-title-accent">Segurança que protege.</span></h1>
            <p>Infraestrutura, manutenção, redes e suporte técnico para sua empresa e sua casa operarem melhor.</p>
            <div className="hero-buttons"><Link to="/servicos" className="btn btn-blue">Conheça nossas soluções <span>→</span></Link><Link to="/contato" className="btn btn-outline">Fale conosco</Link></div>
            <div className="hero-trust"><span>✓ Atendimento especializado</span><span>✓ Orçamento sem compromisso</span></div>
          </div>
          <div className="hero-visual" aria-label="Ilustração de infraestrutura tecnológica">
            <div className="visual-glow"></div><div className="server-stack"><div className="server-unit"><i></i><i></i><b>NET</b></div><div className="server-unit"><i></i><i></i><b>DATA</b></div><div className="server-unit"><i></i><i></i><b>CORE</b></div></div>
            <div className="cloud-shape">☁</div><div className="data-pill pill-one">REDE <strong>●</strong></div><div className="data-pill pill-two">BACKUP <strong>✓</strong></div><div className="data-pill pill-three">ONLINE <strong>●</strong></div>
          </div>
        </div>
      </section>
      <section className="benefits modern-benefits"><div className="container benefits-grid">
        <div className="benefit-item"><div className="benefit-icon">01</div><p><strong>Experiência</strong>Mais de duas décadas cuidando de tecnologia.</p></div>
        <div className="benefit-item"><div className="benefit-icon">02</div><p><strong>Proximidade</strong>Atendimento em Tubarão e região.</p></div>
        <div className="benefit-item"><div className="benefit-icon">03</div><p><strong>Confiança</strong>Soluções práticas, claras e com suporte.</p></div>
      </div></section>
      <section className="section solutions-section"><div className="container">
        <div className="section-header section-header-left"><span className="section-label">Nossas soluções</span><h2 className="nowrap-title">Tecnologia pensada para o seu dia a dia.</h2><p>Do computador à infraestrutura de rede, reunimos as soluções essenciais para manter sua tecnologia funcionando.</p></div>
        <div className="services-grid modern-services">{services.map(([number,title,text]) => {const imageMap={'Infraestrutura':['https://images.unsplash.com/photo-1648565726114-cfb73eb46340?auto=format&fit=crop&fm=jpg&q=85&w=1200','Infraestrutura de servidores e tecnologia'],'Redes e conectividade':['https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?auto=format&fit=crop&fm=jpg&q=85&w=1200','Switch de rede com cabos Ethernet'],'Servidores':['https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1200&q=85','Rack de servidores em data center'],'Segurança':['https://images.unsplash.com/photo-1614064642639-e398cf05badb?auto=format&fit=crop&w=1200&q=85','Notebook com proteção e segurança digital'],'Backup':['https://images.unsplash.com/photo-1779896412280-cff477924a69?auto=format&fit=crop&w=1200&q=85','SSD externo para armazenamento e backup'],'Suporte técnico':['https://utidainformatica.net/assets/atendimento-diagnostico-g-ZvmgzA.webp','Técnico de informática realizando diagnóstico e suporte']};const [src,alt]=imageMap[title];return <article className="service-card modern-card" key={title}><div className="card-top"><div className="home-service-image"><img src={src} alt={alt} loading="lazy"/></div><span className="card-arrow">↗</span></div><h3>{title}</h3><p>{text}</p><Link to="/servicos">Saiba mais <span>→</span></Link></article>})}</div>
      </div></section>
      <section className="impact-section"><div className="container impact-inner">
        <div className="impact-copy"><span className="section-label section-label-dark">Por que NetData?</span><h2>Sua infraestrutura de TI não pode parar.</h2><p>Conte com uma equipe próxima para cuidar dos equipamentos, redes e necessidades tecnológicas que fazem parte da sua rotina.</p><Link to="/contato" className="btn btn-blue">Fale com nossa equipe</Link></div>
        <div className="highlights-grid">{highlights.map(([value,label]) => <div className="highlight" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div></section>
      <section className="section about-modern"><div className="container about-modern-grid">
        <div className="about-panel about-photo-panel"><img src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?auto=format&fit=crop&fm=jpg&q=85&w=1200" alt="Profissionais trabalhando com manutenção de computador" loading="lazy"/><div className="about-photo-caption"><span>Desde 1996</span><strong>Experiência que faz diferença.</strong></div></div>
        <div><span className="section-label">Sobre a NetData</span><h2>Experiência de verdade, tecnologia para hoje.</h2><p>Começamos atendendo empresas de grande porte e, desde 1996, tornamos nossa experiência acessível também a residências e pequenas empresas.</p><p>Hoje, nosso foco é entregar atendimento próximo, diagnóstico claro e soluções que realmente resolvam o problema.</p><div className="mini-points"><span>✓ Diagnóstico técnico</span><span>✓ Atendimento em domicílio</span><span>✓ Suporte remoto</span><span>✓ Soluções para empresas</span></div></div>
      </div></section>
      <section className="cta-banner modern-cta"><div className="container"><span className="cta-kicker">NETDATA COMPUTADORES</span><h2>Precisa de uma TI mais eficiente?</h2><p>Vamos entender sua necessidade e encontrar uma solução.</p><div className="cta-buttons"><Link to="/contato" className="btn btn-blue">Fale com a NetData</Link><Link to="/servicos" className="btn btn-outline">Ver soluções</Link></div></div></section>
    </>
  )
}