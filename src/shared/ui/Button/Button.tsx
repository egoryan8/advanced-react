import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        />
    );
};
