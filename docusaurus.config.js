// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appblocks Developer Docs',
  tagline: 'Build tools the world can build upon, Block by Block.',
  url: 'https://docs.appblocks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'appblocks', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/appblocks-hub/docs/tree/main/",
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
          alt: "Appblocks Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "#",
            label: "Appblocks Store",
            position: "right",
            className:"primary-link-underline"
          },
          {
            href: "https://github.com/appblocks-hub",
            label: "GitHub",
            position: "right",
            className:"github-btn"
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Discord",
      //           href: "https://adddiscordhere",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://addtwitterhere",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://addtwitterhere",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Legal",
      //       items: [
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/appblocks-hub/docs",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Contact Us",
      //       items: [
      //         {
      //           label: "support@appblocks.com",
      //           href: "mailto:support@appblocks.com",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Appblocks.`,
      // },
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
