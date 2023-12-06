import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";
import chefImage from "../../assets/chef.avif";
import SubHeading from "../SubHeading";

const Introduction = () => {
  return (
    <div className={cn("app_bg", "app_wrapper", "section_padding")} id="intro">
      <div className={cn("app_wrapper_img", "app_wrapper_img_reverse")}>
        <div className={cn(styles.wrapper_img, "img_padding")}>
          <Image
            src={chefImage}
            alt="intro_image"
            objectFit="cover"
            width={550}
            height={600}
          />
        </div>
      </div>
      <div className="app_wrapper_info">
        <SubHeading title={"Chef's Word"} />
        <h1 className="headtext_cormorant">{"What We Believe In"}</h1>
        <div className={styles.intro_content}>
          <div className={styles.intro_content_quote}>
            <p className="opensans">
              {
                "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit . Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc."
              }
            </p>
          </div>
        </div>
        <div className={styles.intro_sign}>
          <p className="opensans">Chef & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
