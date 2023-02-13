
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
    component: ComponentCreator('/docs','e43'),
    routes: [
      {
        path: '/docs/CLI/commands',
        component: ComponentCreator('/docs/CLI/commands','8b2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/core-concepts/',
        component: ComponentCreator('/docs/core-concepts/','786'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/core-concepts/composition',
        component: ComponentCreator('/docs/core-concepts/composition','b69'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/core-concepts/type-of-blocks',
        component: ComponentCreator('/docs/core-concepts/type-of-blocks','42c'),
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
        path: '/docs/Platform Features/blocks-store/walkthrough',
        component: ComponentCreator('/docs/Platform Features/blocks-store/walkthrough','e90'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Buying a Block',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Buying a Block','bbe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Licences and Subscriptions',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Licences and Subscriptions','67c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Selling a Block',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Selling a Block','3da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Tracking your Sales and Orders',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Tracking your Sales and Orders','e37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Spaces',
        component: ComponentCreator('/docs/Platform Features/Spaces','aa9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/',
        component: ComponentCreator('/docs/quickstart/','ccf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/',
        component: ComponentCreator('/docs/quickstart/start-from-template/','c1c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/Config',
        component: ComponentCreator('/docs/quickstart/start-from-template/Config','b0b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/create your first block',
        component: ComponentCreator('/docs/quickstart/start-from-template/create your first block','6c1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/Starting your first App',
        component: ComponentCreator('/docs/quickstart/start-from-template/Starting your first App','c20'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/Sync',
        component: ComponentCreator('/docs/quickstart/start-from-template/Sync','b05'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/sdk/js-sdk',
        component: ComponentCreator('/docs/sdk/js-sdk','175'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/sdk/node-sdk',
        component: ComponentCreator('/docs/sdk/node-sdk','f93'),
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
