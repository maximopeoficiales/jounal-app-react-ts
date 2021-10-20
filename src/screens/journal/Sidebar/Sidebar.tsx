import JournalEntries from "../JournalEntries/JournalEntries";

interface MyProps {}
const defaultProps = {};
const Sidebar = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <aside data-testid="Sidebar" className="journal__sidebar">
      <div className="journal__sidebar_navbar">
        <h3>
          <i className="fas fa-moon fa-2"></i>
          <span> Pepito!!</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="fas fa-calendar-alt fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
