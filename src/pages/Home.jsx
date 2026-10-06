import { Link } from 'react-router-dom'

const services = [
  ['Formatação e instalação','Formatação completa, instalação de Windows, drivers e programas essenciais.'],
  ['Manutenção de hardware','Troca de peças, limpeza interna, upgrade de memória e SSD.'],
  ['Rede e internet','Configuração de roteadores, Wi-Fi, cabo de rede e compartilhamento.'],
  ['Segurança e backup','Antivírus, backup de dados e proteção contra ransomware.'],
  ['Suporte remoto','Atendimento a distância para problemas de software e configuração.'],
  ['Atendimento em domicílio','Técnico vai até você no horário combinado. Sem precisar levar o PC.']
]

export default function Home() {
  return <>
    <section className="hero hero-home">
      <div className="hero-image" aria-hidden="true"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85" alt="" /></div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner"><div className="hero-content">
        <span className="hero-badge"><span className="hero-badge-dot" /> Desde 1996 em Tubarão/SC</span>
        <h1>Problemas com o computador?<br /><span>A gente resolve.</span></h1>
        <p>Assistência técnica em domicílio, formatação, rede, suporte remoto e manutenção. Atendimento rápido e com garantia.</p>
        <div className="hero-buttons"><Link to="/contato" className="btn btn-blue">Solicitar atendimento</Link><Link to="/servicos" className="btn btn-outline">Ver serviços</Link></div>
      </div></div>
    </section>
    <section className="benefits"><div className="container"><div className="benefits-grid">
      <div className="benefit-item"><div className="benefit-icon">⌂</div><p><strong>Atendimento em domicílio</strong>Técnicos vão até sua casa ou empresa</p></div>
      <div className="benefit-item"><div className="benefit-icon">◷</div><p><strong>Horário flexível</strong>Você escolhe o melhor dia e horário</p></div>
      <div className="benefit-item"><div className="benefit-icon">✓</div><p><strong>Serviço com garantia</strong>Qualidade, segurança e garantia em nossos serviços.</p></div>
    </div></div></section>
    <section className="section"><div className="container two-cols">
      <div><span className="section-label">Como podemos ajudar</span><h2>A solução que você procura</h2><p>Atendemos problemas de todos os níveis: formatação, reparo de hardware, instalação de rede, troca de peças, backup e segurança.</p><p>Dúvida se cobrimos a sua necessidade? É só ligar ou mandar mensagem. Orçamento sem compromisso.</p><Link to="/contato" className="btn btn-blue">Falar conosco</Link></div>
      <div><div className="image-card"><img src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1200&q=85" alt="Profissional realizando manutenção em computador" loading="lazy" /><div className="image-card-caption"><strong>Manutenção especializada</strong><span>Diagnóstico e cuidado técnico para seus equipamentos</span></div></div></div>
    </div></section>
    <section className="section section-alt"><div className="container two-cols">
      <div><div className="image-card image-card-tall"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" alt="Infraestrutura de servidores e tecnologia" loading="lazy" /><div className="image-card-caption"><strong>Infraestrutura e tecnologia</strong><span>Experiência para residências e pequenas empresas</span></div></div></div>
      <div><span className="section-label">Sobre a NetData</span><h2>Quem somos</h2><p>No início, prestávamos manutenção para empresas de grande porte. A partir de 1996, tornamos nossos serviços acessíveis a todos.</p><p>Hoje atendemos de residências a pequenas empresas. O atendimento em domicílio é o nosso maior diferencial.</p><div className="stats-row"><div className="stat-item"><strong>+28</strong><span>anos de experiência</span></div><div className="stat-item"><strong>1996</strong><span>ano de fundação</span></div><div className="stat-item"><strong>100%</strong><span>atendimento em domicílio</span></div></div></div>
    </div></section>
    <section className="section section-services"><div className="container"><div className="section-header"><span className="section-label">Nossos serviços</span><h2>O que fazemos</h2><p>Soluções completas para computadores, notebooks e redes.</p></div><div className="services-grid">{services.map(([title,text])=><div className="service-card" key={title}><div className="service-icon">✓</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="visual-strip"><div className="visual-strip-image"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85" alt="Computador e tecnologia" loading="lazy" /></div><div className="visual-strip-content"><span className="section-label">Tecnologia no dia a dia</span><h2>Seu equipamento merece atenção profissional.</h2><p>Da manutenção preventiva à configuração de redes, cuidamos da tecnologia para você seguir trabalhando.</p><Link to="/contato" className="btn btn-blue">Conhecer a NetData</Link></div></section>
    <section className="cta-banner"><div className="container"><h2>Precisa de ajuda agora?</h2><p>Fale conosco pelo WhatsApp ou telefone. Orçamento sem compromisso.</p><div className="cta-buttons"><Link to="/contato" className="btn btn-blue">Entrar em contato</Link><a href="tel:+554836222726" className="btn btn-outline">(48) 3622-2726</a></div></div></section>
  </>
}