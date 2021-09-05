interface MyProps {}
const defaultProps = {};
const JournalScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="JournalScreen" className="">
      <h1>JournalScreen component</h1>
    </div>
  );
};

export default JournalScreen;
