import { RequestOptions } from "https"
import { RequestMeta } from "../../../../node_modules/next/dist/server/request-meta"
import { RequestData } from "../../../../node_modules/next/dist/server/web/types"
import { NextResponse } from "../../../../node_modules/next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}

// export async function POST(req: RequestMeta) {

//     const resultMove = await req.files.photoFromFront.mv(photoPath);

//     return NextResponse.json('tpoto')
// }

