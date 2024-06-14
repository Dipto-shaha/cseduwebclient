import PropTypes from 'prop-types';

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
      <p>{news.description}</p>
      <button className="text-right">Read More</button>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    photo: PropTypes.string,
    date: PropTypes.string,
    news_title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default NewsCard;

