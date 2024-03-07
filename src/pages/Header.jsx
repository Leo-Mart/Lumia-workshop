import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='page'>
      <h1>
        <Link to='/'>Lumia</Link>
      </h1>
      <h4>
        <Link to='/contact'>Kontakta oss</Link>
      </h4>
    </div>
  );
}

export default Header;
