import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';

function HeaderIcons(props) {
  const { handleClickMenu } = props;
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className="header__icon">
        <NavLink to="/account">
          <UserOutlined />
        </NavLink>
        <Badge count={cart.length}>
          <NavLink to="/cart">
            <ShoppingCartOutlined />
          </NavLink>
        </Badge>
        <MenuOutlined onClick={handleClickMenu} />
      </div>
    </>
  );
}

export default HeaderIcons;
