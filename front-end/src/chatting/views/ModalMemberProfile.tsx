import { profile } from "console";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ChattingRoomMemberList } from "../components/GetChattingRoom";

interface ModalMemberProfileProps {
  member: ChattingRoomMemberList;
}

const ModalMemberProfile: React.FC<ModalMemberProfileProps> = ({ member }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src={member.profileImgAddress}
        alt="img-member"
        onClick={(e) => {
          e.preventDefault();
          handleShow();
        }}
      />

      <Modal show={show} onHide={handleClose} centered className="modal-post-detail modal-post">
        <Modal.Header closeButton>
          <Modal.Title>상세보기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>이름 : {member.nickname}</h1>
          <h1>매너평점 : {member.avgMannerPoint}</h1>
          <h1>운동평점 : {member.avgSkillPoint}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMemberProfile;
