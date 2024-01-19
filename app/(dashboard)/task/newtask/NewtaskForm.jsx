"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const NewtaskForm = () => {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [priority, setPriority] = useState("low")

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data = {title,body,priority};
        const res  = await fetch("http://localhost:3000/api/tasks",{
            method:"POST",
            headers: {"content-type" : "application/json"},
            body : JSON.stringify(data)
        })

        const json = await res.json();

        
        if(json.error)
        console.log(json.error.message);

        if(json.data)
        {
            router.push('/task');
            router.refresh();
        }
    }
    return ( 
    <>
        <form  onSubmit={handleSubmit} >
        <label >
            <span>Title:</span>
            <input
            required 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
        </label>
        <label>
            <span>description:</span>
            <textarea
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
            />
        </label>
        <label>
            <span>Priority:</span>
            <select 
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
            </select>
        </label>
        <button>submit</button>
        </form>
    </> 
    );
}
 
export default NewtaskForm;