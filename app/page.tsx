import LoginComponent from "@/app/login/login.component";
import { Suspense } from "react";


/**
 * Login page component 
 */
export default function Home() {

  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-[url(/images/zoro-background.jpg)] flex flex-row items-center justify-center">
       <Suspense>
       <LoginComponent></LoginComponent>
       </Suspense>
    </div>
  );


}
