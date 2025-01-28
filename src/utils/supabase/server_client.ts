// clientComponent.tsx
import { createClient } from '@supabase/supabase-js';

const supabasecl = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default supabasecl
