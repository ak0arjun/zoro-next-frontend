export async function makePostFetchRequest<T>(url: string, body: string): Promise<T> {
    const response = await fetch(process.env.NEXT_PUBLIC_ZORO_BACKEND_URL + url, {
        method: 'POST',
        body: body
    });
    return response.json();
}