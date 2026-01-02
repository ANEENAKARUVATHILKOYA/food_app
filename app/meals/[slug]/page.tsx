import Image from "next/image"
import classes from "./page.module.css"
import {getmealDetailes} from "@/data/meals"
import {notFound} from "next/navigation"


export async function generateMetadata({params}: any){      // for dynamic metadata
    const resolvedParams = await params; 
    const slug = resolvedParams.slug;

    const meal: any = await getmealDetailes(slug);

    console.log("MEAL FROM DB:", meal)

    if (!meal) {
    notFound()
    }
   
    return ({
         title: meal.title,
         description: meal.description
       })
     }

export default  async function mealDetailPage({params}: any){
  const resolvedParams = await params; // unwrap the promise
  const slug = resolvedParams.slug;

  const meal: any = await getmealDetailes(slug);

    console.log("MEAL FROM DB:", meal)

    if (!meal) {
    notFound()
  }
    
   meal.instructions = meal.instructions.replace(/\n/g , '<br/>')

    return(
      <>
        <header className={classes.header}> 
            <div className={classes.image}>
                <Image src={meal.image} alt="" fill />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>mail summary</p>
            </div>    
        </header>
        <main>
            <p className={classes.instructions}  dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
        </main>
      </>
    )
}