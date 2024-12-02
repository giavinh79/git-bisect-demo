import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import type { ErrorPayload } from 'vite/types/hmrPayload.js';

const showErrorOverlay = (err: Partial<ErrorPayload['err']>) => {
  const ErrorOverlay = customElements.get('vite-error-overlay');
  if (ErrorOverlay) {
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  }
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) =>
  showErrorOverlay(reason),
);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
