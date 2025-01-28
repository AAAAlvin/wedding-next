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
