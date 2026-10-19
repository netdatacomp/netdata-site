import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const solutions = [
  ['Infraestrutura e redes', 'Planejamento e configuração de redes para manter dispositivos e equipes conectados.'],
  ['Segurança e proteção', 'Boas práticas e soluções para ajudar a proteger sistemas, equipamentos e informações.'],
  ['Suporte técnico', 'Orientação e atendimento para resolver problemas e reduzir interrupções.'],
  ['Backup e continuidade', 'Organização de cópias de segurança para reduzir o risco de perda de dados.']
]

export default function Solucoes() {
  return <>
    <PageMeta title="Soluções em TI | NetData Computadores" description="Conheça as soluções de infraestrutura, redes, segurança, backup e suporte técnico da NetData." />
    <section className="section"><div className="container"><div className="section-header"><span className="section-label">O que podemos fazer</span><h2 className="single-line-heading">Uma estrutura de TI mais confiável</h2><p>Soluções para apoiar a rotina, a segurança e a produtividade da sua operação.</p></div><div className="services-grid">{solutions.map(([title,description])=><article className="service-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><div style={{textAlign:'center',marginTop:38}}><Link to="/servicos" className="btn btn-blue">Ver serviços</Link></div></div></section>
  </>
}
