import { NavLink } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__section-one">
          <div className="container">
            <p className="home__section-one__intro">XU HƯỚNG 2024</p>
            <h1 className="home__section-one__title">THIẾT KẾ NỘI THẤT</h1>
            <p className="home__section-one__desc">
              Xu hướng thiết kế nội thất Bắc Âu được giới trẻ ưu ái sử dụng trong những năm gần nhờ vào trào lưu sống
              xanh, bền vững và yêu môi trường với chi phí phù hợp
            </p>
            <NavLink to="/product" className="btn home__section-one__btn">MUA NGAY</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
