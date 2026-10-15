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
    <section className="hero page-hero page-hero-modern" style={{padding:0,margin:0,minHeight:0,background:'#f7f9fc',color:'#102033'}}>
      <div className="container hero-content" style={{color:"#102033"}}><p style={{margin:0,fontSize:"1.15rem",lineHeight:1.6}}>Relacionamentos construídos com atendimento próximo e soluções adequadas a cada necessidade.</p></div>
    </section>
    <section className="section"><div className="container"><div className="section-header"><span className="section-label">Como ajudamos</span><h2>Tecnologia para diferentes rotinas</h2><p>Entendemos o contexto de cada cliente para orientar o atendimento mais adequado.</p></div><div className="services-grid">{areas.map(([title,description])=><article className="service-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><div style={{textAlign:'center',marginTop:38}}><Link to="/contato" className="btn btn-blue">Converse com nossa equipe</Link></div></div></section>
  </>
}
