export async function GET(request: Request) {
    return new Response('Hello, Next.js!' + process.env.DATA_API_KEY )
  }