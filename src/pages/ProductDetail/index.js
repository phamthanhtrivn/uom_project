import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/productService";
import { InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity2 } from "../../actions/cart";
import formatToVND from "../../utils/fomatMoney";
import { TruckOutlined, LikeOutlined, CheckCircleOutlined } from "@ant-design/icons";
import "./ProductDetail.scss";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const cart = useSelector(state => state.cartReducer);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProduct(params.id);
      setProductDetail(result);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputChange = (e) => {
    e.preventDefault();
    let quantity = inputRef.current.value;
    if (cart.some(itemCart => itemCart.id === productDetail.id)) {
      dispatch(updateQuantity2(productDetail.id, parseInt(quantity)));
    }
    else {
      dispatch(addToCart(productDetail.id, productDetail, parseInt(quantity)));
    }
  }

  return (
    <>
      <div className="product-detail">
        <div className="product-detail__box product-detail__image">
          <img src={productDetail.thumbnail} alt={productDetail.title} />
        </div>
        <div className="product-detail__box product-detail__description">
          <h3 className="title">{productDetail.title}</h3>
          <p className="price">{formatToVND(parseFloat(productDetail.price))} <small>VNĐ</small></p>
          <p className="desc">{productDetail.description}</p>
          <div className="product-detail__add-cart">
            <InputNumber ref={inputRef} min={1} defaultValue={1}/>
            <button className="btn btn-add" onClick={inputChange}>THÊM VÀO GIỎ HÀNG</button>
          </div>
        </div>
        <div className="product-detail__box product-detail__advisory">
          <div className="product-detail__advisory__box">
            <h4>CHÚNG TÔI LUÔN Ở ĐÂY ĐỂ HỖ TRỢ BẠN</h4>
            <p className="title-hotliene">Hotline tư vấn</p>
            <p className="hotline">1900 6680</p>
          </div>
          <div className="product-detail__advisory__box">
            <div className="product-detail__advisory__box__icon">
              <TruckOutlined />
            </div>
            <div className="product-detail__advisory__box__content">
              <div className="product-detail__advisory__box__content--title">
                Giao hàng ngay
              </div>
              <div className="product-detail__advisory__box__content--desc">
                Thanh toán tại nhà
              </div>
            </div>
          </div>
          <div className="product-detail__advisory__box">
            <div className="product-detail__advisory__box__icon">
              <LikeOutlined />
            </div>
            <div className="product-detail__advisory__box__content">
              <div className="product-detail__advisory__box__content--title">
                Bảo hành chính hãng
              </div>
              <div className="product-detail__advisory__box__content--desc">
                Đổi máy mới 100% (nếu lỗi NSX)
              </div>
            </div>
          </div>
          <div className="product-detail__advisory__box">
            <div className="product-detail__advisory__box__icon">
              <CheckCircleOutlined />
            </div>
            <div className="product-detail__advisory__box__content">
              <div className="product-detail__advisory__box__content--title">
                Dịch vụ Tốt - Nhanh
              </div>
              <div className="product-detail__advisory__box__content--desc">
                Lắp mới cho khách dùng trong thời gian bảo hành
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;