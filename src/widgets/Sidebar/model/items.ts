import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/home.svg';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import ProfilePageIcon from 'shared/assets/icons/profile.svg';

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainPageIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutPageIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfilePageIcon,
        text: 'Профиль',
    },
];
