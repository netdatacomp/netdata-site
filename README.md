# NetData Computadores — Site Novo (HTML)

Site institucional moderno em HTML + CSS + JS puro, pronto para subir no servidor de vocês.

## Estrutura de arquivos

```
netdata-site/
├── index.html          → Página inicial
├── servicos.html       → Serviços
├── suporte.html        → Suporte remoto
├── contato.html        → Contato + formulário
├── css/
│   └── style.css       → Estilos
├── js/
│   └── main.js         → Menu mobile + formulário
└── README.md
```

## O que o programador precisa fazer

1. **Subir os arquivos** no servidor (raiz do domínio ou pasta pública).
2. **Colocar o logo real**  
   Substituir o texto "NetData" pelo `<img>` do logo oficial em todas as páginas.
3. **Configurar o formulário de contato**  
   No arquivo `contato.html`, o formulário está com `action="#"`.  
   Configure para enviar por e-mail (PHP, Node, etc.) ou integração que vocês usarem.
4. **HTTPS**  
   Ativar certificado SSL no servidor (Let's Encrypt é gratuito).
5. **Imagens**  
   As seções que têm placeholders (💻 🏢) podem receber fotos reais do atendimento ou da loja.

## Melhorias já incluídas

- Design moderno e responsivo (mobile-first)
- Botão flutuante de WhatsApp
- Botão WhatsApp no menu
- Meta description e título otimizados para SEO
- H1 correto em todas as páginas
- Links `tel:` e `mailto:` clicáveis
- Menu hamburger no celular
- CTAs claros para gerar orçamento

## Número de WhatsApp usado

Todos os links apontam para: **(48) 3622-2726**  
(`https://wa.me/554836222726`)

Se o número mudar, basta buscar e substituir em todos os arquivos.

## Testar localmente

Abra o arquivo `index.html` no navegador ou use um servidor local simples:

```bash
npx serve .
```
