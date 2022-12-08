import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/Main.page.async";

import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;