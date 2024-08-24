import { NavLink } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import './Header.scss';

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <NavLink to="/">
                <img src="https://cdn1864.cdn-template-4s.com/media/logo/logo-dark-blue.png" alt="logo" />
              </NavLink>
            </div>
            <div className="header__menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/introduce">Introduce</NavLink>
                </li>
                <li>
                  <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                  <NavLink to="/news">News</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="header__icon">
              <NavLink to="/login">
                <UserOutlined />
              </NavLink>
              <NavLink to="/cart">
                <ShoppingCartOutlined />
              </NavLink>
              <MenuOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
