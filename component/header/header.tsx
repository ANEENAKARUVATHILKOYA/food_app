
import Link from "next/link";
import classes from './header.module.css';
import Image from "next/image";
import logo from "@/assests/logo.png";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link"


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
              <NavLink/>  
          </nav>
        </header>
      </>
    );

    
}

