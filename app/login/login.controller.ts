import { makePostFetchRequest } from "@/lib/requests";

export async function callGenerateLoginEmail(email: string): Promise<{[key:string]: string}> {
     const result = await makePostFetchRequest<{[key:string]: string}>('login',JSON.stringify({email}));
     return result;
}