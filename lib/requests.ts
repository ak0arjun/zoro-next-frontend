import { toast } from "sonner";
import { INTERNATIONALIZATION } from "./i8n";

/**
 * Make a POST fetch request
 * @param url URL to send the request to
 * @param body Request body as a string
 * @returns Response of type T
 */
export async function makePostFetchRequest<T>(url: string, body: string): Promise<T> {
    const response = await fetch(process.env.NEXT_PUBLIC_ZORO_BACKEND_URL + url, {
        method: 'POST',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '12345',
        },
    });
    return response.json();
}

/**
 * Make a GET fetch request
 * @param url URL to send the request to
 * @param headers Headers to include in the request
 * @returns Response of type T
 */
export async function makeGetFetchRequest<T>(url: string, headers: { [key: string]: string }): Promise<T> {
    const response = await fetch(process.env.NEXT_PUBLIC_ZORO_BACKEND_URL + url, {
        method: 'GET',
        headers: {
            ...headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '12345',
        }
    });
    return response.json();
}

/**
 * Handle API request error. Display toast with error message
 * @param error Error object
 */
export function handleApiRequestError(error: Error): void {
    console.log(error);
    toast(INTERNATIONALIZATION.EN_US.API_FAILED_ERROR, {
        position: 'top-right',
        className: 'bg-gold-accent!',
        closeButton: true,
    })
}