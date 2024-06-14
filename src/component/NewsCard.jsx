
const NewsCard = ({news}) => {
  return (
    <div className="px-5 py-2 shadow-lg">
      <img
        src={news?.photo}
        className="w-full h-[300px] rounded-lg"
      ></img>
      <p>{news.date}</p>
      <p className="text-2xl font-semibold">
        {news.news_title}
      </p>
      <p>
        {news.description}
      </p>
      <button className="text-right">Read More</button>
    </div>
  );
};

export default NewsCard;
