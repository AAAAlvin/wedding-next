import React from "react";
import { MainTitle } from "./maintitle";

interface CommentInfo {
  id: string;
  comment: string;
}

const comments = [
  { id: "유영현", comment: "정말 온맘다해 축하해♡ 반짝반짝 향기로운 꽃같은 날들만 가득하길 기도할게~ 사랑해 이쁜이!!! 우리 아람이 잘 부탁드립니다🧡💛💚💙💜🤎🖤" },
  { id: "유영현", comment: "예쁜사랑 예쁜꼼꼼 행복하게 잘살아 ~~ 🤍💙 검은머리 파뿌리될때까지 영원하길 ❤️" },
  { id: "유영현", comment: "사랑하는 사람을 만나 행복해 하며 함께했던 시간만큼, 앞으로도 서로의 버팀목이 되어 함께 즐거울일과 슬플일도 헤쳐나가며, 사로 아끼면서 알콩달콩 잘 살기 바랄게💕💕" },
  { id: "유영현", comment: "마니마니 사랑해 자깅" },
  { id: "유영현", comment: "결혼 정말 축하드려요~~^^" },
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
