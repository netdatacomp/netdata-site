import PageMeta from '../components/PageMeta'
import { useState } from 'react'

const Icon = ({ children }) => (
  <span className="contact-pro-icon" aria-hidden="true">{children}</span>
)

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })

  const submit = e => {
    e.preventDefault()
    const m = [
      'Olá! Gostaria de atendimento da NetData Computadores.',
      '',
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Assunto: ${form.assunto}`,
      `Mensagem: ${form.mensagem}`
    ].join('\\n')
    window.open('https://wa.me/554836222726?text=' + encodeURIComponent(m), '_blank', 'noopener')
  }

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <>
      <PageMeta
        title="Contato | NetData Computadores"
        description="Entre em contato com a NetData Computadores por telefone, WhatsApp ou formulário."
      />

      <style>{`
        .contact-pro-hero{position:relative;min-height:470px;display:flex;align-items:center;overflow:hidden;background:#07111f}
        .contact-pro-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
        .contact-pro-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,12,24,.94) 0%,rgba(4,12,24,.78) 48%,rgba(4,12,24,.38) 100%)}
        .contact-pro-content{position:relative;z-index:2;max-width:720px;padding:90px 0 85px;color:#fff}
        .contact-pro-kicker{display:inline-flex;align-items:center;gap:9px;padding:8px 13px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(255,255,255,.08);font-size:.82rem;font-weight:700;letter-spacing:.04em}
        .contact-pro-kicker i{width:8px;height:8px;border-radius:50%;background:#28d17c;box-shadow:0 0 0 5px rgba(40,209,124,.12)}
        .contact-pro-content h1{margin:20px 0 12px;font-size:clamp(2.4rem,5vw,4.4rem);line-height:1.02;letter-spacing:-.04em}
        .contact-pro-content p{max-width:610px;margin:0;color:rgba(255,255,255,.78);font-size:1.12rem;line-height:1.7}
        .contact-pro-wrap{padding:76px 0;background:#f7f9fc}
        .contact-pro-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr);gap:28px;align-items:stretch}
        .contact-pro-card{background:#fff;border:1px solid #e7ebf1;border-radius:22px;box-shadow:0 18px 50px rgba(15,35,60,.08)}
        .contact-pro-info{padding:34px}
        .contact-pro-title{margin:0 0 8px;font-size:1.55rem;color:#102033;letter-spacing:-.02em}
        .contact-pro-subtitle{margin:0 0 28px;color:#697586;line-height:1.6}
        .contact-pro-photo{position:relative;height:250px;border-radius:16px;overflow:hidden;margin-bottom:30px;background:#102033}
        .contact-pro-photo img{width:100%;height:100%;object-fit:cover}
        .contact-pro-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(5,18,34,.55))}
        .contact-pro-photo-label{position:absolute;z-index:2;left:20px;bottom:18px;color:#fff;font-weight:700;font-size:.92rem}
        .contact-pro-items{display:grid;gap:10px}
        .contact-pro-item{display:flex;gap:15px;padding:15px 4px;border-bottom:1px solid #edf0f4}
        .contact-pro-item:last-child{border-bottom:0}
        .contact-pro-icon{flex:0 0 46px;width:46px;height:46px;display:grid;place-items:center;border-radius:13px;background:#edf5ff;color:#1264c8}
        .contact-pro-icon svg{width:21px;height:21px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
        .contact-pro-item strong{display:block;color:#18283b;font-size:.92rem;margin-bottom:4px}
        .contact-pro-item a,.contact-pro-item span{color:#657285;text-decoration:none;line-height:1.55}
        .contact-pro-item a:hover{color:#1264c8}
        .contact-pro-wa{display:inline-flex;align-items:center;gap:9px;margin-top:22px;padding:13px 18px;border-radius:11px;background:#18a957;color:#fff!important;text-decoration:none!important;font-weight:700;box-shadow:0 8px 20px rgba(24,169,87,.18)}
        .contact-pro-form{padding:34px}
        .contact-pro-form-head{display:flex;align-items:flex-start;justify-content:space-between;gap:15px;margin-bottom:25px}
        .contact-pro-form-badge{padding:7px 10px;border-radius:8px;background:#f0f6ff;color:#1264c8;font-size:.75rem;font-weight:700;white-space:nowrap}
        .contact-pro-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .contact-pro-field{margin-bottom:0}
        .contact-pro-field.full{grid-column:1/-1}
        .contact-pro-field label{display:block;margin:0 0 8px;color:#26384c;font-size:.86rem;font-weight:700}
        .contact-pro-field input,.contact-pro-field select,.contact-pro-field textarea{width:100%;box-sizing:border-box;border:1px solid #dfe5ec;border-radius:11px;background:#fbfcfe;padding:13px 14px;color:#1c2c40;font:inherit;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
        .contact-pro-field textarea{min-height:138px;resize:vertical}
        .contact-pro-field input:focus,.contact-pro-field select:focus,.contact-pro-field textarea:focus{border-color:#4c91e8;background:#fff;box-shadow:0 0 0 4px rgba(76,145,232,.11)}
        .contact-pro-submit{width:100%;margin-top:20px!important;display:flex!important;align-items:center;justify-content:center;gap:10px}
        .contact-pro-note{margin:12px 0 0;text-align:center;color:#8792a1;font-size:.78rem;line-height:1.5}
        @media(max-width:900px){.contact-pro-grid{grid-template-columns:1fr}.contact-pro-hero{min-height:430px}}
        @media(max-width:600px){.contact-pro-content{padding:70px 0}.contact-pro-wrap{padding:48px 0}.contact-pro-info,.contact-pro-form{padding:22px}.contact-pro-form-grid{grid-template-columns:1fr}.contact-pro-field.full{grid-column:auto}.contact-pro-photo{height:210px}}
      `}</style>

      <section className="contact-pro-hero">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90"
          alt="Equipe profissional em reunião"
        />
        <div className="container contact-pro-content">
          <span className="contact-pro-kicker"><i /> Atendimento profissional e próximo</span>
          <h1>Vamos conversar?</h1>
          <p>Conte o que você precisa. Nossa equipe está pronta para orientar, tirar dúvidas e encontrar a melhor solução para sua empresa ou seu equipamento.</p>
        </div>
      </section>

      <section className="contact-pro-wrap">
        <div className="container contact-pro-grid">
          <div className="contact-pro-card contact-pro-info">
            <div className="contact-pro-photo">
              <img
                src="https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?auto=format&fit=crop&w=1400&q=90"
                alt="Técnico realizando manutenção em equipamento de informática"
                loading="lazy"
              />
              <span className="contact-pro-photo-label">Tecnologia, suporte técnico e confiança.</span>
            </div>

            <h2 className="contact-pro-title">Fale com a NetData</h2>
            <p className="contact-pro-subtitle">Escolha o canal mais conveniente. Teremos prazer em atender você.</p>

            <div className="contact-pro-items">
              <div className="contact-pro-item">
                <Icon><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg></Icon>
                <div><strong>Telefone / WhatsApp</strong><a href="tel:+554836222726">(48) 3622-2726</a></div>
              </div>
              <div className="contact-pro-item">
                <Icon><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></Icon>
                <div><strong>E-mail</strong><a href="mailto:suporte@netdatacomputadores.com.br">suporte@netdatacomputadores.com.br</a></div>
              </div>
              <div className="contact-pro-item">
                <Icon><svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></Icon>
                <div><strong>Endereço</strong><span>Rua Osvaldo Cruz, 219 - Centro<br/>88701-060 - Tubarão/SC</span></div>
              </div>
              <div className="contact-pro-item">
                <Icon><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></Icon>
                <div><strong>Horário de atendimento</strong><span>Segunda a sexta, das 8h às 18h</span></div>
              </div>
            </div>

            <a href="https://wa.me/554836222726?text=Olá! Gostaria de atendimento." className="contact-pro-wa" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.36L3.5 20l1.14-4.03A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.7 8.2c.2-.45.42-.46.78-.46h.48c.17 0 .35.07.43.28l.63 1.54c.08.2.05.36-.08.52l-.47.58c-.12.14-.16.3-.06.48.35.61.87 1.13 1.48 1.48.18.1.34.06.48-.06l.58-.47c.16-.13.32-.16.52-.08l1.54.63c.21.08.28.26.28.43v.48c0 .36-.01.58-.46.78-.44.2-1.55.37-3.18-.67-1.63-1.04-2.69-2.62-2.95-3.06-.26-.44-.68-1.62-.02-2.38Z"/></svg>
              Falar no WhatsApp
            </a>
          </div>

          <div className="contact-pro-card contact-pro-form">
            <div className="contact-pro-form-head">
              <div>
                <h2 className="contact-pro-title">Envie uma mensagem</h2>
                <p className="contact-pro-subtitle">Preencha os dados e fale diretamente com nossa equipe.</p>
              </div>
              <span className="contact-pro-form-badge">Resposta rápida</span>
            </div>

            <form onSubmit={submit}>
              <div className="contact-pro-form-grid">
                <div className="contact-pro-field">
                  <label htmlFor="nome">Nome *</label>
                  <input id="nome" name="nome" value={form.nome} onChange={change} required placeholder="Seu nome completo" />
                </div>
                <div className="contact-pro-field">
                  <label htmlFor="telefone">Telefone / WhatsApp *</label>
                  <input type="tel" id="telefone" name="telefone" value={form.telefone} onChange={change} required placeholder="(48) 99999-9999" />
                </div>
                <div className="contact-pro-field full">
                  <label htmlFor="email">E-mail *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={change} required placeholder="seu@email.com" />
                </div>
                <div className="contact-pro-field full">
                  <label htmlFor="assunto">Assunto *</label>
                  <select id="assunto" name="assunto" value={form.assunto} onChange={change} required>
                    <option value="">Selecione o assunto...</option>
                    <option value="Solicitar orçamento">Solicitar orçamento</option>
                    <option value="Manutenção / Reparo">Manutenção / Reparo</option>
                    <option value="Instalação de rede">Instalação de rede</option>
                    <option value="Suporte remoto">Suporte remoto</option>
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                </div>
                <div className="contact-pro-field full">
                  <label htmlFor="mensagem">Mensagem *</label>
                  <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={change} required placeholder="Descreva brevemente o problema ou a sua necessidade..." />
                </div>
              </div>
              <button type="submit" className="btn btn-blue contact-pro-submit">
                Enviar mensagem
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
              <p className="contact-pro-note">Ao enviar, a mensagem será preparada para atendimento via WhatsApp.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
