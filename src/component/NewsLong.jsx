import PropTypes from "prop-types";

const NewsLong = ({ news }) => {
  return (
    <div className="px-5 py-2 shadow-lg flex w-full h-[300px]">
      <div className=" w-1/3 pr-4">
        <img
          src={news?.photo}
          className="rounded-lg w-full h-[270px]"
          alt="News Photo"
        />
      </div>
      <div className="w-2/3 p-2">
        <p>{news.date}</p>
        <p className="text-2xl font-semibold">{news.news_title}</p>
        <p>{news.description.length>=400 ? news.description.slice(0,400) +"...." : news.description }</p>
        <button className="text-right">Read More</button>
      </div>
    </div>
  );
};

NewsLong.propTypes = {
  news: PropTypes.shape({
    photo: PropTypes.string,
    date: PropTypes.string,
    news_title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default NewsLong;
