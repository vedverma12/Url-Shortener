import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <main className="bg-purple-100">
    <section className="grid grid-cols-2 h-[50vh] ">
     <div className=" flex flex-col gap-4 items-center justify-center">
      <p className="text-3xl font-bold">
        The Best URL shortener
      </p>
      <p className="px-56 text-center">
        Most Straightforward URL shortener
      </p>
       <div className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white' >Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white' >GitHub</button></Link>
      </div>
     </div>
     <div className="flex justify-start relative">
      <Image className="mix-blend-darken" alt="An image of a vector" src={"/vector.jpg"} fill={true} ></Image>
     </div>
    </section>
   </main>
  )
}
