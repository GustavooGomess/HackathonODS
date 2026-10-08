# HackathonODS

Aplicação React que reúne as dez telas SkillTrack em uma experiência navegável.
Cada tela continua em seu HTML original e é exibida pela aplicação; a barra
superior permite alternar entre elas sem remover os estilos ou interações
existentes.

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite. Para gerar e testar a versão de
produção, use `npm run build` e `npm run preview`.

## Estrutura

```text
HackathonODS/
├── docs/
│   └── technical-precision/
│       └── DESIGN.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── telas/
│   ├── tela1/tela1.html
│   ├── tela2/tela2.html
│   ├── tela3/tela3.html
│   ├── tela4/tela4.html
│   ├── tela5/tela5.html
│   ├── tela6/tela6.html
│   ├── tela7/tela7.html
│   ├── tela8/tela8.html
│   ├── tela9/tela9.html
│   └── tela10/tela10.html
├── index.html
└── package.json
```