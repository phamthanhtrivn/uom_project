import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItems(props) {
  const { handleClickMenu } = props;
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" onClick={handleClickMenu}>
            TRANG CHỦ
          </NavLink>
        </li>
        <li>
          <NavLink to="/introduce" onClick={handleClickMenu}>
            GIỚI THIỆU
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" onClick={handleClickMenu}>
            SẢN PHẨM
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" onClick={handleClickMenu}>
            TIN TỨC
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleClickMenu}>
            LIÊN HỆ
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MenuItems;
