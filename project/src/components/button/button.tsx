function Button(props:{ name:string, link:string}): JSX.Element {
  return(
    <button className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref={props.link}></use>
      </svg>
      <span>{props.name}</span>
    </button>
  );
}

export default Button;
