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
            path='/'
            element={<App />}
          />
          <Route
            path='/generate'
            element={<QrConeGenerate />}
          />
          <Route
            path='/generate-history'
            element={<QrCodeGenerateHistory />}
          />
          <Route
            path='/scanner'
            element={<QrCodeScanner />}
          />
          <Route
            path='/scanner-history'
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
