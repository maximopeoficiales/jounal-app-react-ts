import { Link } from "react-router-dom";

interface MyProps {}
const defaultProps = {};
const LoginScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="LoginScreen" className="">
      <h1 className="auth__title">Login</h1>
      <div className="auth__alert-error">
        <small>Ocurrio un error en el formulario</small>
      </div>
      <form action="">
        <div className="auth__form-group">
          <label html-for="">Email:</label>
          <input
            type="text"
            className="auth__input"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="Insert to Email"
            autoComplete="false"
          />
          <small id="emailelpId" className="auth__form-text ">
            Help text
          </small>
        </div>
        <div className="auth__form-group">
          <label html-for="">Password:</label>
          <input
            type="text"
            className="auth__input"
            name="password"
            id="password"
            aria-describedby="passwordHelpId"
            placeholder="Insert to Email"
            autoComplete="false"
          />
          <small id="passwordHelpId" className="auth__form-text ">
            Help text
          </small>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <hr />
        <div className="auth__social_networks">
          <p>Login with Social Networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">Create New Account</Link>
      </form>
    </div>
  );
};

export default LoginScreen;
