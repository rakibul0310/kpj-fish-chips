import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";
import LineBreak from "../../components/SubHeading/LineBreak";
import Button from "../../components/Button";
import knife from "../../assets/knife.avif";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <Layout>
      <div
        className={cn(styles.about, "app_bg", "flex_center", "section_padding")}
        id="about"
      >
        <div className={cn(styles.about_content, "flex_center")}>
          <div className={styles.about_content_about}>
            <h1 className="headtext_cormorant">{"About Us"}</h1>
            <LineBreak />
            <p className="opensans">
              {
                "We are a family run business and have been in the trade for 10+ years and aim to please every customer that walks in. All our food is cooked fresh daily, we cater to all members of different communities. We also accept phone orders so they are ready for you to collect on arrival. We accept credit/ debit cards alongside cash. We are happy to hear any feedback from customers good or bad."
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
                "Welcome to R SMITHYS CHIPPY LTD., a culinary gem with a rich history spanning over a decade. Our story began more than 10 years ago when our family embarked on a journey to create a dining establishment that goes beyond serving food—it's about crafting experiences and building connections with our community. With a commitment to quality and a passion for pleasing every customer, we have evolved into a cherished part of the local culinary landscape."
              }
            </p>
            <Button name="Know More" path="#gallery" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
