interface MyProps {}
const defaultProps = {};
const NothingSelected = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="NothingSelected" className="nothing__main-content">
      <p>
        Select something
        <br />
        or create an entry !
      </p>
      <i className="fas fa-star fa-4x mt-5"></i>
    </div>
  );
};

export default NothingSelected;
