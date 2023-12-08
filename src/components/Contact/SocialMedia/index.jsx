import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import styles from "./styles.module.scss";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className={styles.social_links_icons}>
      <Link target="_blank" href={"/"}>
        <FiFacebook className={styles.social_icon} />
      </Link>
      {/* <Link>
        <FiTwitter className={styles.social_icon} />
      </Link> */}
      <Link target="_blank" href={"/"}>
        <FiInstagram className={styles.social_icon} />
      </Link>
    </div>
  );
};

export default SocialMedia;
