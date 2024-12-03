import type { Dispatch } from 'react';

import classes from './modal.module.css';

interface WelcomeModalProps {
  showModal: boolean;
  setShowModal: Dispatch<boolean>;
}

export const WelcomeModal = ({
  showModal,
  setShowModal,
}: WelcomeModalProps) => {
  if (!showModal) return null;

  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      className={classes.modal}
    >
      <div className={classes.content}>
        <p id='modal-title'>Welcome!</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};
