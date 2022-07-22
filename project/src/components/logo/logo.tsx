import {Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <div className="logo">
      <div className='logo__link--light'>
        <Link to={'/'} className="logo__link for">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
