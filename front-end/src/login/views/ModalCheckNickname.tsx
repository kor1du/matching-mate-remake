import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import checkNickname from "../components/CheckNickname";
import "../styles/modalCheck.css";
import { User } from "./SignupPage";

interface CheckIDModalProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const CheckNicknameModal: React.FC<CheckIDModalProps> = ({ user, setUser }) => {
  const [show, setShow] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

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
        className="modal-check-nickname modal-check"
      >
        <Modal.Header closeButton>
          <Modal.Title>별명 중복확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e: any) => {
              e.preventDefault();
              setNickname(e.target.value);
            }}
          />
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              checkNickname(nickname, user, setUser);
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

export default CheckNicknameModal;
