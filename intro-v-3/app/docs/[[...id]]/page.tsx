/** @format */
import styles from "./style.module.css";

const DocsPage = ({ params }: any) => {
  return <div className={styles.title}>Docs {params.id}</div>;
};
export default DocsPage;
