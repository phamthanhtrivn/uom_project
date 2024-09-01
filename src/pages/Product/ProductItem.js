import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity2 } from "../../actions/cart";
import formatToVND from "../../utils/fomatMoney";
import { useNavigate } from "react-router-dom"

function ProductItem(props) {
  const { item } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer);

  const handleAddToCart = () => {
    if (cart.some(itemCart => itemCart.id === item.id)) {
      dispatch(updateQuantity2(item.id, 1));
    }
    else {
      dispatch(addToCart(item.id, item));
    }
  };

  const handleProductDetail = () => {
    navigate(`/product-detail/${item.id}`);
  }


  return (
    <>
      <div className="product__item">
        <div className="product__image" onClick={handleProductDetail}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="product__content">
          <div className="product__title">
            {item.title}
          </div>
          <div className="product__price">
            {formatToVND(parseFloat(item.price))} <small>VNĐ</small>
          </div>
        </div>
        <div className="product__icon">
          <ShoppingCartOutlined onClick={handleAddToCart} className="product__icon__item" />
          <EyeOutlined className="product__icon__item" />
        </div>
      </div>
    </>
  )
}

export default ProductItem;