const NewsItem = ({ tittle, website, message }) => {
  return (
    <div className="news-item">
      <div className="tittle">
        {tittle} <span className="website">({website})</span>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

export default NewsItem;
