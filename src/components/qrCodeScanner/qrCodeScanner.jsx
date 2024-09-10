import { QrReader } from "react-qr-reader";
import style from "./qrCodeScanner.module.scss";

import { SCAN_DATA } from "../../constants";
import { useState } from "react";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const handleScan = (result) => {
    if (!result) return;

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    if (prevData.includes(result.text)) return;

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]));

    setScanned(result.text);
  };

  return (
    <>
      <h1>Scanner Code</h1>
      <QrReader
        onResult={handleScan}
        scanDelay={1000}
        containerStyle={{ width: "500px" }}
      />
      <p>{scanned}</p>
    </>
  );
};
