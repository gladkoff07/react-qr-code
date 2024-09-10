import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";

import style from "./qrCodeGenerateHistory.module.scss";

export const QrCodeGenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <>
      <h1>History Generate</h1>
      <ul className={style["list-history"]}>
        {Array.isArray(data) && data.length !== 0 ? (
          data.map((text) => (
            <li
              key={text}
              className={style["list-history__item"]}
            >
              <div className={style["list-history__img"]}>
                <QRCodeSVG
                  value={text}
                  size={75}
                />
              </div>
              <div className={style["list-history__text"]}>{text}</div>
            </li>
          ))
        ) : (
          <h3>None elements...</h3>
        )}
      </ul>
    </>
  );
};
