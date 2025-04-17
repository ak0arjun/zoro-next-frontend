"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { INTERNATIONALIZATION } from "@/lib/i8n";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "../../components/ui/spinner";
import { callGenerateLoginEmail } from "./login.controller";

/**
 * Login component to intiate login flow for the user
 */
export default function LoginComponent() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    return (
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
            <Input type="email" ref={emailInputRef} placeholder="Email" className="text-primary-text" />
            <div className="p-6">

            </div>
            <div className="flex flex-row items-center justify-center">
                {!isLoading && <Button className="bg-primary-green hover:bg-hover cursor-pointer" onClick={() => generateLoginEmail()}>Login</Button>}
                <Spinner show={isLoading} ></Spinner>
            </div>
        </div>
    );


    /**
     * Validate the email provided by the user if incorrect generate error.
     * Make a rest api call to server to generate an email to login
     */
    async function generateLoginEmail(): Promise<void> {
        const emailText = emailInputRef?.current?.value;

        if (!emailText || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailText)) {
            toast(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_INCORRECT_ERROR, {
                position: 'top-right',
                className: 'bg-gold-accent!',
                closeButton: true,
            })
            return;
        }
        setIsLoading(true);

        const response = await callGenerateLoginEmail(emailText);
        console.log(response);
    }
}