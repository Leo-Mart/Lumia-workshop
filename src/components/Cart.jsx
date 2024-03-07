export function Modal({ show, children, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className='modal-backdrop'>
      <div className='modal-content'>
        <h1>Varukorg</h1>
        <ul>{/* lite items i denna */}</ul>
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  );
}
