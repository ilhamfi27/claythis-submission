// components/Spinner.tsx
import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" />
      <style jsx>{`
        .spinner-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
