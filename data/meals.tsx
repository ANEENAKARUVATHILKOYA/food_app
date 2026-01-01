import sql from "better-sqlite3";

import slugify from "slugify";
import xss from 'xss';
import fs from 'node:fs';

const db = sql("meals.db");

export async function getMealsData(){
    await new Promise((resolve)=> setTimeout(resolve, 5000))
    return db.prepare("Select * FROM meals").all();
}

export function getmealDetailes( slug:string){
    return(
       db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
    )
}

interface MealDetailes {
    slug?:string,
    title:string,
    image?:any,
    summary:string,
    instructions:string,
    creator:string,
    creator_email:string
}

export  async function SaveMeal(Meals: MealDetailes){
       Meals.slug = slugify(Meals.title, {lower:true})
       Meals.instructions = xss(Meals.instructions)

       //for image upload
       if (Meals.image) {
            const extension = Meals.image.name.split('.').pop();
            const filename = `${Meals.slug}.${extension}`;

            const stream = fs.createWriteStream(`public/images/${filename}`);
            const bufferImage = await Meals.image.arrayBuffer();
            stream.write(Buffer.from(bufferImage), (error) => {
            if (error) {
              throw new Error("Image upload failed");
            }
         });

           Meals.image = `/images/${filename}`; // <- add leading slash
        } else {
           Meals.image = '/images/default.png'; // fallback image
        }


       db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug)
        `).run(Meals);
}