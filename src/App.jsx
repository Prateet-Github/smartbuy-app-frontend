import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
