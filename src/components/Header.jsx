import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const links = [
  ['/', 'Início'],
  ['/servicos', 'Soluções'],
  ['/suporte', 'Suporte'],
  ['/contato', 'Contato']
]

export default function Header() {
  const closeMenu = () => document.getElementById('mainNav')?.classList.remove('open')

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand-logo" aria-label="NetData Computadores" onClick={closeMenu}>
          <img src={logo} alt="NetData Computadores" width="186" height="100" />
        </NavLink>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => document.getElementById('mainNav')?.classList.toggle('open')}>
          <span></span><span></span><span></span>
        </button>
        <nav className="nav" id="mainNav" aria-label="Navegação principal">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>{label}</NavLink>
          ))}
          <NavLink to="/contato" className="nav-cta" onClick={closeMenu}><span>Solicitar orçamento</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></NavLink>
        </nav>
      </div>
    </header>
  )
}
