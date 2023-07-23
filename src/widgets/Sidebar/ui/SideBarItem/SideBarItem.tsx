import { classNames } from 'shared/lib/classNames/classNames';
import { SideBarItemsList, SideBarItemType } from 'widgets/Sidebar/model/items';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
  item?: SideBarItemType;
  isCollapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const {
        item,
        isCollapsed,
    } = props;

    const { t } = useTranslation();

     return (
       <>
       {item &&
        <AppLink
            to={item?.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: isCollapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>}
       </>
    );
});
