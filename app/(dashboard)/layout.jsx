import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


const AuthLayout = async({children}) => {

    const supabase = createServerComponentClient({cookies});
    const {data} = await supabase.auth.getSession();

    
    
    if(!data.session){
        redirect('/')
    }
    
    const mail = data.session.user;
    
    return ( 
        <>
            <nav className='dashboard-nav'>
                <h1>Task Manager</h1>
                <Link href="/task"> DashBoard </Link>
                <Link href="/task/newtask">new Task</Link>

                <>!! welcome {mail.email}</>

                <LogoutButton />
                </nav>
            {children}
        </>
     );
}
 
export default AuthLayout;