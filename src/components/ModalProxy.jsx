const ModalProxy = ({ isOpen, onClose, children }) => {
  // Прокси-компонент добавляет логику перед рендером
  if (!isOpen) return null; // Прокси блокирует рендер, если окно не открыто

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalProxy;
