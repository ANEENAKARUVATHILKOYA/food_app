"use client"
import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from 'next/image';

export default function ImagePicker({label, name}: any){
    const imageinputRef = useRef<HTMLInputElement>(null);
    const[imagePreview, setimagePreview] = useState<any>();

    function handleUploadEvent(){
        imageinputRef.current?.click();
    }

    function handleImageChange(event: any) {
        const file = event.target.files[0];

        if(!file){
            setimagePreview(null);
            return;
        }
        const filereader = new FileReader();
        filereader.onload = ()=>{
             setimagePreview(filereader.result)
        };
        filereader.readAsDataURL(file);
    }

    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
            <div className={classes.preview}>
                  {!imagePreview && <p>No Image</p>}
                  {imagePreview && <Image src={imagePreview} alt="Preview" fill unoptimized />}
            </div>
             <input className={classes.input}
                 type="file"
                 id={name}
                 accept="image/png, image/jpeg"
                 name={name}
                 ref={imageinputRef}
                 onChange={handleImageChange }
                 required></input>
                 <button className={classes.button} type='button'
                   onClick={handleUploadEvent}>Upload Image</button>
            </div>
        </div>
    )
}