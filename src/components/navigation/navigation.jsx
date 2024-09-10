import { Link } from "react-router-dom";
import style from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <Link to='/react-qr-code/'>App</Link>
      <Link to='/react-qr-code/generate'>Generate</Link>
      <Link to='/react-qr-code/generate-history'>History generate</Link>
      <Link to='/react-qr-code/scanner'>Scanner</Link>
      <Link to='/react-qr-code/scanner-history'>History scanner</Link>
    </nav>
  );
};
