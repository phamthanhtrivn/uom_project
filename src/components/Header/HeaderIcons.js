import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';

function HeaderIcons(props) {
  const { handleClickMenu } = props;
  return (
    <>
      <div className="header__icon">
        <NavLink to="/login">
          <UserOutlined />
        </NavLink>
        <NavLink to="/cart">
          <ShoppingCartOutlined />
        </NavLink>
        <MenuOutlined onClick={handleClickMenu} />
      </div>
    </>
  );
}

export default HeaderIcons;
