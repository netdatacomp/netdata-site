import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const links = [
  ['/', 'Home'],
  ['/servicos', 'Serviços'],
  ['/suporte', 'Suporte'],
  ['/contato', 'Contato']
]

export default function Header() {
  return (
    <header className="header shadow-sm">
      <div className="container header-inner">
        <NavLink to="/" className="brand-logo" aria-label="NetData Computadores">
          <img src={logo} alt="NetData Computadores" width="210" height="60" />
        </NavLink>
        <button className="menu-toggle" aria-label="Abrir menu" id="menuToggle" onClick={() => {
          document.getElementById('mainNav')?.classList.toggle('open')
        }}>
          <span></span><span></span><span></span>
        </button>
        <nav className="nav" id="mainNav">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => document.getElementById('mainNav')?.classList.remove('open')}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}