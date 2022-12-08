import {classNames} from "shared/lib/classNames/classNames";
import styles from './SideBar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(styles.SideBar, {[styles.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={styles.langSwitcher}/>
      </div>
    </div>
  );
};
