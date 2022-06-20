import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalAddress.css";
import ModalDaumPostCode from "./ModalDaumPostCode";
import { User } from "../login/views/SignupPage";
import { NewPost } from "../matchingPost/components/CreatePost";

interface ModalAddressProps {
  user?: User;
  setUser?: Dispatch<SetStateAction<User>>;
  newPost?: NewPost;
  setNewPost?: Dispatch<SetStateAction<NewPost>>;
}

const ModalAddress: React.FC<ModalAddressProps> = ({
  user,
  setUser,
  newPost,
  setNewPost,
}) => {
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
          {user !== undefined || null ? (
            <ModalDaumPostCode
              user={user}
              setUser={setUser}
              setShow={setShow}
            ></ModalDaumPostCode>
          ) : (
            <ModalDaumPostCode
              newPost={newPost}
              setNewPost={setNewPost}
              setShow={setShow}
            ></ModalDaumPostCode>
          )}
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

export default ModalAddress;
