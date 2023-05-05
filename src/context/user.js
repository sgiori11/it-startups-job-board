import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from '../lib/supabaseClient';
import { useRouter } from "next/router";

const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function getActiveSession() {
            const { data: { session: activeSession }} = await supabase.auth.getSession();
            setSession(activeSession);
            setUser(activeSession?.user ?? null);
        }
        getActiveSession();

        const { data: { subscription: authListener }} = supabase.auth.onAuthStateChange((event, currentSession) => {
            setSession(currentSession);
            setUser(currentSession?.user ?? null);
        });

        return () => {
            authListener.unsubscribe();
        };
    }, []);

    // ...

    const loginWithGoogle = async () => {
        await supabase.auth.signIn({
            provider: "google",
        });
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        router.push("/");
    };

    const exposed = {
        user,
        loginWithGoogle,
        logout,
    };

    return (
        <Context.Provider value={exposed} keepMounted={true}>
            {children}
        </Context.Provider>
    );
};

export const useUser = () => useContext(Context);

export default Provider;
