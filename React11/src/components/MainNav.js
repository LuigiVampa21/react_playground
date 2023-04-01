import { Link, NavLink, useNavigate } from 'react-router-dom';

import classes from './MainNav.module.css';

function MainNav() {
  // const navigate = useNavigate();

  // const navigateHandler = () => {

  // }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/" className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
              end
            >Home</NavLink>
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}
            <NavLink to="products" className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
              end
            >Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;