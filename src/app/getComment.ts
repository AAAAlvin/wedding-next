import { createClient } from '@/utils/supabase/server';

export async function GetComment() {
  const supabase = await createClient();
  const { data: varComments } = await supabase.from("comments").select('*').order('created_at', { ascending: false });

  // null을 빈 배열로 처리
  return varComments ?? [];
}