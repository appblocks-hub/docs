
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
    component: ComponentCreator('/docs','acb'),
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
        path: '/docs/Platform Features/Sales and Purchases/License for free blocks',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/License for free blocks','70f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Manage Blocks',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Manage Blocks','8b9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Publishing a Block',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Publishing a Block','3f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Platform Features/Sales and Purchases/Using a Block from our Store',
        component: ComponentCreator('/docs/Platform Features/Sales and Purchases/Using a Block from our Store','e17'),
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
        path: '/docs/quickstart/start-from-template/connect github',
        component: ComponentCreator('/docs/quickstart/start-from-template/connect github','cde'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/connect remote repository',
        component: ComponentCreator('/docs/quickstart/start-from-template/connect remote repository','487'),
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
        path: '/docs/quickstart/start-from-template/login to appblocks',
        component: ComponentCreator('/docs/quickstart/start-from-template/login to appblocks','87d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/quickstart/start-from-template/Monitor the running blocks',
        component: ComponentCreator('/docs/quickstart/start-from-template/Monitor the running blocks','db8'),
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
        path: '/docs/quickstart/start-from-template/start your blocks',
        component: ComponentCreator('/docs/quickstart/start-from-template/start your blocks','82b'),
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
