
export const dynamicParams = true;

export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/tickets')
  
    const data = await res.json()
   
    return data.map((task) => ({
      id: task.id
    }))
  }

const getData = async(id) =>{

    const req = await fetch(`http://localhost:5000/tickets/${id}`,{
    next:{
        revalidate:60
    }})
    const data = await req.json();

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