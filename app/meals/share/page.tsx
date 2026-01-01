import ImagePicker from "@/component/meals/image-picker"
import classes from "./page.module.css"
import { SaveMeal } from "@/data/meals"
import { redirect } from "next/navigation";
import MealFormSubmit from "@/component/meals/meal-form-submit"

export default function ShareMealPage(){

   //server validation
   function isInvalid(text: string){
      return(text.trim() === "")
   }

   async function shareMeal(formData:any){
     "use server"

     const meal = {
        title: formData.get('title'),
        image: formData.get('image'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
     }

     if(isInvalid(meal.title) ||
        isInvalid(meal.summary) ||
        isInvalid(meal.instructions) ||
        isInvalid(meal.creator) || 
        isInvalid(meal.creator_email) ){
         throw new Error("Error occured")
        }

     //console.log(meal)

     SaveMeal(meal);
     redirect('/meals')

   }

    return(
        <>
         <header className={classes.header}>
            <h1>
                Share your <span className={classes.highlight}>Favourite Meal</span>
            </h1>
            <p>
                or any other meal you feel needs sharing
            </p>
         </header>
         <main className={classes.main}>
          <form className={classes.form}   action={shareMeal}>
            <div className={classes.row}>
               <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name"  required/>
               </p>
               <p>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
               </p>
            </div> 
               <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
               </p>
               <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" required />
               </p>
               <p>
                <label htmlFor="instructions">Instructions</label>
                <textarea name="instructions" 
                   id="instructions" 
                   rows={10} 
                   required>
                </textarea>
               </p>
               <ImagePicker  label="Your Image" name="image"/>
               <p className={classes.actions}>
                <MealFormSubmit />
               </p>
           </form>
         </main>
        </>
    )
}