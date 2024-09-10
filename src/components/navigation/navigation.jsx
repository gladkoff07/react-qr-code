import { Link } from "react-router-dom";
import style from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <Link to='/'>App</Link>
      <Link to='/generate'>Generate</Link>
      <Link to='/generate-history'>History generate</Link>
      <Link to='/scanner'>Scanner</Link>
      <Link to='/scanner-history'>History scanner</Link>
    </nav>
  );
};
