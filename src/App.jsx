import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Vigilant/Login";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/vigilante/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
