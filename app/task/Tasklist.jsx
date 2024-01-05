import Link from "next/link";
const Tasklist = async() => {
    await new Promise(resolve => setTimeout(resolve,3000));
    const request = await fetch("http://localhost:5000/tickets", {
        next: {
          revalidate: 0 // use 0 to opt out of using cache
        }
      });
      
    const data = await request.json();
    
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
        {/* <h3>task abs</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, commodi!</p>
        <h3>task 999</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, laudantium!</p> */}
        </>
     );
}
 
export default Tasklist;