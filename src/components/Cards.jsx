
const Cards = ({ imageUrl, title }) => {
  return (
    <div className="skill-card group">
      <div className="skill-card-glow"></div>
      <div className="skill-card-content">
        <div className="skill-icon-wrapper">
          <img src={imageUrl} alt={title} className="skill-icon" />
        </div>
        <h3 className="skill-title">{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
