import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Post } from "../components/GetPosts";
import UpdateViews from "../components/UpdateViews";

interface ModalPostDetailprops {
  post: Post;
  posts: Array<Post>;
  setPosts: Function;
}

const ModalPostDetail: React.FC<ModalPostDetailprops> = ({ post, posts, setPosts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const position = useSelector((state: RootState) => state.MatchinPostRedux.position);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          UpdateViews(post, setPosts, position);
          handleShow();
        }}
        className="btn-detail"
      >
        상세보기
      </Button>

      <Modal show={show} onHide={handleClose} centered className="modal-post-detail modal-post">
        <Modal.Header closeButton>
          <Modal.Title>공고 상세보기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>아이디 : {post.id}</p>
          <p>종목 : {post.categoryName}</p>
          <p>제목 : {post.postName}</p>
          <p>추천실력 : {post.recommendedSkill}</p>
          <p>장소 : {post.place}</p>
          <p>등록일 : {post.matchingDate + " " + post.matchingTime} </p>
          <p>작성자 : {post.nickname}</p>
          <p>목표인원 : {post.maxNumberOfPeople}</p>
          <p>현재인원 : {post.numberOfPeople}</p>
          <p>조회수 : {post.views}</p>
          <p>채팅방 인원 : {post.inChatNumber}</p>
          <div className="btn-join-chat">
            <Button variant="success">채팅방 참여하기</Button>
          </div>
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

export default ModalPostDetail;
