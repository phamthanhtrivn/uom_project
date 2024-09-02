import './Account.scss';

function Account() {
  return (
    <>
      <div className="account">
        <div className="container">
          <div className="account__content">
            <div className="account__login">
              <p className="account__title">ĐĂNG NHẬP</p>
              <form className="account__login--form">
                <label htmlFor="emailLogin">Email</label>
                <input id="emailLogin" name="email" type="email" placeholder="Email" />
                <label htmlFor="passwordLogin">Mật Khẩu</label>
                <input id="passwordLogin" name="password" type="password" placeholder="Mật Khẩu" />
                <button className="btn btn-submit" type="submit">ĐĂNG NHẬP</button>
              </form>
            </div>
            <div className="account__register">
              <p className="account__title">ĐĂNG KÝ</p>
              <form className="account__register--form">
                <label htmlFor="lastName">Họ đệm</label>
                <input id="lastName" name="lastName" type="text" placeholder="Họ đệm" />
                <label htmlFor="firstName">Tên</label>
                <input id="firstName" name="firstName" type="text" placeholder="Tên" />
                <label htmlFor="emailRegister">Email</label>
                <input id="emailRegister" name="email" type="email" placeholder="Email" />
                <label htmlFor="phone">Số điện thoại</label>
                <input id="phone" name="phone" type="tel" placeholder="Số điện thoại" />
                <label htmlFor="passwordRegister">Mật Khẩu</label>
                <input id="passwordRegister" name="password" type="password" placeholder="Mật Khẩu" />
                <button className="btn btn-submit" type="submit">ĐĂNG KÝ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
