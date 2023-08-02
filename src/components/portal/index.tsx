import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Portal() {
  const [isModalOpen, setItModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && createPortal(<div>Modal</div>, getElementById('body') /*document.body//любой другой элемент*/)}
      <button onClick={() => setItModalOpen((isOpen) => !isOpen)}>
        OpenModal
      </button>
    </div>
  )
};