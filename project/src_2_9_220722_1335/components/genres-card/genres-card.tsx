import { GenresTypes } from '../../types/genres-types';
import { Link } from 'react-router-dom';

function GenresCard({ name, link}: GenresTypes): JSX.Element {
  return(
    <li className="catalog__genres-item catalog__genres-item--active">
      <Link to={link} className="catalog__genres-link">{name}</Link>
    </li>
  );
}

export default GenresCard;
