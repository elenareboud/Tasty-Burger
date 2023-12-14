const ArticleComponent = ({ title, text, imgSrc }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div className="content">
        <p>{text}</p>
        <img src={imgSrc} alt="" />
      </div>
    </article>
  );
};

export default ArticleComponent;
