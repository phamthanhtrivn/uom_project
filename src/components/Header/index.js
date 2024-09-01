import { NavLink } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import './Header.scss';
import { useState } from 'react';
import HeaderIcons from './HeaderIcons';
import MenuItems from './MenuItems';

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
              <MenuItems />
            </div>
            <HeaderIcons handleClickMenu={handleClickMenu} />

            <div className={openMenu ? "overplay": "display-none"} onClick={handleClickMenu}></div>
            <div className={openMenu ? "menu-mobile": "display-none"}>
              <CloseOutlined onClick={handleClickMenu}/>
              <MenuItems handleClickMenu={handleClickMenu} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
