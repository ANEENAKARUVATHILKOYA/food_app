import Link from "next/link";
import classes from './header.module.css';
import Image from "next/image";

import logo from "@/assests/logo.png";
import HeaderBackground from "./header-background";

export default function MainHeader(){
    return (
      <>
        <HeaderBackground />
        <header className={classes.header}>
          <Link className={classes.logo} href="/">
            <Image src={logo} alt="A Plate Of Food" priority></Image>
            Next Level Food
          </Link>

          <nav className={classes.nav}>
            <ul>
              <li>
                <Link href={"/meals"}>Browse Meals</Link>
              </li>
              <li>
                <Link href={"/community"}>Foodies community</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );

    
}

