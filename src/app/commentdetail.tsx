
import { createClient } from '@/utils/supabase/server';

export async function CommentItem() {
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
  