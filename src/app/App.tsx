import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>ПЕРЕКЛЮЧИТЬ ТЕМУ</button>
    </div>
  );
};

export default App;