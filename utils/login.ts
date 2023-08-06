import { supabase } from '@/utils/SupabaseClient';

export async function loginUser() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      
  if (error) {
    throw error;
  }
  return data;
}
