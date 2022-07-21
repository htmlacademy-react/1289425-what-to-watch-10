import Button from '../button/button';

function FilmCardInfoFilm(props:{name:string, link:string}): JSX.Element {
  return(
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={props.link} alt={props.name} width="218" height="327" ></img>
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{props.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">Drama</span>
          <span className="film-card__year">2014</span>
        </p>

        <div className="film-card__buttons">
          <Button name = 'Play' link="#play-s"/>
          <Button name = 'My List' link="#add"/>
          <Button name = 'Add review' link="#addreview"/>
        </div>
      </div>
    </div>
  );
}

export default FilmCardInfoFilm;
