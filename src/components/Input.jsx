const InputWithSlot = ({ label, iconLeft, iconRight, ...props }) => (
  <div className="input-group">
    {label && <label className="input-label">{label}</label>}
    <div className="input-wrapper">
      {iconLeft && <span className="input-icon-left">{iconLeft}</span>}
      <input {...props} className="input-field" />
      {iconRight && <span className="input-icon-right">{iconRight}</span>}
    </div>
  </div>
);

export default InputWithSlot;
