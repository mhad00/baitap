import "./register.css";

const Register = () => {
  return (
    <div className="back">
      <div className="left">
        <h1>Shop App</h1>
        <img src="./images/Vector.png " alt="" />
      </div>
      <div className="right">
        <button className="buttonX">X</button> <br />
        <h4>Welcome to Shop App</h4>
        <div className="rightInput">
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Email@email.com" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <button className="button-1">
            <strong>Register</strong>
          </button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
