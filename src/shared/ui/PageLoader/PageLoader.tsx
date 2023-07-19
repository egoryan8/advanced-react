import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { memo } from 'react';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;

}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
