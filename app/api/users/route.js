
//http://localhost:3000/api/users

export async function GET(request) {
    const users = [
        { id: 1, username: "quachkhanh2", password: "1234567" },
        { id: 2, username: "quachkhanh3", password: "1234567" },
        { id: 3, username: "quachkhanh4", password: "1234567" },
    ]

    return new Response(JSON.stringify(users))
}