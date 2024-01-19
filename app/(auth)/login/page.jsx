"use client"


import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "../Form";

export default function Login() {

  const [error , setError] = useState('')
  const router = useRouter();

  const handleSubmit = async(event,email,password) =>{
    event.preventDefault();
    setError('')
    
    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if(error)
    {
      setError(error.message);
    }
    if(!error)
     { router.push('/task');}
    }


  return (
    <div>
      Login
      <Form handleSubmit={handleSubmit}/>
      {error && <>{error}</>}
    </div>
  )
}
