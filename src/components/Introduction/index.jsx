import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";
import chefImage from "../../assets/chef.avif";
import SubHeading from "../SubHeading";

const Introduction = () => {
  return (
    <div
      className={cn("app_bg", "app_wrapper", "section_padding", "intro_wrap")}
      id="intro"
    >
      <h1 className="headtext_cormorant">{"Testimonials"}</h1>
      <div className={styles.ts_container}>
        <div className={styles.ts_card}></div>
        <div className={styles.ts_card}></div>
        <div className={styles.ts_card}></div>
      </div>
    </div>
  );
};

export default Introduction;
