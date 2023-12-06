import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import styles from "./styles.module.scss";
const data = ["HOME", "MENU", "ABOUT", "CONTACT"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbarItems = [...data];

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className={styles.navbar_container} id="navigation">
      <Link href="/#home" passHref>
        <div>
          {/* <Image
            src={navbarInfo?.metadata?.logo?.imgix_url || images?.gericht}
            layout="fill"
            objectFit="cover"
            alt="logo"
          /> */}
          <span className={styles.logo_text}>{"KPJ'S FISH & CHIPS"}</span>
        </div>
      </Link>
      <ul className={styles.navbar_links}>
        {navbarItems?.map((item, index) => (
          <li className={cn(styles.menu_item, "opensans")} key={index}>
            <Link
              href={item === "HOME" ? "/" : `/${item?.toLowerCase()}`}
              passHref
            >
              <span>{item}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbar_login}>
        {/* <p className={cn(styles.menu_item, "opensans")}>
          <Link href="#contact" passHref>
            {navbarInfo?.metadata?.action || ""}
          </Link>
        </p> */}
      </div>
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu
          className={styles.navbar_hamburger}
          onClick={handleToggle}
        />
        {toggleMenu && (
          <div
            className={cn(
              styles.navbar_smallscreen_overlay,
              "slide_bottom",
              "flex_center"
            )}
          >
            <MdOutlineRestaurantMenu
              className={styles.overlay_close}
              onClick={handleToggle}
            />
            <ul className={styles.navbar_smallscreen_links}>
              {navbarItems?.map((item, index) => (
                <li onClick={handleToggle} key={index}>
                  <Link href={`/#${item?.toLowerCase()}`} passHref>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
