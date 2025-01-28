// /app/api/savecommentapi/route.ts

import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();

    // 요청 바디에서 데이터 추출
    const { name, password, message } = await req.json();

    if (!name) {
      return new Response(JSON.stringify({ error: '이름을 입력해주시기 바랍니다.'}), { status: 400 });
    }

    if (!password) {
      return new Response(JSON.stringify({ error: '비밀번호를 입력해주시기 바랍니다.'}), { status: 400 });
    }

    if (!message) {
      return new Response(JSON.stringify({ error: '메세지를 입력해주시기 바랍니다.'}), { status: 400 });
    }

    // 댓글 삽입
    const { data, error } = await supabase.from('comments').insert([
      {
        user_nm: name,
        password: password, // 암호화 후 저장 권장
        comment: message,
      },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error: 'Failed to insert comment', details: error }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: 'Comment successfully added', data }), { status: 201 });
  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const supabase = await createClient();

    // URL에서 id 추출
    const url = new URL(req.url);
    const commentId = url.searchParams.get('id'); // "id" 파라미터를 추출

    const { password } = await req.json(); // password를 body에서 추출
    console.log(password)

    if (!commentId) {
      return new Response(JSON.stringify({ error: '댓글 ID가 필요합니다.' }), { status: 400 });
    }

    // 댓글과 비밀번호 조회
    const { data: comment, error: fetchError } = await supabase
      .from('comments')
      .select('id, password') // id와 password만 조회
      .eq('id', commentId)
      .single(); // single()로 하나의 댓글만 가져옴

    if (fetchError) {
      return new Response(JSON.stringify({ error: '댓글을 찾을 수 없습니다.', details: fetchError }), { status: 404 });
    }

    // 비밀번호 비교
    if (comment.password !== password) {
      return new Response(JSON.stringify({ error: '비밀번호가 일치하지 않습니다.' }), { status: 403 });
    }

    const { data, error } = await supabase.from('comments').delete().eq('id', commentId);

    if (error) {
      return new Response(JSON.stringify({ error: '댓글 삭제 실패', details: error }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: '댓글이 성공적으로 삭제되었습니다.' + data }), { status: 200 });
  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: '서버 오류가 발생했습니다.' }), { status: 500 });
  }
}