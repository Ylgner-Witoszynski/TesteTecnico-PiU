# BookHub - Página de Obrigado com Download de E-book

Uma página responsiva e moderna para apresentar e-books com funcionalidade de download automático com countdown.

## 🚀 Como Visualizar/Executar o Projeto

### Opção 1: Abrir localmente

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` diretamente no navegador
   - Duplo clique em `index.html`, ou
   - Arraste o arquivo para a janela do navegador

### Opção 2: Usar um servidor local (recomendado)

Para usar estas opções, certifique-se de ter o ambiente correspondente instalado:

- **Com Python 3 (requer Python 3 instalado):**
  ```bash
  python -m http.server 8000
  ```
- **Com Python 2 (requer Python 2 instalado):**
  ```bash
  python -m SimpleHTTPServer 8000
  ```
- **Com Node.js (requer Node.js e o pacote `http-server`):**
  ```bash
  npx http-server
  ```

Depois acesse: `http://localhost:8000`

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos com:
  - Variáveis CSS (custom properties)
  - Flexbox para layout
  - Media queries para responsividade
  - Animações e transições suaves
- **JavaScript Vanilla** - Funcionalidades sem dependências externas
- **Google Fonts** - Fonte Inter para melhor tipografia
- **SVG** - Ícones escaláveis e leves

## 🎯 Decisões Técnicas

### 1. **HTML Semântico com ARIA**

- Uso de tags semânticas (`<header>`, `<main>`, `<footer>`, `<section>`)
- Atributos ARIA (`aria-label`, `aria-labelledby`, `aria-live`) para melhor acessibilidade
- Estrutura clara e fácil de entender

### 2. **CSS Modular e Organizado**

```css
/* Estrutura do CSS */
- RESET + BASE
- VARIABLES (cores em variáveis CSS)
- LAYOUT
- HEADER, HERO, CARD, DOWNLOAD, BUTTON, FOOTER
- RESPONSIVE (media queries para diferentes tamanhos)
```

- Variáveis CSS para reutilização de cores
- Comentários claros separando seções
- Mobile-first approach (começa desktop, depois responsividade)

### 3. **Responsividade em Camadas**

- **Desktop**: Header horizontal com logo e menu lado a lado
- **Tablet (≤768px)**: Menu embaixo do logo, espaçamentos reduzidos
- **Mobile (≤375px)**: Layout totalmente otimizado com:
  - Header empilhado (logo + menu vertical)
  - Tamanhos de fonte menores
  - Espaçamentos reduzidos
  - Botão e elementos adaptativos

### 4. **JavaScript Limpo e Funcional**

- Sem dependências externas (vanilla JavaScript)
- Funcionalidade de countdown automático (5 segundos)
- Simulação de download de PDF
- Estados visuais do botão (normal, desabilitado, concluído)
- Event listeners bem organizados

### 5. **Acessibilidade**

- Semântica HTML correta
- Atributos ARIA para leitores de tela
- Contraste adequado de cores
- Navegação por teclado suportada
- Labels descritivos em elementos interativos

### 6. **Performance**

- Sem imagens rasterizadas (SVG para ícones)
- CSS otimizado e bem organizado
- JavaScript minimalista
- Fonte do Google Fonts (CDN)
- Sem frameworks pesados

## 📁 Estrutura do Projeto

```
projeto/
├── index.html          # Estrutura HTML
├── style.css           # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── icons/              # Ícones SVG
│   ├── logo.svg
│   ├── hero card icon.svg
│   ├── pdf.svg
│   ├── pages.svg
│   ├── tamanho.svg
│   └── download.svg
└── README.md           # Este arquivo
```

## 🎨 Features

✅ Design responsivo mobile-first  
✅ Countdown automático de 5 segundos  
✅ Download de e-book com simulação  
✅ Feedback visual ao usuário  
✅ Acessível e semântico  
✅ Menu footer com links organizados  
✅ Compatível com navegadores modernos

## 🔧 Customização

### Alterar cores

Edite as variáveis CSS em `style.css`:

```css
:root {
  --primary: #2563eb; /* Cor principal */
  --gray-900: #111827; /* Textos escuros */
  --dark-bg: #1f2937; /* Fundo escuro */
  /* ... outras cores */
}
```

### Alterar tempos

Em `script.js`:

```javascript
let countdown = 5; // Mude para o tempo desejado (em segundos)
```

### Mudar arquivo do e-book

Em `script.js`, altere o link do PDF:

```javascript
link.href = "seu-arquivo.pdf"; // Adicione seu arquivo PDF
link.download = "nome-arquivo.pdf";
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Navegadores mobile (iOS Safari, Chrome Android)

## 📝 Licença

Este projeto foi fornecido como teste técnico pela empresa PiU Comunica
