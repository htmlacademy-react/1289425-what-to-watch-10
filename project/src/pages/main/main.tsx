import FilmCard from '../../components/film-card/film-card';
import { Link } from 'react-router-dom';
import { Films } from '../../types/film-types';
import { GenresTypes } from '../../types/genres-types';
import {genres} from '../../mocks/genres'
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import FilmCardInfo from '../../components/film-card-info/film-card-info';
import GenresCard from '../../components/genres-card/genres-card';

type Props = {
  films: Films[];
  promoFilm: PromoFilm;
}

type PromoFilm = {
  name: string;
  genre: string;
  date: number;
}

function Main({ films, promoFilm }: Props): JSX.Element {
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <FilmCardInfo name='The Grand Budapest Hotel' link='img/the-grand-budapest-hotel-poster.jpg'/>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((item) => (
              <GenresCard key={item.id} {...item} />
            ))}
          </ul>

          <div className="catalog__films-list">
            {films.map((item) => (
              <FilmCard key={item.id} {...item} />
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>

    </div>
  );
}

export default Main;
