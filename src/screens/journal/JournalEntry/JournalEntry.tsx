interface MyProps {}
const defaultProps = {};
const JournalEntry = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="JournalEntry" className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(https://picsum.photos/200/300)",
        }}
      ></div>
      <div className="journal__entry-body">
        <div className="journal__entry-title">Lorem, ipsum dolor.</div>
        <div className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          sunt!
        </div>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
