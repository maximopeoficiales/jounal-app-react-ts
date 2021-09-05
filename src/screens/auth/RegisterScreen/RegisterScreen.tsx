import { Link } from "react-router-dom";

interface MyProps {}
const defaultProps = {};
const RegisterScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="RegisterScreen" className="">
      <h1 className="auth__title">Register</h1>
      <div className="auth__alert-error">
        <small>Ocurrio un error en el formulario</small>
      </div>
      <form action="">
        <div className="auth__form-group">
          <label html-for="name">Name:</label>
          <input
            type="text"
            className="auth__input"
            name="name"
            id="name"
            aria-describedby="nameHelpId"
            placeholder="Insert to name"
            autoComplete="false"
          />
          <small id="nameHelpId" className="auth__form-text ">
            Help text
          </small>
        </div>

        <div className="auth__form-group">
          <label html-for="email">Email:</label>
          <input
            type="text"
            className="auth__input"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="Insert to Email"
            autoComplete="false"
          />
          <small id="emailHelpId" className="auth__form-text ">
            Help text
          </small>
        </div>
        <div className="auth__form-group">
          <label html-for="password">Password:</label>
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

        <div className="auth__form-group">
          <label html-for="password2">Repeat Password:</label>
          <input
            type="text"
            className="auth__input"
            name="password2"
            id="password2"
            aria-describedby="password2HelpId"
            placeholder="Confirm"
            autoComplete="false"
          />
          <small id="password2HelpId" className="auth__form-text ">
            Help text
          </small>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already Registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
