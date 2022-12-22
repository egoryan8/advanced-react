import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
