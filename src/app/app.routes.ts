import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home | My Portfolio',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    title: 'About | My Portfolio',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'skills',
    title: 'Skills | My Portfolio',
    loadComponent: () => import('./pages/skills/skills').then(m => m.Skills),
  },
  {
    path: 'projects',
    title: 'Projects | My Portfolio',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'contact',
    title: 'Contact | My Portfolio',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
  },
  { path: '**', redirectTo: '' },
];