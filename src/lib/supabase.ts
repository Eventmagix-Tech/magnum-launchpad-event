import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://kxkmmzxnjcjnnakytuhx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_9FZmov5u2IW6QUG3EwGaBg_K8GUpm-b";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}
