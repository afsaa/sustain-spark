import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const body = await request.json()

  const { token, path } = body

  if (!token && !path) {
    return Response.json({ message: 'Bad request' }, { status: 400 })
  }

  if (token !== process.env.CACHE_TOKEN) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }

  revalidatePath(path)

  return Response.json({ message: 'Success' }, { status: 200 })
}
