import Link from "next/link"



export default function Home() {
  return (
    <>
      <h2  style={{color:"white", textAlign:"center"}}>Time To Get Started..!</h2>
       <p><Link href={"/meals"}>Meals</Link></p> 
       <p><Link href={"/meals/share"}> Share Meals</Link></p>
       <p><Link href={"/community"}>Community</Link></p> 
    </>
  )
}