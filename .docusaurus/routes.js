
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','f61'),
    routes: [
      {
        path: '/docs/bb-cli/Commands/bb-connect',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-connect','b6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-create',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-create','b1b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-exec',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-exec','6cf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-init',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-init','9b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-log',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-log','4b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-login',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-login','0c4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-ls',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-ls','a9b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-pull',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-pull','15c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-push',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-push','720'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-push-config',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-push-config','de7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-start',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-start','510'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-stop',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-stop','539'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/bb-sync',
        component: ComponentCreator('/docs/bb-cli/Commands/bb-sync','a25'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bb-cli/Commands/Overview',
        component: ComponentCreator('/docs/bb-cli/Commands/Overview','4c4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blocks-store/walkthrough',
        component: ComponentCreator('/docs/blocks-store/walkthrough','7c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/composability-vs-dependency',
        component: ComponentCreator('/docs/composability-vs-dependency','31d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Getting Started/Creating Blocks and Apps',
        component: ComponentCreator('/docs/Getting Started/Creating Blocks and Apps','d7b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Getting Started/Setting up the CLI',
        component: ComponentCreator('/docs/Getting Started/Setting up the CLI','dcd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Getting Started/Using the purchased block',
        component: ComponentCreator('/docs/Getting Started/Using the purchased block','9ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','99a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Overview/get-started',
        component: ComponentCreator('/docs/Overview/get-started','af4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Sales and Purchases/Buying a Block',
        component: ComponentCreator('/docs/Sales and Purchases/Buying a Block','496'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Sales and Purchases/Licences and Subscriptions',
        component: ComponentCreator('/docs/Sales and Purchases/Licences and Subscriptions','4df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Sales and Purchases/Selling a Block',
        component: ComponentCreator('/docs/Sales and Purchases/Selling a Block','df7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Sales and Purchases/Tracking your Sales and Orders',
        component: ComponentCreator('/docs/Sales and Purchases/Tracking your Sales and Orders','b1a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/SDK/js-sdk',
        component: ComponentCreator('/docs/SDK/js-sdk','f98'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/SDK/node-sdk',
        component: ComponentCreator('/docs/SDK/node-sdk','6d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Spaces',
        component: ComponentCreator('/docs/Spaces','0df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/types-of-blocks',
        component: ComponentCreator('/docs/types-of-blocks','9a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
