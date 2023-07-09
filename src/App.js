import HomePage from "pages/HomePaje";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
