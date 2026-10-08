# HackathonODS

Aplicação React que reúne as dez telas SkillTrack em uma experiência navegável.
Cada tela é um componente JSX na pasta correspondente, e a barra superior
permite alternar entre elas.

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite. Para gerar e testar a versão de
produção, use `npm run build` e `npm run preview`.

As telas também podem ser acessadas diretamente em `/tela/1` até `/tela/10`.

## Estrutura

```text
HackathonODS/
├── docs/
│   └── technical-precision/
│       └── DESIGN.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── screen-theme.css
│   └── styles.css
├── telas/
│   ├── tela1/Screen1.jsx
│   ├── tela2/Screen2.jsx
│   ├── tela3/Screen3.jsx
│   ├── tela4/Screen4.jsx
│   ├── tela5/Screen5.jsx
│   ├── tela6/Screen6.jsx
│   ├── tela7/Screen7.jsx
│   ├── tela8/Screen8.jsx
│   ├── tela9/Screen9.jsx
│   └── tela10/Screen10.jsx
├── index.html
└── package.json
```