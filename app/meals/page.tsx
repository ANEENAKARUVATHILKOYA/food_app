import classes from "./page.module.css"
import Link from "next/link"
import MealsGrid from '@/component/meals/meals-grid'
import { getMealsData } from "@/data/meals"
import { Suspense } from "react"

export const metadata = {
  title: ' Meals Page',
  description: 'Delicious meals, shared by a food-loving community....Enjoy your day',
};

async function MealsData(){
    const meals = await getMealsData()
    return(
        <MealsGrid meals={meals}></MealsGrid>
    )
}


export default async function MealPage(){
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
                <Suspense  fallback={<p className={classes.loading}>Loading...</p>}>
                    <MealsData/>
                </Suspense>
           </main>
        </>
    )
}