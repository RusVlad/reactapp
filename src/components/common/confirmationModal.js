import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { CONFIRMATION_MODAL_STYLE } from "../../constants";
import * as ConfirmationModalActions from "../../store/actions/confirmationModalActions";
import ActionButton from "./actionButton";

Modal.setAppElement("#app");

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.confirmationModalReducer.isOpen);
  const message = useSelector(
    (state) => state.confirmationModalReducer.message
  );

  const closeModal = () => {
    dispatch(ConfirmationModalActions.setIsOpen(false));
  };

  const confirmModal = () => {
    dispatch(ConfirmationModalActions.callConfirmationFunction());
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={CONFIRMATION_MODAL_STYLE}
      contentLabel="Example Modal"
    >
      <div className="modal">
        <div>
          <h3>{message}</h3>
        </div>
        <div className="actions">
          <ActionButton
            onClickFunction={confirmModal}
            modifierClass="light"
            text="Confirm"
          />
          <ActionButton onClickFunction={closeModal} text="Cancel" />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
