import React from "react";
import { MainTitle } from "./maintitle";

interface CommentInfo {
  id: string;
  comment: string;
}

const comments = [
  { id: "유영현", comment: "아라미 오늘 마니 미아내!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" },
  { id: "유영현", comment: "내가 마니 사랑하는거 알지여!!?!?!?!!?!?!?!?!?!?!?" },
  { id: "유영현", comment: "우리 내일 밥 맛있는거 먹고 같이 있자요 스트레스 마니 받아서 자기랑 있어야 겠어" },
  { id: "유영현", comment: "마니마니 사랑해 자깅" },
  { id: "유영현", comment: "보고싶다 얼릉 저나줭❤️❤️❤️" },
];

export function Comment() {
  return (
      <div className="bg-white">
        <div className="bg-white p-1">
            <MainTitle title="GUESTBOOK" subtitle="방명록"/>
        </div>

        <CommentItem comments={comments} />
    </div>
  );
}

function CommentItem({ comments }: { comments: CommentInfo[] }) {
  return (
    <div className="p-5">
      <ul className="c accordion-list accordion1">
        {comments.map((comment, index) => (
          <CommentItemRow key={index} id={comment.id} comment={comment.comment} />
        ))}
      </ul>
    </div>
  );
}

function CommentItemRow({ id, comment }: { id: string; comment: string }) {
  return (
    <li className="flex justify-between items-center border-t p-3">
      <div className="flex-col font-gowun py-2">
        <span className="font-bold">{id}</span>
        <p className="text-sm">{comment}</p>
      </div>
    </li>
  );
}
