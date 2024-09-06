/* eslint-disable react/jsx-no-target-blank */
import { Outlet } from 'react-router-dom';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import './LayoutDefault.scss';

function LayoutDefault() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />

        <div className="main__social">
          <a href="https://zalo.me/0398694435" target="_blank">
            <img className="main__social--icon" src={require('../assets/images/zalo_icon.png')} alt="zalo_icon" />
          </a>
          <a href="mailto:phamthanhtri@gmail.com" target="_blank">
            <img className="main__social--icon" src={require('../assets/images/email_icon.png')} alt="email_icon" />
          </a>
          <a href="https://www.facebook.com/tri.phamthanh.1029/" target="_blank">
            <img
              className="main__social--icon"
              src={require('../assets/images/messager_icon.png')}
              alt="messager_icon"
            />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default LayoutDefault;
