
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
    component: ComponentCreator('/docs','ca8'),
    routes: [
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
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','99a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/types-of-blocks',
        component: ComponentCreator('/docs/types-of-blocks','9a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-connect',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-connect','8b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-create',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-create','851'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-exec',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-exec','a75'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-init',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-init','5d9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-log',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-log','bca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-login',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-login','9f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-ls',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-ls','b94'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-pull',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-pull','e61'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-push',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-push','b4f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-push-config',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-push-config','5bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-start',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-start','33e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-stop',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-stop','736'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-cli/Commands/yah-sync',
        component: ComponentCreator('/docs/yah-cli/Commands/yah-sync','89c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-SDKs/yah-js-sdk',
        component: ComponentCreator('/docs/yah-SDKs/yah-js-sdk','cce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/yah-SDKs/yah-node-sdk',
        component: ComponentCreator('/docs/yah-SDKs/yah-node-sdk','91d'),
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
