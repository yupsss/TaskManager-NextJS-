"use client"
import { useState } from "react";

const Form = ({handleSubmit}) => {
    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");

    return ( 
        <div className="inputForm">
            <form onSubmit={(e) => handleSubmit(e,email,pass)}>
                <span>email</span>
                <input type="email" placeholder="xyz@abc.com" required onChange={(e) => setEmail(e.target.value)}/>
                <span>password</span>
                <input type="password" placeholder="fff" required onChange={(e) => setPass(e.target.value)}/>
                <button>submit</button>
             </form>
        </div>
     );
}
 
export default Form;