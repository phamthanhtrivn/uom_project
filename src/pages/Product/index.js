import { getListProduct, params } from '../../services/productService';
import ProductItem from './ProductItem';
import { useEffect, useRef, useState } from 'react';
import { SearchOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import './Product.scss';
import { Dropdown } from 'antd';

function Product() {
  const paginationNumber = document.querySelector('.product__pagination--number');
  const inputRef = useRef();
  const [dataProduct, setDataProduct] = useState([]);
  const [arrowOrderDown, setArrowOrderDown] = useState(true);

  const items = [
    {
      label: 'Mặc định',
      key: '0',
    },
    {
      label: 'Sắp xếp theo tên từ A - Z',
      key: '1',
    },
    {
      label: 'Sắp xếp theo tên từ Z - A',
      key: '2',
    },
    {
      label: 'Giá từ thấp đến cao',
      key: '3',
    },
    {
      label: 'Giá từ cao đến thấp',
      key: '4',
    },
  ];

  const fetchApi = async () => {
    const response = await getListProduct();
    setDataProduct(response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      params.q = inputRef.current.value;
      fetchApi();
    }
  };

  const handleDropDown = () => {
    setArrowOrderDown(!arrowOrderDown);
  };

  const handleDropdownItemClick = (e) => {
    switch (e.key) {
      case '0':
        params.sort = '';
        params.order = '';
        break;
      case '1':
        params.sort = 'title';
        params.order = 'asc';
        break;
      case '2':
        params.sort = 'title';
        params.order = 'desc';
        break;
      case '3':
        params.sort = 'price';
        params.order = 'asc';
        break;
      case '4':
        params.sort = 'price';
        params.order = 'desc';
        break;
      default:
        break;
    }
    fetchApi();
  };

  const handlePagePrev = () => {
    if (params.page > 1) {
      params.page = params.page - 1;
      paginationNumber.innerHTML = params.page;
      fetchApi();
    }
  };

  const handlePageNext = () => {
    if (dataProduct.length > 0) {
      params.page = params.page + 1;
      paginationNumber.innerHTML = params.page;
      fetchApi();
    }
  };

  return (
    <>
      <div className="product">
        <div className="container">
          <h2>Sản phẩm</h2>
          <div className="product__filter">
            <div className="product__search">
              <SearchOutlined />
              <input onKeyDownCapture={handleSearch} ref={inputRef} type="text" placeholder="Từ khóa tìm kiếm" />
            </div>
            <div className="product__order">
              <Dropdown
                onClick={handleDropDown}
                menu={{
                  onClick: handleDropdownItemClick,
                  items: items,
                }}
                trigger="click"
              >
                <span>
                  <span>Sắp Xếp </span>
                  {arrowOrderDown ? <DownOutlined /> : <UpOutlined />}
                </span>
              </Dropdown>
            </div>
          </div>
          <div>
            {dataProduct.length > 0 ? (
              <div className="product__list">
                {dataProduct.map((item, index) => (
                    <ProductItem item={item} key={index} />
                  ))}
              </div>
            ) : (
              <>
                <h2>Không có sản phẩm</h2>
              </>
            )}
          </div>
          <div className="product__pagination">
            <button className="product__pagination--prev" onClick={handlePagePrev}>
              Prev
            </button>
            <div className="product__pagination--number">1</div>
            <button className="product__pagination--next" onClick={handlePageNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
