import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/sign-in/login';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import {AppRoute} from '../../const';
import { PROMO_FILM } from '../../const';
import { films } from '../../mocks/films';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} promoFilm={PROMO_FILM}/> } />
        <Route path={AppRoute.Login} element={<Login/> } />
        <Route path={AppRoute.MyList} element={<MyList/> } />
        <Route path={'/films/:id'} element={<Film/> } />
        <Route path={'/films/:id/review'} element={<AddReview/> } />
        <Route path={AppRoute.Player} element={<Player /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
