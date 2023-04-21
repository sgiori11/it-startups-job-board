import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from '../lib/supabaseClient';
import { useRouter } from "next/router";

const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const session = supabase.auth.session;
        setUser(session?.user || null);


        // Subscribe to the user session and update the state when it changes
        const authListener = supabase.auth.onAuthStateChange(
            async (event, session) => {
             const currentUser = (session?.user || null);

             if (currentUser && currentUser.id !== user?.id) {
                const { data: jobs } = await supabase
                .from("jobs")
                .select("*")
                .eq("id", currentUser.id)
                .single();

                setUser({
                    ...currentUser,
                    ...jobs,
                });

                console.log('User set:', currentUser);
            } else if (!currentUser) {
                setUser(null);
            }
        });

        return () => {
            // Unsubscribe from the listener when the component is unmounted
            authListener.subscription.unsubscribe();
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
        router.push("/")
    };

    const exposed = {
        user,
        loginWithGoogle,
        logout,
    };

    return <Context.Provider 
            value={exposed}
            keepMounted={true}>
                 {children}
          </Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;