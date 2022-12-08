import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {Theme} from "app/providers/ThemeProvider";

export enum ThemeButton {
  CLEAR = 'clear',
  SECONDARY = 'secondary',
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
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
    </button>
  );
};
