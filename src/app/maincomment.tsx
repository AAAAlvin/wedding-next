import React from "react";
import { MainTitle } from "./maintitle";
import { createClient } from '@/utils/supabase/server';

interface CommentInfo {
  id: string;
  user_nm: string;
  comment: string;
}

export async function Comment() {
  const supabase = await createClient();
  const { data: varComments, error } = await supabase.from("comments").select('*');

  // 에러 처리
  if (error) {
    console.error(error);
    return <div>Error loading comments</div>;
  }

  // null을 빈 배열로 처리
  const comments = varComments ?? [];

  return (
      <div className="bg-white py-10">
        <div className="bg-white p-1">
            <MainTitle title="GUESTBOOK" subtitle="방명록"/>
        </div>

        <CommentItem comments={comments} />

        <div className="flex justify-end px-5">
          <a
            href="#write"  // 작성하기 페이지로 이동하도록 링크 추가
            className="bg-white text-neutral-600 border px-5 py-2 rounded-2xl hover:bg-neutral-700 hover:text-white transition-all"
          >
            작성하기
          </a>
        </div>
    </div>
  );
}

function CommentItem({ comments }: { comments: CommentInfo[] }) {
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
