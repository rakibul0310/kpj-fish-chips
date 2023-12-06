import Image from "next/image";
import cn from "classnames";

import SubHeading from "../SubHeading";
import Button from "../Button";

import styles from "./styles.module.scss";
import header_image from "../../assets/headerimg.avif";

const Home = () => (
  <div className={cn(styles.header, "section_padding")} id="home">
    <div className={cn("app_container", "app_wrapper")}>
      <div className={styles.wrapper_info}>
        <SubHeading title={"Chase The New Flavour"} />
        <h1 className={styles.header_h1}>{"The Key To Fine Dinig"}</h1>
        <p className={cn(styles.header_p, "opensans")}>
          {"The New Dining Amazing Just Try It!"}
        </p>
        <Button name="Explore Menu" path="#menu" />
      </div>
      <div className="app_wrapper_img">
        <div className={cn(styles.wrapper_img, "img_padding")}>
          <Image
            src={header_image}
            alt="header_img"
            objectFit="cover"
            width={450}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
