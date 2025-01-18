import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/sign-in";
import SignupPage from "./pages/sign-up";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
