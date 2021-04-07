import React from 'react';
import Login from './Login/login';
import HomePage from './HomePage/home-page';
import CharPage from './CharPage/char-page';

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
  {
    path: '/home',
    name: 'homepage',
    isProtected: true,
    component: HomePage,
  },
  {
    path: '/comics/:id',
    name: 'comics',
    isProtected: true,
    component: CharPage,
  },
  {
    path: '/char/:id',
    name: 'char',
    isProtected: true,
    component: CharPage,
  },
];
