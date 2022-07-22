import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/sign-in/login';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import { PROMO_FILM } from '../../const';
import { films } from '../../mocks/films';
// eslint-disable-next-line
//пока нет данных по выбранному фильму

const title = 'The Grand Budapest Hotel';
const genre = 'Drama';
const date = 2014;
const link = 'img/bg-the-grand-budapest-hotel.jpg';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} promoFilm={PROMO_FILM}/> } />
        <Route path={AppRoute.Login} element={<Login/> } />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList/>
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={<Film title1={title} genre1={genre} date1={date} link1={link} /> } />
        <Route path={'/films/:id/review'} element={<AddReview/> } />
        <Route path={AppRoute.Player} element={<Player /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
