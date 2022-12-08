import React, {Suspense} from 'react';
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
      <Suspense fallback="loading...">
        <Navbar/>
        <div className="content-page">
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;