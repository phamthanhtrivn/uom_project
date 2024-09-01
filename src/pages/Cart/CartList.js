import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Col, Row } from 'antd';

function CartList() {
  const cart = useSelector((state) => state.cartReducer);


  return (
    <>
      <Row>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24}>
          <Row className="cart__header-title">
            <Col xxl={12} xl={12} lg={12} md={12} className="cart__header-info">
              <span>Sản phẩm</span>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} className="cart__header-price">
              <span>Giá</span>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} className="cart__header-quantity">
              <span>Số lượng</span>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} className="cart__header-line-total">
              <span>Tổng tiền</span>
            </Col>
          </Row>
          <Row className="cart__header-title--mobile">
            <Col span={24}>Thông tin sản phẩm</Col>
          </Row>
          <div className="cart__list">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CartList;
