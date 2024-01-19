"use client"

import {useRouter} from "next/navigation";

export default function Home() {
  
  const router = useRouter();
  
  return (
    <main>
     <div className="home">Home
     <button onClick={() => router.push("/login")}>Login</button>
     <button onClick={() => router.push("/register")}>Register</button>
     </div>
    </main>
  )
}
