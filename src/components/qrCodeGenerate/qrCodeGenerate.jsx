import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import style from "./qrCodeGenerate.module.scss";

import { GENERATE_DATA } from "../../constants";

export const QrConeGenerate = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState("");

  const handleClick = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setShow(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setShow("");
  };

  return (
    <>
      <h1>Code Generate</h1>
      <div className={style["block-generate"]}>
        <div className={style["block-form"]}>
          <input
            type='text'
            value={value}
            onChange={handleChange}
          />

          <button
            type='button'
            onClick={handleClick}
          >
            Generate!
          </button>
        </div>

        {show !== "" && (
          <div className={style["block-code"]}>
            <QRCodeSVG value={value} />
          </div>
        )}
      </div>
    </>
  );
};
