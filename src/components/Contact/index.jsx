import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";
import SubHeading from "../SubHeading";
import SocialMedia from "./SocialMedia";
import footerImage from "../../assets/outlet.jpg";

const Contacts = () => (
  <div className={cn("app_bg", "app_wrapper", "section_padding")} id="contact">
    <div className={cn("app_container", "app_wrapper")}>
      <div className={cn(styles.contact_info, "app_wrapper_info")}>
        <SubHeading title={"Contact"} />
        <h1 className="headtext_cormorant">{"Contact US"}</h1>
        <div className={cn(styles.contact_title, "app_wrapper_content")}>
          <p className="opensans">{"+020 8894 6777"}</p>
          <div className="app_wrapper_content">
            <p className="opensans">
              {"Address: 97 Whitton Road, Hounslow, TW3 2EH, UK"}
            </p>
          </div>
          <p className={cn(styles.contact_hours, "cormorant")}>
            {"Opening Hours"}
          </p>
          <p className={cn(styles.contact_title, "opensans")}>
            {"Tue - Sat : 12:00 Pm - 09:30 Pm"}
          </p>
        </div>
        <h1 className={cn(styles.follow_title, "headtext_cormorant")}>
          {"Find Us"}
        </h1>
        <div className={styles.contact_social}>
          <SocialMedia />
        </div>
      </div>
      <div className="app_wrapper_img">
        <div className={cn(styles.wrapper_img, "img_padding")}>
          <Image
            src={footerImage}
            alt="find_us_img"
            objectFit="contain"
            width={500}
            height={550}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;
