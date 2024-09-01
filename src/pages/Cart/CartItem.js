import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { Col, InputNumber, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteItem, updateQuantity } from '../../actions/cart';
import formatToVND from '../../utils/fomatMoney';
import { useNavigate } from 'react-router-dom';

function CartItem(props) {
  const { item } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa sản phẩm này?',
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
          text: 'Sản phẩm đã được xóa.',
          icon: 'success',
        });
        dispatch(deleteItem(item.id));
      }
    });
  };

  const inputChange = (quantity) => {
    dispatch(updateQuantity(item.id, quantity));
  };

  const handleProductDetail = () => {
    navigate(`/product-detail/${item.id}`);
  };

  return (
    <>
      <Row className="cart__item">
        <Col xxl={12} xl={12} lg={12} md={12} className="cart__info">
          <Row>
            <Col xxl={6} xl={6} lg={6} md={6} className="cart__image" onClick={handleProductDetail}>
              <img src={item.info.thumbnail} alt={item.info.title} />
            </Col>
            <Col xxl={18} xl={18} lg={18} md={18} className="cart__title">
              {item.info.title}
            </Col>
          </Row>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} className="cart__price">
          {formatToVND(parseFloat(item.info.price))} <small>VNĐ</small>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} className="cart__quantity">
          <InputNumber min={1} defaultValue={item.quantity} onChange={inputChange} />
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} className="cart__line-total">
          {formatToVND(parseFloat(item.info.price) * parseInt(item.quantity))} <small>VNĐ</small>
          <div className="delete">
            <button className="btn btn-delete" onClick={handleDelete}>
              X
            </button>
          </div>
        </Col>
      </Row>

      <Row className="cart__item--mobile">
        <Row>
          <Col sm={6} xs={6} className="cart__image" onClick={handleProductDetail}>
            <img src={item.info.thumbnail} alt={item.info.title} />
          </Col>
          <Col sm={18} xs={18} className="cart__title">
            <span>{item.info.title}</span>
            <button className="btn btn-delete" onClick={handleDelete}>
              X
            </button>
          </Col>
        </Row>
        <Row className="cart__price">
          <Col sm={12} xs={12}>Giá</Col>
          <Col sm={12} xs={12}>
            {formatToVND(parseFloat(item.info.price))} <small>VNĐ</small>
          </Col>
        </Row>
        <Row className="cart__quantity">
          <Col sm={12} xs={12}>Số lượng</Col>
          <Col sm={12} xs={12}>
            <InputNumber min={1} defaultValue={item.quantity} onChange={inputChange} />
          </Col>
        </Row>
        <Row className="cart__line-total">
          <Col sm={12} xs={12}>Thành Tiền</Col>
          <Col sm={12} xs={12}>
            {formatToVND(parseFloat(item.info.price) * parseInt(item.quantity))} <small>VNĐ</small>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default CartItem;
