// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yahilo Developer Docs',
  tagline: 'Build like Lego, but a lot more flexible.',
  url: 'https://docs.yahilo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yahilo', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/yahilo/docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Yahilo Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            label: "Docs",
            position: "right",
          },
          {
            href: "https://github.com/yahilo",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://adddiscordhere",
              },
              {
                label: "Twitter",
                href: "https://addtwitterhere",
              },
              {
                label: "GitHub",
                href: "https://addtwitterhere",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/yahilo/docs",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "support@yahilo.com",
                href: "mailto:support@yahilo.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yahilo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   appId: 'JY5ETLZH7X',
      //   apiKey: 'kmlkmlkmkklmklmklm',
      //   indexName: 'docs',
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
