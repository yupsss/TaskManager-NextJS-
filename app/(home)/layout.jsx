import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const HomeLayout = async({children}) => {

    const supabase = createServerComponentClient({cookies});
    const {data} = await supabase.auth.getSession();

    if(data.session){
        redirect('/task');
    }

    return ( 
        <>
            <nav className='dashboard-nav'>
                <h1>Task Manager</h1>
            </nav>
            {children}
        </>
     );
}
 
export default HomeLayout;