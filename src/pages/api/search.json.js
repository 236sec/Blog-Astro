export async function get(req, res) {
    return new Response(JSON.stringify({ message: 'Hello world' }), {
        status: 200,
        headers: {
            "Content-Type" : "application/json",
        },
    });
}