const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

Accordion.Item = ({ title, children, isActive, onToggle }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onToggle}>
      <h3>{title}</h3>
      <span>{isActive ? "-" : "+"}</span>
    </div>
    {isActive && <div className="accordion-body">{children}</div>}
  </div>
);

Accordion.Item.displayName = "AccordionItem";

export default Accordion;
