import { Suspense } from "react";
import Tasklist from "./Tasklist";
import Loading from "../loading";

export default function Tasks() {
  return (
    <div className="Dashboard">
      <h2>pending Tasks</h2>
      <Suspense fallback={<Loading/>}><Tasklist/></Suspense>
    </div>
  )
}
