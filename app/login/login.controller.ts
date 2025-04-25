import { makeGetFetchRequest, makePostFetchRequest } from "@/lib/requests";
import { UserModel } from "@/models/user.model";

export async function callGenerateLoginEmail(email: string): Promise<{[key:string]: string}> {
     const result = await makePostFetchRequest<{[key:string]: string}>('login',JSON.stringify({email}));
     return result;
}

/**
 * Fetch user details by token
 * @param url url to fetch user details
 * @param token token used for authentication
 * @returns UserModel containing user details
 */
export async function fetchUserByToken(url: string, token: string): Promise<UserModel> {
     const result = await makeGetFetchRequest<UserModel>(url, {'Authorization': token});
     console.log(result);
     return result;
}