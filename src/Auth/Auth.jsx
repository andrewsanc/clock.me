import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Login from "../Components/Login/Login";
import App from "../App";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Auth() {
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setSession(session)
    );

    return () => subscription.unsubscribe();
  }, []);

  return !session ? <Login supabaseClient={supabase} /> : <App />;
}
