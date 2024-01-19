"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LogoutButton = () => {

    const router = useRouter();
    const [loading,setLoading] = useState(false);

    const handleLogout = async()=>{
         setLoading(true);
         const supabase = createClientComponentClient();
         const { error } = await supabase.auth.signOut();

         
         if(error)
         {
            console.log(error);
         }
         if(!error)
         {
            router.push('/login');
         }
         setLoading(false);
    }
    return ( 
        <button onClick={handleLogout}>{!loading && <>Logout</>}{loading && <>logging out ...</>}</button>
     );
}
 
export default LogoutButton;