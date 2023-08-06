import { supabase } from '@/utils/SupabaseClient';

export async function loginUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })
      
  if (error) {
    throw error;
  }
  return data;
}
