
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs','7d3'),
    routes: [
      {
        path: '/docs/CLI/commands',
        component: ComponentCreator('/docs/CLI/commands','8b2'),
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
        path: '/docs/core-concepts/core',
        component: ComponentCreator('/docs/core-concepts/core','e60'),
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
        path: '/docs/quickstart/start-from-template/setup',
        component: ComponentCreator('/docs/quickstart/start-from-template/setup','207'),
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
