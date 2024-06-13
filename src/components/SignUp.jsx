//import { Link } from "react-router-dom";
const SignUp = () => {
  
  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <h2>Nice to meet you</h2>
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

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
