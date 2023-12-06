import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import styles from "./styles.module.scss";
import SubHeading from "../SubHeading";
import Button from "../Button";
import image1 from "../../assets/dish1.jpg";
import image2 from "../../assets/dish2.jpg";
import image3 from "../../assets/dish3.jpg";
import image4 from "../../assets/dish4.jpg";
import image5 from "../../assets/dish5.jpg";
import image6 from "../../assets/dish6.jpg";
import image7 from "../../assets/dish7.jpg";
import image8 from "../../assets/dish8.jpg";

const data = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={cn(styles.gallery_container, "flex_center")} id="gallery">
      <div className={styles.gallery_content}>
        <SubHeading title={"Choose Your Favorite Dish"} />
        <h1 className="headtext_cormorant">{"Gallery"}</h1>
      </div>
      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image1}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image2}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image3}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image4}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image5}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image6}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image7}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
          <div className={cn(styles.gallery_images_card, "flex_center")}>
            <Image
              src={image8}
              layout="fill"
              objectFit="cover"
              alt="gallery_image"
            />
          </div>
        </div>
        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftShort
            className={styles.gallery_arrow_icon}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={styles.gallery_arrow_icon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
