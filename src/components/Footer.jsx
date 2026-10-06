import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand logo-footer">
            <Link to="/" className="brand-logo" aria-label="NetData Computadores">
              <img src={logo} alt="NetData Computadores" width="210" height="60" />
            </Link>
            <p>Assistência técnica de computadores em Tubarão/SC desde 1996. Atendimento em domicílio e suporte remoto.</p>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/suporte">Suporte remoto</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="tel:+554836222726">(48) 3622-2726</a></li>
              <li><a href="mailto:suporte@netdatacomputadores.com.br">suporte@netdatacomputadores.com.br</a></li>
              <li>Rua Osvaldo Cruz, 219 - Centro<br />88701-060 - Tubarão/SC</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">NetData Computadores — Assistência Técnica © {new Date().getFullYear()}. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}