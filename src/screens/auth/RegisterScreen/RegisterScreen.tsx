interface MyProps {}
const defaultProps = {};
const RegisterScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="RegisterScreen" className="">
      <h1>RegisterScreen component</h1>
    </div>
  );
};

export default RegisterScreen;
