import { NavLink } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './Header.scss';
import { useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className="header">
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
                  <NavLink to="/">TRANG CHỦ</NavLink>
                </li>
                <li>
                  <NavLink to="/introduce">GIỚI THIỆU</NavLink>
                </li>
                <li>
                  <NavLink to="/product">SẢN PHẨM</NavLink>
                </li>
                <li>
                  <NavLink to="/news">TIN TỨC</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">LIÊN HỆ</NavLink>
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
              <MenuOutlined onClick={handleClickMenu}/>
            </div>

            <div className={openMenu ? "overplay": "display-none"} onClick={handleClickMenu}></div>
            <div className={openMenu ? "menu-mobile": "display-none"}>
              <CloseOutlined onClick={handleClickMenu}/>
              <ul>
                <li>
                  <NavLink to="/" onClick={handleClickMenu}>TRANG CHỦ</NavLink>
                </li>
                <li>
                  <NavLink to="/introduce" onClick={handleClickMenu}>GIỚI THIỆU</NavLink>
                </li>
                <li>
                  <NavLink to="/product" onClick={handleClickMenu}>SẢN PHẨM</NavLink>
                </li>
                <li>
                  <NavLink to="/news" onClick={handleClickMenu}>TIN TỨC</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={handleClickMenu}>LIÊN HỆ</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
