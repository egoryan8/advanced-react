import { FC, lazy } from 'react';

export const AboutPageAsync = lazy<FC>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
