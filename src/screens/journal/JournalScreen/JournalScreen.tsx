import NothingSelected from "../NothingSelected/NothingSelected";
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
        <NothingSelected /> 
      </main>
    </div>
  );
};

export default JournalScreen;
