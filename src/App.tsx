import cls from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageHome from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuynhAnh from "./pages/QuynhAnh.tsx";

function App() {
  return (
    <Router>
      <div className={cls.Layout}>
        <Header />
        <div className={cls.Container}>
          <Routes>
            <Route path="/" element={<PageHome />} />
            {/* Thêm các route khác nếu có */}
            <Route path="quynhanh" element={<QuynhAnh />} />
            {/* Route 404: phải để cuối cùng */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
