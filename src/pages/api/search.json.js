import { getCollection } from "astro:content";

async function getPosts(){
    const posts = await getCollection("blogs");
    posts.sort((a, b) => (a.data.pubDate > b.data.pubDate) ? -1 : 1);
    return posts.map((post) => ({
        slug: post.slug,
        author: post.data.author,
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        tags: post.data.tags,
    }))

}


export async function GET(req, res) {
    return new Response(JSON.stringify(await getPosts()), {
        status: 200,
        headers: {
            "Content-Type" : "application/json",
        },
    });
}