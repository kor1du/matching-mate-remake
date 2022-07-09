import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalAddress from "../../address/ModalAddress";
import CheckDate from "../components/CheckDate";
import CheckTime from "../components/CheckTime";
import CreatePost, { NewPost } from "../components/CreatePost";
import GetCategorys, { Category } from "../components/GetCategorys";

const ModalPostCreate: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newPost, setNewPost] = useState<NewPost>({
    categoryId: 1,
    matchingDate: "yyyy-MM-dd",
    matchingTime: "HH:mm",
    maxNumberOfPeople: 0,
    place: "",
    postContents: "",
    postName: "",
    recommendedSkill: "뉴비",
  });

  const [categorys, setCategorys] = useState<Array<Category>>([
    {
      id: 0,
      imgAddress: "",
      name: "",
    },
  ]);

  useEffect(() => {
    GetCategorys().then((res) => {
      setCategorys(res);
    });
  }, []);

  return (
    <>
      <Button
        variant="warning"
        onClick={() => {
          handleShow();
        }}
        className="btn-detail"
      >
        공고등록
      </Button>

      <Modal show={show} onHide={handleClose} centered className="modal-post-create modal-post">
        <Modal.Header closeButton>
          <Modal.Title>공고 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="post-title">
            <div className="categorys">
              <label>종목 : </label>
              <select
                onChange={(e) => {
                  e.preventDefault();
                  setNewPost({
                    ...newPost,
                    categoryId: parseInt(e.target.value),
                  });
                }}
              >
                {categorys.map((category) => {
                  if (category.name !== "전체")
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                })}
              </select>
            </div>
            <label>공고제목 : </label>
            <input
              type="text"
              value={newPost.postName}
              onChange={(e) => {
                e.preventDefault();
                setNewPost({
                  ...newPost,
                  postName: e.target.value,
                });
              }}
            />
          </div>
          <div className="post-contents">
            <label>내용 : </label>
            <input
              type="text"
              value={newPost.postContents}
              onChange={(e) => {
                e.preventDefault();
                setNewPost({
                  ...newPost,
                  postContents: e.target.value,
                });
              }}
            />
          </div>
          <div className="recommended-skill">
            <label>추천 실력 : </label>
            <select
              onChange={(e) => {
                e.preventDefault();
                setNewPost({
                  ...newPost,
                  recommendedSkill: e.target.value,
                });
              }}
            >
              <option value="뉴비">뉴비</option>
              <option value="중수">중수</option>
              <option value="고수">고수</option>
            </select>
          </div>
          <div className="place">
            <label>장소 : </label>
            <input type="text" value={newPost.place} readOnly />
            <div className="btn-address">
              <ModalAddress newPost={newPost} setNewPost={setNewPost}></ModalAddress>
            </div>
          </div>
          <div className="max-number-of-people">
            <label>최대인원 : </label>
            <input
              type="number"
              value={newPost.maxNumberOfPeople}
              onChange={(e) => {
                e.preventDefault();
                setNewPost({
                  ...newPost,
                  maxNumberOfPeople: parseInt(e.target.value),
                });
              }}
            />
          </div>
          <div className="matching-date">
            <label>매칭날짜 : </label>
            <input
              type="date"
              value={newPost.matchingDate}
              onChange={(e) => {
                e.preventDefault();
                if (CheckDate(e.target.value)) {
                  setNewPost({
                    ...newPost,
                    matchingDate: e.target.value,
                  });
                }
              }}
            />
          </div>
          <div className="matching-time">
            <label>매칭시간 : </label>
            <input
              type="time"
              value={newPost.matchingTime}
              onChange={(e) => {
                e.preventDefault();
                if (CheckTime(e.target.value)) {
                  setNewPost({
                    ...newPost,
                    matchingTime: e.target.value,
                  });
                }
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              e.preventDefault();
              CreatePost(newPost);
              handleClose();
            }}
          >
            등록하기
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPostCreate;
