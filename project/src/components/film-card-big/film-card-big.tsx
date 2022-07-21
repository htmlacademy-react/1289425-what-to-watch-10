function FilmCardBig(props:{link:string, title:string}): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={props.link} alt={props.title} />
    </div>
  );
}

export default FilmCardBig;
