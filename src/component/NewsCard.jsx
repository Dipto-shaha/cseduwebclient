import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <div className="px-5 py-2 shadow-lg">
      <img
        src={news?.photo}
        className="w-full h-[300px] rounded-lg"
        alt="News Photo"
      />
      <p>{news.date}</p>
      <p className="text-2xl font-semibold">{news.news_title}</p>
      <p>{news.description.length>=200 ? news.description.slice(0,200) +"...." : news.description }</p>
      <Link className="text-right" to={`/news/${news.id}`}>Read More</Link>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    id:PropTypes.string,
    photo: PropTypes.string,
    date: PropTypes.string,
    news_title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default NewsCard;

