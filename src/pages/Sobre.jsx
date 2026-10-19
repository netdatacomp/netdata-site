import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const assistenciaImage = 'https://images.pexels.com/photos/31869847/pexels-photo-31869847/free-photo-of-technician-working-on-laptop-in-workshop.jpeg?auto=compress&dpr=1&h=750&w=1260'

export default function Sobre() {
  return <>
    <PageMeta title="Sobre a NetData | NetData Computadores" description="Conheça a NetData Computadores: experiência em informática, atendimento próximo e tecnologia para empresas e pessoas." />
    <section className="section"><div className="container two-cols"><div><span className="section-label">Quem somos</span><h2>Tecnologia próxima, soluções com propósito</h2><p>A NetData Computadores oferece suporte técnico, assistência, serviços de informática e soluções de conectividade para ajudar empresas e pessoas a manter sua tecnologia funcionando.</p><p>Nosso foco é entender cada necessidade, explicar as opções com clareza e recomendar soluções adequadas ao dia a dia de cada cliente.</p><Link to="/contato" className="btn btn-blue">Fale com a NetData</Link></div><div className="image-card" style={{height:360,minHeight:360}}><img src={assistenciaImage} alt="Técnico de informática trabalhando em um notebook em uma oficina profissional" loading="eager" style={{display:'block',width:'100%',height:'360px',minHeight:360,objectFit:'cover'}} /></div></div></section>
  </>
}
