import NewsLong from "./component/NewsLong";
import useGetAllNews from "./hook/News/useGetAllNews";

const News = () => {
  const [news,] = useGetAllNews();

  return (
    <div className="grid grid-cols-3 gap-10">
      {news.map((item) => {
        return <NewsLong news={item} key={item.id}></NewsLong>;
      })}
    </div>
  );
};

export default News;
