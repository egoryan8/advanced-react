import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors';
import { userActions } from 'entities/User';
import { d } from '@pmmmwh/react-refresh-webpack-plugin/types/options';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsModalAuthOpen(false);
    }, []);

    const onOpenAuthModal = useCallback(() => {
        setIsModalAuthOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button className={cls.links} onClick={onLogout} theme={ButtonTheme.CLEAR}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} onClick={onOpenAuthModal} theme={ButtonTheme.CLEAR}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isModalAuthOpen} onClose={onCloseAuthModal} />
        </div>
    );
};
