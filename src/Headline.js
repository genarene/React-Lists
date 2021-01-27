const Headline = () => {
  return (
    <span className="headline" style={{ display: "flex" }}>
      <h3> Hacker News </h3>
      <div className="nav">
        <span className="nav-item">
          <h4>new</h4>
        </span>
        <span className="nav-item">
          <h4>threads</h4>
        </span>
        <span className="nav-item">
          <h4>comments</h4>
        </span>
        <span className="nav-item">
          <h4>Show</h4>
        </span>
        <span className="nav-item">
          <h4>ask</h4>
        </span>
        <span className="nav-item">
          <h4>jobs</h4>
        </span>
        <span className="nav-item">
          <h4>submit</h4>
        </span>
      </div>
    </span>
  );
};

export default Headline;
