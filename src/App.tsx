import { useState } from 'react';
import { WelcomeModal } from './components/Modal';

import './app.css';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <main>
      <h1>Git Bisect Demo</h1>
      <WelcomeModal showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
};

export default App;
