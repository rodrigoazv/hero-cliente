import React from 'react';
import Login from './Login';

interface RouteDataItem {
  path?: string;
  name?: string;
  isProtected?: boolean;
  component?: React.FC;
}

export const routes: RouteDataItem[] = [
  {
    path: '/',
    name: 'login',
    isProtected: false,
    component: Login,
  },
];
