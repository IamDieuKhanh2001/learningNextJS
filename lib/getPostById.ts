import { notFound } from "next/navigation";

export default async function getPostById(postId: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json();
}