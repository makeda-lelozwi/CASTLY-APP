import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <div className="sign-up-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="50"
            height="50"
          >
            <rect width="200" height="200" fill="#320b1d" />

            <path
              d="M100,10c42.7,0,77.3,34.6,77.3,77.3c0,42.7-34.6,77.3-77.3,77.3c-42.7,0-77.3-34.6-77.3-77.3C22.7,44.6,57.3,10,100,10z M100,105 c11,0,20-9,20-20s-9-20-20-20s-20,9-20,20S89,105,100,105z"
              fill="#e6901a"
            />
          </svg>
          <h2 style={{ color: "#e6901a" }}>Castly</h2>
        </div>
        <div className="sign-up-form">
          <h3>Sign Up</h3>
          <form>
            <div className="form-group">
              <label htmlFor="username">username </label>
              <input type="text" id="username" name="username"></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">email </label>
              <input type="email" id="email" name="email"></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">password </label>
              <input type="password" id="password" name="password"></input>
            </div>

            <Link className="sign-up-button" to="explore">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
      <div className="sign-up-background"></div>
    </div>
  );
};

export default SignUp;
