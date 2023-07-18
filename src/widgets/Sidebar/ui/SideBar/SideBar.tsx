import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SideBarItemsList } from '../../model/items';
import { SideBarItem } from '../../ui/SideBarItem/SideBarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;

}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {t(collapsed ? '>' : '<')}
            </Button>
            <div className={cls.links}>
                {SideBarItemsList.map((i) => (
                    <SideBarItem item={i} isCollapsed={collapsed} />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    isShort={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};
