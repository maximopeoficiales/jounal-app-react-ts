interface MyProps {}
const defaultProps = {};
const LoginScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="LoginScreen" className="">
      <h1>LoginScreen component</h1>
      <form action="">
        <div className="form-group">
          <label html-for="">Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="Insert to Email"
          />
          <small id="emailelpId" className="form-text text-muted">
            Help text
          </small>
        </div>
        <div className="form-group">
          <label html-for="">Password:</label>
          <input
            type="text"
            className="form-control"
            name="password"
            id="password"
            aria-describedby="passwordHelpId"
            placeholder="Insert to Email"
          />
          <small id="passwordHelpId" className="form-text text-muted">
            Help text
          </small>
        </div>
        <button>Login</button>
        google
      </form>
    </div>
  );
};

export default LoginScreen;
