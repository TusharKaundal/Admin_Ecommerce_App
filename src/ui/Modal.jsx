const Modal = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 h-screen z-2000 flex justify-center items-center bg-gray-300/90 "
      onClick={setIsOpen}
    >
      <div
        className="p-5 rounded-md bg-white mx-12 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
