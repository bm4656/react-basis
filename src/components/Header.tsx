import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='mb-4 flex space-x-5 border-b-2 py-2'>
      <Link to='/'>Home</Link>
      <Link to='/axios-query'>Axios Query</Link>
      <Link to='/react-query'>React Query</Link>
    </nav>
  );
}
