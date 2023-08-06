import {supabase} from "@/utils/SupabaseClient";

export default async function Home() {
  const {
    data: {user},
  } = await supabase.auth.getUser();

  return (
    <div>
      {user ? (
        <p>
          You are <b>logged</b> in!
        </p>
      ) : (
        <p>
          You are not logged in. Please <a href="/login">login</a> to continue.
        </p>
      )}
    </div>
  );
}
