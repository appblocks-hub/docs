
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
    component: ComponentCreator('/docs','ac3'),
    routes: [
      {
        path: '/docs/blox-cli/Commands/blox-connect',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-connect','dec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-create',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-create','504'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-exec',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-exec','206'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-init',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-init','846'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-log',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-log','c24'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-login',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-login','f16'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-ls',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-ls','eed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-pull',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-pull','904'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-push',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-push','de1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-push-config',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-push-config','b61'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-start',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-start','e27'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-stop',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-stop','431'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-cli/Commands/blox-sync',
        component: ComponentCreator('/docs/blox-cli/Commands/blox-sync','e88'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-sdk/blox-js-sdk',
        component: ComponentCreator('/docs/blox-sdk/blox-js-sdk','7e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-sdk/blox-nodejs-sdk',
        component: ComponentCreator('/docs/blox-sdk/blox-nodejs-sdk','004'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/blox-store/walkthrough',
        component: ComponentCreator('/docs/blox-store/walkthrough','415'),
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
        path: '/docs/types-of-blox',
        component: ComponentCreator('/docs/types-of-blox','6c1'),
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
