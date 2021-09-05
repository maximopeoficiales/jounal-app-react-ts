import Sidebar from "../Sidebar/Sidebar";

interface MyProps {}
const defaultProps = {};
const JournalScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="JournalScreen" className="journal__main-content">
      <Sidebar />
      <main>
        <h1>MainContent</h1>
      </main>
    </div>
  );
};

export default JournalScreen;
