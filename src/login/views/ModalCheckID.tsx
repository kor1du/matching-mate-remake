import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import checkID from "../components/CheckID";
import "../styles/modalCheck.css";
import { User } from "./SignupPage";

interface CheckIDModalProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const CheckIDModal: React.FC<CheckIDModalProps> = ({ user, setUser }) => {
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {});
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        중복확인
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-check-ID modal-check"
      >
        <Modal.Header closeButton>
          <Modal.Title>ID 중복확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e: any) => {
              e.preventDefault();
              setId(e.target.value);
            }}
          />
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              checkID(id, user, setUser);
            }}
          >
            중복체크
          </Button>
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

export default CheckIDModal;
