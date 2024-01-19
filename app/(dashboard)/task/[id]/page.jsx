import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


// export const dynamicParams = true;


// we cant statically generate pages because we are using authentication here
// export async function generateStaticParams() {
//     const res = await fetch('http://localhost:5000/tickets')
  
//     const data = await res.json()
   
//     return data.map((task) => ({
//       id: task.id
//     }))
//   }

const getData = async(id) =>{

    const supabase = createServerComponentClient({cookies});
    const {data} =  await supabase.from('tasks').select().eq('id',id).single();

    return data;
}

const Id = async({params}) => {
    const data = await getData(params.id);
    getData(params.id);
    return ( 
        <>
            <div key={data.id} className="listContainer">
                <h3>{data.title}</h3>
                <p>{data.body}</p>
                <div>{data.priority}</div>
            </div>   
        </>
     );
}
 
export default Id;