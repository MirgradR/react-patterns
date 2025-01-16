const Modal = ({ children, headerSlot, footerSlot }) => (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">{headerSlot}</div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">{footerSlot}</div>
    </div>
  </div>
);

export default Modal;
