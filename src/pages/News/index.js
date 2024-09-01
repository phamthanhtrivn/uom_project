import { useEffect, useState } from 'react';
import { getListNews } from '~/services/newsService';
import { CalendarOutlined } from '@ant-design/icons';
import './News.scss';

function News() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListNews();
      setDataNews(result);
    };
    fetchApi();
  }, []);

  return (
    <>
      <section className="news">
        <div className="container">
          <h1>Tin Tức</h1>
          <div className="news__content">
            {dataNews.length ? (
              <>
                {dataNews.map((item, index) => (
                  <div className="news__item" key={index}>
                    <div className="news__image">
                      <img src={item.thumbnail} alt={item.logo} />
                    </div>
                    <div className="news__info">
                      <div className="news__title">{String(item.title)}</div>
                      <div className="news__time">
                        <CalendarOutlined /> {String(item.time)}
                      </div>
                      <div className="news__desc">{String(item.description)}</div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>Không có tin tức</>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
