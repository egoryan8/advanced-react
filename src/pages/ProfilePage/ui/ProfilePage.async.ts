import { FC, lazy } from 'react';
import { ProfilePageProps } from 'pages/ProfilePage/ui/ProfilePage';

export const ProfilePageAsync = lazy <FC<ProfilePageProps>>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
