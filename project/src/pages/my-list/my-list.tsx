import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmCard from '../../components/film-card/film-card';
import {films} from '../../mocks/films';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((item) => (
            <FilmCard key={item.id} {...item} />
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default MyList;
