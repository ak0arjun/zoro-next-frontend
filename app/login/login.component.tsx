"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { INTERNATIONALIZATION } from "@/lib/i8n";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "../../components/ui/spinner";
import { callGenerateLoginEmail, fetchUserByToken } from "./login.controller";
import { handleApiRequestError } from "@/lib/requests";
import useSWR from "swr";
import { UserModel } from "@/models/user.model";
import { redirect, useSearchParams } from "next/navigation";
import useUserStore from "@/states/user.state";

/**
 * Login component to intiate login flow for the user
 */
export default function LoginComponent() {
    const params = useSearchParams();
    const token = params.get('token');
    const setJwtToken = useUserStore((state) => state.setJwtToken);
    const setUserProfile = useUserStore((state) => state.setUserProfile);
    const { data: user, isLoading } = useSWR<UserModel>(token? ['user', token] : null, ([url, token]: string[]) => fetchUserByToken(url, token));
    if (token && user) {
        updateUserState(user, token);
    }
    const emailInputRef = useRef<HTMLInputElement>(null);
    const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
    return (
        <div className="p-4 md:p-16 w-full md:w-1/2 m-auto rounded-lg bg-background opacity-90 z-10 drop-shadow-lg">
            {!isLoading && <>
                <div className="flex flex-row items-center justify-center">
                    <div className="h-12 w-12 relative">
                        <Image src="/icons/swords.svg" alt="Crossed swords icon" fill />
                    </div>
                    <div className="p-2">

                    </div>
                    <div data-testid='login-title-id' className="text-primary-text text-3xl">
                        Zoro AI
                    </div>
                </div>
                <div className="p-6">

                </div>
                <Input type="email" ref={emailInputRef} placeholder="Enter your email" className="text-primary-text" />
                <div className="p-6">

                </div>
                <div className="flex flex-row items-center justify-center">
                    {!isButtonLoading && <Button className="bg-primary-green hover:bg-hover cursor-pointer" onClick={() => generateLoginEmail()}>Login</Button>}
                    <Spinner show={isButtonLoading} ></Spinner>
                </div>
            </>}
            {
                <Spinner show={isLoading} ></Spinner>
            }
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
        setIsButtonLoading(true);

        try {
            await callGenerateLoginEmail(emailText);
            emailInputRef!.current!.value = '';
            toast(INTERNATIONALIZATION.EN_US.LOGIN_EMAIL_GENERATED_MESSAGE, {
                position: 'top-right',
                className: 'bg-gold-accent!',
                closeButton: true,
            })
        } catch (error) {
            handleApiRequestError(error as Error);
        }
        setIsButtonLoading(false);
    }

    /**
     * Update the user state and redirect to home
     * @param user User detail object containing user information
     * @param jwtToken Token to be used for authentication
     * @returns void
     */
    function updateUserState(user: UserModel, jwtToken: string): void {
        setJwtToken(jwtToken);
        setUserProfile(user);
        redirect('/home');
    }

}