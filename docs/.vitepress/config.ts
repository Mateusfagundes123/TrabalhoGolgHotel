import { defineConfig } from 'vitepress';

// Veja mais opções em: https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: 'Gold Hotel - Documento de Visão',
  description:
    'Sistema de gestão de reservas, hóspedes e pagamentos para hotel.',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' }, // Página inicial com o Documento de Visão
      { text: 'Exemplo', link: '/example' }, // Página de exemplo
    ],

    sidebar: [
      {
        text: 'Conteúdo',
        items: [
          { text: 'Documento de Visão', link: '/' },
          { text: 'Exemplo', link: '/example' },
        ],
      },
    ],
  },
});
