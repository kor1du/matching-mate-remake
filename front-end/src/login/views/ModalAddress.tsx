import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/modalAddress.css";
import DaumPostCode from "./DaumPostCode";
import { User } from "./SignupPage";

interface AddressModalProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const AddressModal: React.FC<AddressModalProps> = ({ user, setUser }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {});
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        주소찾기
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-address"
      >
        <Modal.Header closeButton>
          <Modal.Title>주소찾기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DaumPostCode
            user={user}
            setUser={setUser}
            setShow={setShow}
          ></DaumPostCode>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddressModal;
