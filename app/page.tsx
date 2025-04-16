import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

/**
 * Login page component 
 */
export default function Home() {
  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-[url(/images/zoro-background.jpg)] flex flex-row items-center justify-center">

      <div className="p-4 md:p-16 w-full md:w-1/2 m-auto rounded-lg bg-background opacity-90 z-10 drop-shadow-lg">
        <div className="flex flex-row items-center justify-center">
          <div className="h-12 w-12 relative">
            <Image src="/icons/swords.svg" alt="Crossed swords icon" fill />
          </div>
          <div className="p-2">

          </div>
          <div className="text-primary-text text-3xl">
            Zoro AI
          </div>
        </div>
        <div className="p-6">

        </div>
        <Input type="email" placeholder="Email" className="text-primary-text" />
        <div className="p-6">

        </div>
        <div className="flex flex-row items-center justify-center">
          <Button className="bg-primary-green hover:bg-hover cursor-pointer ">Login</Button>
        </div>
      </div>
    </div>
  );
}
