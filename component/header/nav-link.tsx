"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';


export default function NavLink(){
    const pathName = usePathname();
    return(
        <ul>
              <li>
                <Link href={"/meals"}  className={pathName.startsWith("/meals") ? classes.active:''}>Browse Meals</Link>
              </li>
              <li>
                <Link href={"/community"} className={pathName == "/community" ? classes.active: ''}>Foodies community</Link>
              </li>
            </ul>
    )
}