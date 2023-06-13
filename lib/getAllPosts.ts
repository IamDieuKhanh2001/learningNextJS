export default async function getAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}