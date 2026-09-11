import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const body =  await request.json()
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
      redirect(doc.url)
       }
    else{
        redirect(`${NEXT_PUBLIC_HOST}`)
    }
  const { url } = await params
  return <div>My Post: {url}</div>
}