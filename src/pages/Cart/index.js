import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import './Cart.scss';
import { Col, Row } from 'antd';
import { deleteAll } from '../../actions/cart';
import formatToVND from '../../utils/fomatMoney';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const total = cart.reduce((sum, item) => {
    return parseFloat(sum + item.info.price * item.quantity);
  }, 0);

  const handleDeleteAll = () => {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa tất cả?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Không',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Xóa thành công!',
          text: 'Toàn bộ sản phẩm đã được xóa.',
          icon: 'success',
        });
        dispatch(deleteAll());
      }
    });
  };

  return (
    <>
      <div className="cart">
        <div className="container">
          <h2>Giỏ hàng của bạn</h2>

          {cart.length > 0 ? (
            <>
              <Row className="deleteAll">
                <Col span={24}>
                  <button className="btn btn-delete-all" onClick={handleDeleteAll}>
                    Xóa tất cả
                  </button>
                </Col>
              </Row>
              <CartList />
              <Row className="cart__total">
                <Col span={24}>
                  <span>Tổng tiền:</span> <span>{formatToVND(total)} <small>VNĐ</small></span>
                </Col>
              </Row>
              <Row className="cart__payment">
                <Col span={24}>
                  <button>Thanh Toán</button>
                </Col>
              </Row>
            </>
          ) : (
            <>Chưa có sản phẩm nào trong giỏ hàng</>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
