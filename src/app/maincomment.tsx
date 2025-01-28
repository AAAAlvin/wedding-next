'use client'
import { useState } from "react";
// import React, { useState } from "react";

import { MainTitle } from "./maintitle";
import { GuestbookForm } from "./savecomment";

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
  return (
    <li className="flex justify-between items-center border-t p-3 shadow-sm">
      <div id={id} className="flex-col font-gowun py-2">
        <span className="font-bold">{user_nm}</span>
        <p className="text-sm">{comment}</p>
      </div>
    </li>
  );
}
