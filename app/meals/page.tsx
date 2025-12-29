import classes from "./page.module.css"
import Link from "next/link"
import MealsGrid from '@/component/meals/meals-grid'
import { getMealsData } from "@/data/meals"

export default async function MealPage(){

     const meals = await getMealsData()
    return (
        <>
           <header className={classes.header}>
              <h1>
                 Tasty Meals, Created <span className={classes.highlight}>By You</span>
              </h1>
                <p>
                    Choose your favorite recipe & cook yourself. Enjoy!!!!
                </p>
             
                <p className={classes.tsa}>
                  <Link href="/meals/share">Share Your Favourite Recipe</Link>
                </p>
           </header>

           <main  className={classes.main}> 
               <MealsGrid meals={meals}></MealsGrid>
           </main>
        </>
    )
}