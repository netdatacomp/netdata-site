import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const assistenciaImage = '/netdata-site/images/netdata-assistencia-tecnica.webp?v=1'

export default function Sobre() {
  return <>
    <PageMeta title="Sobre a NetData | NetData Computadores" description="Conheça a NetData Computadores: experiência em informática, atendimento próximo e tecnologia para empresas e pessoas." />
    <section className="hero page-hero page-hero-modern" style={{padding:'12px 0 18px',background:'#f7f9fc',color:'#102033'}}>
      <div className="container hero-content" style={{color:"#102033"}}><h1 style={{margin:'0'}}>Sobre a NetData</h1></div>
    </section>
    <section className="section"><div className="container two-cols"><div><span className="section-label">Quem somos</span><h2>Tecnologia próxima, soluções com propósito</h2><p>A NetData Computadores oferece suporte técnico, assistência, serviços de informática e soluções de conectividade para ajudar empresas e pessoas a manter sua tecnologia funcionando.</p><p>Nosso foco é entender cada necessidade, explicar as opções com clareza e recomendar soluções adequadas ao dia a dia de cada cliente.</p><Link to="/contato" className="btn btn-blue">Fale com a NetData</Link></div><div className="image-card"><img src={assistenciaImage} alt="Profissional realizando assistência técnica de informática" loading="eager" /></div></div></section>
  </>
}
