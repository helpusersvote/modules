import React from 'react'

export function HandoffModal({ children, onCloseModal }) {
  return (
    <React.Fragment>
      <div className="overlay-shadow pointer" onClick={onCloseModal} />
      <div className="overlay-close pointer" onClick={onCloseModal}>
        &times;
      </div>
      <div className="overlay">
        <div className="overlay-content">{children}</div>
      </div>
      <style>{`
        .overlay-shadow {
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0,0,0,.3);
          z-index: 200;
        }
        .overlay-close {
          display: block;
          position: fixed;
          top: 50%;
          left: 50%;
          width: 80%;
          min-height: 320px;
          max-width: 660px;
          font-size: 32px;
          text-align: right;
          color: rgba(255,255,255,.9);
          transform: translateX(-50%) translateY(-50%);
          z-index: 201;
        }
        .overlay {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 80%;
          max-width: 600px;
          background: white;
          border-radius: 4px;
          z-index: 202;
          box-shadow: 0 1px 12px rgba(50, 100, 50, 0.125);
          transform: translateX(-50%) translateY(-50%);
        }
        .overlay-content {
          display: flex;
          position: relative;
          padding: 20px;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </React.Fragment>
  )
}

HandoffModal.defaultProps = {
  isModalOpen: false,
  onOpenModal: () => {},
  onCloseModal: () => {}
}

export default HandoffModal
