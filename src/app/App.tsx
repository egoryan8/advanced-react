import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;