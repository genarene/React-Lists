import Headline from "./Headline";
import NewsItem from "./NewsItem";

const NewsPage = ({ news }) => {
  return (
    <div className="news-page">
      <Headline />
      <div className="news-line">
        {news.map((newsObj, index) => {
          return (
            <div key={newsObj.id}>
              <NewsItem
                tittle={newsObj.heading}
                website={newsObj.site}
                message={newsObj.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;
