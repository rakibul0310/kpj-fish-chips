import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import styles from "./styles.module.scss";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className={styles.social_links_icons}>
      <Link
        target="_blank"
        href={
          "https://www.facebook.com/KPJsFishAndChips/?modal=admin_todo_tour"
        }
      >
        <FiFacebook className={styles.social_icon} />
      </Link>
      {/* <Link>
        <FiTwitter className={styles.social_icon} />
      </Link> */}
      <Link target="_blank" href={"https://www.instagram.com/kpjsfishchips/"}>
        <FiInstagram className={styles.social_icon} />
      </Link>
    </div>
  );
};

export default SocialMedia;
