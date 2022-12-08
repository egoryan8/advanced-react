import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('App', {}, [theme])}>
      <button onClick={toggleTheme}>ПЕРЕКЛЮЧИТЬ ТЕМУ</button>
      <Link to={'/'}>
        Главная
      </Link>
      <Link to={'/about'}>
        О сайте
      </Link>
      <AppRouter/>
    </div>
  );
};

export default App;