import React from 'react';
import Login from './Login/login';
import HomePage from './HomePage/home-page';
import CharPage from './CharPage/char-page';
import ComicsPage from './ComicsPage/comics-page';
import UserPage from './UserPage/user-page';
import DefaultNotFound from './Default/not-found';

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
    component: ComicsPage,
  },
  {
    path: '/characters/:id',
    name: 'characters',
    isProtected: true,
    component: CharPage,
  },
  {
    path: '/user/acc',
    name: 'user',
    isProtected: true,
    component: UserPage,
  },
  {
    path: '',
    name: 'default',
    isProtected: false,
    component: DefaultNotFound,
  },
];
