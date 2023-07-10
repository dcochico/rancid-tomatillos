import '../css/Nav.css';
import '../images/avatar.png';

// const Nav = () => {
//   return (
//     <nav className='nav-bar'>
//       <h1 className='site-header'>Rancid Tomatillos</h1>
//       <img src='../images/avatar.png' />
//     </nav>
//   );
// }

const Nav = ({ preview }) => {
  return (
    <nav className='nav-bar'>
      {!preview ? 
      <div>
        <h1 className='site-header'>Rancid Tomatillos</h1>
        <img src='../images/avatar.png' />
      </div> :
      <p>{preview.title}</p>}
    </nav>
  );
}

export default Nav;