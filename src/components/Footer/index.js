import { FacebookOutlined, InstagramOutlined, TwitterOutlined, RedditOutlined } from '@ant-design/icons';
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__top">
              <ul>
                <li>
                  <img src="https://cdn1864.cdn-template-4s.com/media/logo/logo-dark-blue.png" alt="logo" />
                  <p>CÔNG TY TNHH PHẦN MỀM THÀNH TRÍ</p>
                </li>
                <li>
                  <p>Địa chỉ: 12 Nguyễn Văn Bảo, phường 4, quận Gò Vấp, TP. HCM</p>
                </li>
                <li>
                  <p>Điện thoại: +84 398 694 435</p>
                </li>
                <li>
                  <p>Email: phamthanhtri0712@gmail.com</p>
                </li>
                <li>
                  <p className="footer__icon-social">
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <TwitterOutlined />
                    <RedditOutlined />
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Liên kết</p>
                </li>
                <li>
                  <p>Trang chủ</p>
                </li>
                <li>
                  <p>Giới thiệu</p>
                </li>
                <li>
                  <p>Sản phẩm</p>
                </li>
                <li>
                  <p>Tin tức</p>
                </li>
                <li>
                  <p>Liên hệ</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Chính sách</p>
                </li>
                <li>
                  <p>Hướng dẫn mua hàng</p>
                </li>
                <li>
                  <p>Hướng dẫn đổi trả hàng</p>
                </li>
                <li>
                  <p>Hướng dẫn thanh toán</p>
                </li>
                <li>
                  <p>Chính sách giao hàng</p>
                </li>
                <li>
                  <p>Chính sách bảo mật</p>
                </li>
                <li>
                  <p>Chính sách khuyến mại</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Google Map</p>
                </li>
                <li>
                  <iframe
                    title="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8575624170016!2d106.68492447524777!3d10.822210558347122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e5496d03cf%3A0xa5b8e7395ec636b9!2zMTIgTmd1eeG7hW4gVsSDbiBC4bqjbywgUGjGsOG7nW5nIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1724572714424!5m2!1svi!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" // or "strict-origin-when-cross-origin"
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__bottom">Copyright &copy; 2024 Web4s. All rights reserved.</div>
    </>
  );
}

export default Footer;
