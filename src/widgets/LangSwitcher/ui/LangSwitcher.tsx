import {classNames} from "shared/lib/classNames/classNames";
import styles from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import React from "react";

interface LangSwitcherProps {
  className?: string;
}


export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
  );
};
