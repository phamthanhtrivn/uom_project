import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './Contact.scss';

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h1>Liên hệ với chúng tôi</h1>
          <div className="contact__box">
            <div className="contact__box-item">
              <div className="contact__box-item--icon">
                <PhoneOutlined />
              </div>
              <div className="contact__box-item--content">
                <p>Hotline:</p>
                <p>1900 6680</p>
              </div>
            </div>
            <div className="contact__box-item">
              <div className="contact__box-item--icon">
                <MailOutlined />
              </div>
              <div className="contact__box-item--content">
                <p>Email:</p>
                <p>phamthanhtri0712@gmail.com</p>
              </div>
            </div>
            <div className="contact__box-item">
              <div className="contact__box-item--icon">
                <EnvironmentOutlined />
              </div>
              <div className="contact__box-item--content">
                <p>Địa chỉ:</p>
                <p>12 Nguyễn Văn Bảo, phường 4, Gò Vấp, Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          <h1>Gửi yêu cầu</h1>
          <div className="contact__form">
            <form>
              <input type="text" placeholder='Họ và tên'/>
              <input type="tel" placeholder='Số điện thoại'/>
              <input type="email" placeholder="Email"/>
              <textarea placeholder="Nội dung..."></textarea>
              <button className="btn btn-contact">GỬI TIN NHẮN</button>
            </form>
            <div className="contact__form--image">
              <img src="https://noithat06.web4s.com.vn/templates/fashion03/assets/media/banner/shop_img28.jpg" alt='shop_img28'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
