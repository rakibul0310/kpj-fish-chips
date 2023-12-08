import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";
import chefImage from "../../assets/chef.avif";
import SubHeading from "../SubHeading";
import { FaStar } from "react-icons/fa";

const Introduction = () => {
  return (
    <div
      className={cn("app_bg", "app_wrapper", "section_padding", "intro_wrap")}
      id="intro"
    >
      <h1 className="headtext_cormorant">{"Testimonials"}</h1>
      <div className={styles.ts_container}>
        <div className={styles.ts_card}>
          <div className={styles.rating_con}>
            <div className={styles.ratings}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>3 Years ago.</span>
          </div>
          <p className={styles.review}>
            Make sure you visit! I’ve tried everything at this chippys . It’s
            made freshly when you order and they even amend to specific dietary
            requirements. They also take orders over the phone so it’s ready
            when you come and collect. Absolutely great customer service the
            staff are so lovely and always smiling. Hygiene is 5 stars 🌟
            absolutely clean. Overall Great place...Great food... and a very
            hospitable team. Thank you
          </p>
          <span className={styles.reviwer}>-Imran T</span>
        </div>
        <div className={styles.ts_card}>
          <div className={styles.rating_con}>
            <div className={styles.ratings}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>2 Years ago.</span>
          </div>
          <p className={styles.review}>
            {
              "Fantastic fish, chips and gyros - huge portions and very reasonable prices. The staff are really friendly too! Glad they're our neighbourhood chippy, but also convenient for those catching trains from Hounslow Station. Hope you're back open again soon when things start to get back to normal."
            }
          </p>
          <span className={styles.reviwer}>-Andrew</span>
        </div>
        <div className={styles.ts_card}>
          <div className={styles.rating_con}>
            <div className={styles.ratings}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>4 Years ago.</span>
          </div>
          <p className={styles.review}>
            AMAZING FOOD AND GREAT SERVICE!!!! Wow, not often you get{" "}
            {"'Amazing'"} food from there, but the food here is above restaurant
            quality, cooked freshly in front of you. (Chicken is the best I have
            ever had and the fish was battered and cooked in front of me fresh,
            soooo tasty, too good). The owners are the most friendly and
            welcoming people. The place looks very clean and trendy. Will 100%
            be a regular here. Thank you guys.
          </p>
          <span className={styles.reviwer}>-Mathew</span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
