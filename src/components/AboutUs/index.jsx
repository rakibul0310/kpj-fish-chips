import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";
import LineBreak from "../SubHeading/LineBreak";
import Button from "../Button";
import knife from "../../assets/knife.avif";

const AboutUs = () => {
  return (
    <div
      className={cn(styles.about, "app_bg", "flex_center", "section_padding")}
      id="about"
    >
      {/* <div className={cn(styles.about_overlay, "flex_center")}>
        <div className={styles.about_overlay_img}>
          <Image
            src={info?.metadata?.initials?.imgix_url}
            layout="fill"
            objectFit="cover"
            alt="overlay"
          />
        </div>
      </div> */}
      <div className={cn(styles.about_content, "flex_center")}>
        <div className={styles.about_content_about}>
          <h1 className="headtext_cormorant">{"About Us"}</h1>
          <LineBreak />
          <p className="opensans">
            {
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et."
            }
          </p>
          <Button name="Know More" path="#intro" />
        </div>
        <div className={cn(styles.about_content_knife, "flex_center")}>
          <div className={styles.about_content_img}>
            <Image
              src={knife}
              layout="fill"
              objectFit="contain"
              alt="about_knife"
              priority
            />
          </div>
        </div>
        <div className={styles.about_content_history}>
          <h1 className="headtext_cormorant">{"Our History"}</h1>
          <LineBreak />
          <p className="opensans">
            {
              "Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet."
            }
          </p>
          <Button name="Know More" path="#gallery" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
