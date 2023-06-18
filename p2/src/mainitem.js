import "./App.css";
const MainItem = () => {
  return (
    <div className="main">
      <div className="item">
        <input type="radio" className="item-input"></input>
        <h3 className="input-text">Homework</h3>
      </div>
      <div className="item">
        <input type="radio" className="item-input"></input>
        <h3 className="input-text">Javascript</h3>
      </div>
      <div className="item">
        <input type="radio" className="item-input"></input>
        <h3 className="input-text">ReactJS</h3>
      </div>
      <div className="item">
        <input type="radio" className="item-input"></input>
        <h3 className="input-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          asperiores.
        </h3>
      </div>
      <div className="item">
        <input type="radio" className="item-input"></input>
        <h3 className="input-text">123456789!</h3>
      </div>
    </div>
  );
};
export default MainItem;
