import LineBreak from "../SubHeading/LineBreak";

import styles from "./styles.module.scss";

const SubHeading = ({ title, image }) => (
  <div className={styles.sub_heading}>
    <p className="cormorant">{title}</p>
    <LineBreak />
  </div>
);

export default SubHeading;
