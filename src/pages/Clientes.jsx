import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const areas = [
  ['Empresas e escritórios', 'Suporte para estações de trabalho, periféricos e conectividade.'],
  ['Comércio e atendimento', 'Tecnologia para apoiar as operações e o atendimento ao público.'],
  ['Profissionais e uso doméstico', 'Assistência técnica e orientação para equipamentos do dia a dia.']
]

export default function Clientes() {
  return <>
    <PageMeta title="Clientes | NetData Computadores" description="A NetData atende empresas, comércios, profissionais e usuários que precisam de suporte e soluções em informática." />
    <section className="hero page-hero page-hero-modern" style={{padding:'84px 0 68px'}}>
      <div className="hero-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85" alt="" /></div><div className="hero-overlay" />
      <div className="container hero-content"><span className="hero-badge"><span className="hero-badge-dot" /> Parceria e confiança</span><h1>Clientes</h1><p>Relacionamentos construídos com atendimento próximo e soluções adequadas a cada necessidade.</p></div>
    </section>
    <section className="section"><div className="container"><div className="section-header"><span className="section-label">Como ajudamos</span><h2>Tecnologia para diferentes rotinas</h2><p>Entendemos o contexto de cada cliente para orientar o atendimento mais adequado.</p></div><div className="services-grid">{areas.map(([title,description])=><article className="service-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><div style={{textAlign:'center',marginTop:38}}><Link to="/contato" className="btn btn-blue">Converse com nossa equipe</Link></div></div></section>
  </>
}
