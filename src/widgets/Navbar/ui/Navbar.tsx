import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsModalAuthOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} onClick={onToggleModal} theme={ButtonTheme.CLEAR}>
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isModalAuthOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Autem commodi, corporis deserunt est excepturi itaque mollitia
                nam nesciunt, odit omnis, quia sint totam? Alias architecto
                assumenda at autem consectetur corporis cum cupiditate,
                esse id illum iure laborum maiores minus molestiae natus
                neque nesciunt odio odit omnis perferendis provident
                quam quidem quisquam quod recusandae veniam vero voluptatum!
                Aliquam aliquid amet dolore illo illum iusto nisi optio sapiente suscipit.
                Adipisci deserunt dolores dolorum ducimus est exercitationem,
                fugiat illum inventore ipsam iure molestiae nobis obcaecati officiis quas,
                quasi quidem quis quo quos sit temporibus? Accusantium alias itaque quam
                quia quod saepe velit voluptatibus!
            </Modal>
        </div>
    );
};
