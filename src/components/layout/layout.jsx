import { Route, Routes } from "react-router-dom";
import {
  App,
  Navigation,
  QrCodeGenerateHistory,
  QrCodeScanner,
  QrCodeScannerHistory,
  QrConeGenerate,
} from "../index";
import style from "./layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Navigation />

      <div className={style.container}>
        <Routes>
          <Route
            path='/react-qr-code/'
            element={<App />}
          />
          <Route
            path='/react-qr-code/generate'
            element={<QrConeGenerate />}
          />
          <Route
            path='/react-qr-code/generate-history'
            element={<QrCodeGenerateHistory />}
          />
          <Route
            path='/react-qr-code/scanner'
            element={<QrCodeScanner />}
          />
          <Route
            path='/react-qr-code/scanner-history'
            element={<QrCodeScannerHistory />}
          />
          <Route
            path='*'
            element={<div>No page</div>}
          />
        </Routes>
      </div>
    </>
  );
};
