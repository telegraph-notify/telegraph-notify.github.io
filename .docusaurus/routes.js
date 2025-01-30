import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/case-study',
    component: ComponentCreator('/case-study', '133'),
    exact: true
  },
  {
    path: '/team',
    component: ComponentCreator('/team', '52b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '799'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5b0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cf8'),
            routes: [
              {
                path: '/docs/telegraph',
                component: ComponentCreator('/docs/telegraph', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '22c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
