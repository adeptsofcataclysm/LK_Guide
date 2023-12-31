// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gentle Guide',
  tagline: 'Moar wipes!!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://adeptsofcataclysm.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/LK_Guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adeptsofcataclysm', // Usually your GitHub org/user name.
  projectName: 'LK_Guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/adeptsofcataclysm/LK_Guide/tree/source',
        },
        blog: false,
        theme: {customCss: require.resolve('./src/css/custom.css')},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Адепты Катаклизма',
          src: 'img/logo.png',
          href: '/adepts'
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'icc',
            label: 'ЦЛК',
          },
          {
              type: 'docSidebar',
              position: 'left',
              sidebarId: 'ulduar',
              label: 'Ульдуар',
            },
            {to: 'adepts', label: 'О нас', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Руководства',
            items: [
              {
                label: 'ЦЛК',
                to: '/',
              },
            {
              label: 'Ульдуар',
              to: '/ulduar/',
            },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://adeptsofcataclysm.github.io/LK_Guide/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/NPSjpTeWwt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gentlemanchik. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        lightTheme: prismThemes.dracula,
      },
    }),

    plugins: ['./plugins/plugin-wowhead'],
};

module.exports = config;
