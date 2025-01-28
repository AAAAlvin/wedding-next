'use client'
import { useState } from "react";
// import React, { useState } from "react";

import { MainTitle } from "./maintitle";
import { GuestbookForm } from "./savecomment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface CommentProps {
  comments: Array<{ id: string; user_nm: string; comment: string }>; // Adjust the type based on your data
}

export function Comment({ comments }: CommentProps) {

  const [showForm, setShowForm] = useState(false); // 상태 추가

  const handleClick = () => {
    setShowForm(!showForm); // 버튼 클릭 시 작성 폼 표시
  };

  return (
      <div className="bg-white py-10">
        <div className="bg-white p-1">
            <MainTitle title="GUESTBOOK" subtitle="방명록"/>
        </div>

        <CommentItem comments={comments}/>

        <div className="flex justify-end px-5">
          <a
            onClick={handleClick} // 버튼 클릭 시 상태 변경
            className="text-base bg-white text-neutral-600 border px-5 py-2 rounded-2xl hover:bg-neutral-700 hover:text-white transition-all"
          >
            방명록 작성하기
          </a>
        </div>

      {showForm && <GuestbookForm showForm={showForm} setShowForm={setShowForm}/>}
    </div>
  );
}

export function CommentItem({ comments }: CommentProps) {
  return (
    <div className="p-5">
      <ul className="c accordion-list accordion1">
        {comments.map((comment, index) => (
          <CommentItemRow 
            key={index}
            id={comment.id}
            user_nm={comment.user_nm}
            comment={comment.comment} />
        ))}
      </ul>
    </div>
  );
}

function CommentItemRow({ id, user_nm, comment }: { id: string; user_nm: string; comment: string }) {
  const [password, setPassword] = useState(''); // 비밀번호 상태 추가
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가

  const handleDeleteClick = () => {
    setShowModal(true); // 삭제 버튼 클릭 시 모달 표시
  };

  const handleDelete = async () => {
    if (!password) {
      alert('비밀번호를 입력해 주세요!');
      return;
    }

    try {
      const item = {
        id: id,
        password: password, // 비밀번호 포함
      };

      const response = await fetch(`/api/comment?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item), // id와 비밀번호를 JSON 형태로 보냄
      });

      if (response.ok) {
        console.log("댓글이 성공적으로 삭제되었습니다.");
        setShowModal(false); // 삭제 후 모달 닫기
        // 댓글 삭제 후 상태 업데이트 (상위 컴포넌트에서 처리)
        // onDelete(id); // 삭제된 댓글 ID 전달
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <li className="flex justify-between items-center border-t p-3 shadow-sm">
      <div id={id} className="flex-col font-gowun py-2 w-full">
        <div className="flex justify-between w-full">
          <span className="font-bold">{user_nm}</span>
          <FontAwesomeIcon onClick={handleDeleteClick} icon={faTimes as IconProp} className="w-3 h-3 cursor-pointer" />
        </div>
        <p className="text-sm">{comment}</p>
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-gowun">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4">댓글 삭제</h3>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)} // 모달 닫기
                className="text-gray-500 hover:text-gray-700"
              >
                취소
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-700 text-white px-4 py-2 rounded"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}