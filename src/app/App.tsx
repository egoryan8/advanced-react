import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import {SideBar} from "widgets/Sidebar";
import './styles/index.scss';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar/>
      <div className="content-page">
        <SideBar/>
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;