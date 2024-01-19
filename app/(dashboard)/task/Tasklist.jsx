import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";
const Tasklist = async() => {
    // await new Promise(resolve => setTimeout(resolve,3000));
    // const request = await fetch("http://localhost:5000/tickets", {
    //     next: {
    //       revalidate: 0 // use 0 to opt out of using cache
    //     }
    //   });

    const supabase = createServerComponentClient({cookies});
    const { data,error } = await supabase.from('tasks').select();

    if(error) console.log(error.message);
      
    // const data = await request.json();
    
    return ( 
        <>
        {data.map((task) => (
            <div key={task.id} className="listContainer">
                <Link href={`task/${task.id}`}>
                <h3>{task.title}</h3>
                <p>{task.body.slice(0,200)}....</p>
                <div>{task.priority}</div>
                </Link>
            </div>   
        ))}
        </>
     );
}
 
export default Tasklist;