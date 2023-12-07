import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import styles from "./styles.module.scss";
import SubHeading from "../SubHeading";
import Button from "../Button";
import MenuItem from "./Menuitem";
import menuImage from "../../assets/menu.avif";

const mains = [
  {
    title: "Small Fish",
    price: "£3.00",
    tags: "",
  },
  {
    title: "Medium Fish",
    price: "£4.00",
    tags: "",
  },
  {
    title: "Large Fish (Hoddock or Cod)",
    price: "£5.95",
    tags: "",
  },
  {
    title: "Pattie",
    price: "£1.10",
    tags: "",
  },
  {
    title: "Pattie (Chesse & Onion)",
    price: "£1.40",
    tags: "",
  },
  {
    title: "Pattie (Corned Beef)",
    price: "£1.40",
    tags: "",
  },
  {
    title: "Pattie (Fish)",
    price: "£1.60",
    tags: "",
  },
  {
    title: "Beef Burger in a Bun",
    price: "£3.50",
    tags: "",
  },
  {
    title: "Chicken Fillet Burger in a Bun",
    price: "£4.80",
    tags: "",
  },
  {
    title: "Chicken Burger in a Bun",
    price: "£3.50",
    tags: "",
  },
  {
    title: "Scampi & Chips",
    price: "£6.95",
    tags: "",
  },
  {
    title: "Chicken nuggets(6) & Chips",
    price: "£3.95",
    tags: "",
  },
  {
    title: "Turky Spam",
    price: "£1.95",
    tags: "",
  },
];

const fishFritterSpecial = [
  {
    title: "Fish Fritter & Chips",
    price: "£3.50",
    tags: "",
  },
  {
    title: "With Sauce",
    price: "£4.20",
    tags: "",
  },
  {
    title: "And Can",
    price: "£4.90",
    tags: "",
  },
];

const chickenWings = [
  {
    title: "4 pieces & chips",
    price: "£3.50",
    tags: "",
  },
  {
    title: "6 pieces & chips",
    price: "£4.50",
    tags: "",
  },
  {
    title: "8 pieces & chips",
    price: "£5.95",
    tags: "",
  },
  {
    title: "10 pieces & chips",
    price: "£6.95",
    tags: "",
  },
  {
    title: "15 pieces & chips",
    price: "£9.95",
    tags: "",
  },
  {
    title: "20 pieces & chips",
    price: "£11.95",
    tags: "",
  },
];

const bonelessChickenMiniFillets = [
  {
    title: "2 pieces + chips",
    price: "£3.99",
    tags: "",
  },
  {
    title: "3 pieces + chips",
    price: "£4.99",
    tags: "",
  },
  {
    title: "4 pieces + chips",
    price: "£5.99",
    tags: "",
  },
];

const fishAndChipsSpecial = [
  {
    title: "Small Fish, Chips & Peas",
    price: "£4.90",
    tags: "",
  },
];

const sides = [
  {
    title: "Chips",
    price: "£2.20",
    tags: "",
  },
  {
    title: "Chips & Cheese",
    price: "£2.95",
    tags: "",
  },
  {
    title: "Bread Cake",
    price: "£0.70",
    tags: "",
  },
  {
    title: "Peas",
    price: "£1.00",
    tags: "",
  },
  {
    title: "Gravy",
    price: "£1.00",
    tags: "",
  },
  {
    title: "Beans",
    price: "£1.00",
    tags: "",
  },
  {
    title: "Curry Sauce",
    price: "£1.00",
    tags: "",
  },
  {
    title: "Sausage",
    price: "£1.00",
    tags: "",
  },
  {
    title: "Jumbo Sausage",
    price: "£1.90",
    tags: "",
  },
  {
    title: "Chip Buttie",
    price: "£2.60",
    tags: "",
  },
  {
    title: "Veg Samosa",
    price: "£1.95",
    tags: "",
  },
  {
    title: "Meat Samosa",
    price: "£1.95",
    tags: "",
  },
  {
    title: "Spring Roll",
    price: "£1.95",
    tags: "",
  },
];

const drinks = [
  {
    title: "Cans",
    price: "£0.95",
    tags: "",
  },
  {
    title: "Bottles",
    price: "£1.50",
    tags: "",
  },
  {
    title: "Carton",
    price: "£0.40",
    tags: "",
  },
];

const smithysSpecial = [
  {
    title: "Chilli & Chips",
    price: "£4.90",
    tags: "",
  },
  {
    title: "Chicken Curry & Chips",
    price: "£4.90",
    tags: "",
  },
  {
    title: "Pie, Chips, Peas & Gravy",
    price: "£4.90",
    tags: "",
  },
  {
    title: "2 Sausages, Chips, Peas & Gravy",
    price: "£4.90",
    tags: "",
  },
  {
    title: "Stew & Dumplings with Chips & Peas",
    price: "£4.90",
    tags: "",
  },
];

const kidSpecial = [
  {
    title: "Sausage or Pattie with Chips + Peas or Gravy + Beans or Curry",
    price: "£3.40",
    tags: "",
  },
];

const SpacialMenu = () => {
  return (
    <div
      className={cn(styles.special, "flex_center", "section_padding")}
      id="menu"
    >
      <div className={styles.special_title}>
        <SubHeading title={"Menu That Fits Your Palatte"} />
        <h1 className="headtext_cormorant">{"Today's Special"}</h1>
      </div>
      <div className={styles.special_menu}>
        {smithysSpecial && (
          <div className={cn(styles.special_menu_wine, "flex_center")}>
            <p className={styles.special_menu_heading}>{"Special"}</p>
            <div className={styles.special_menu_items}>
              {smithysSpecial?.map(({ title, price, tags }, i) => (
                <div className={styles.menu_item_wrapper} key={i}>
                  <Link href={`/menu/#menu-intro`} passHref>
                    <MenuItem title={title} price={price} tags={tags} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={styles.special_menu_img}>
          <Image
            src={menuImage}
            objectFit="contain"
            layout="fill"
            alt="menu_img"
          />
        </div>
        {kidSpecial && (
          <div className={cn(styles.special_menu_cocktails, "flex_center")}>
            <p className={styles.special_menu_heading}>{"Kid's Special"}</p>
            <div className={styles.special_menu_items}>
              {kidSpecial?.map(({ title, price, tags }, i) => (
                <div key={i}>
                  <Link href={`/menu/#menu-intro`} passHref>
                    <MenuItem title={title} price={price} tags={tags} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Button name="View More" path="/menu" />
    </div>
  );
};

export default SpacialMenu;
