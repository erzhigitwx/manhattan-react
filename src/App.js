import { lazy, Suspense, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/footer";
import Loading from "./components/loading";
import HomePage from "./pages/homePage";
import ErrorBoundary from "./security/ErrorBoundary";
import "./styles/App.scss";
import BurgerBar from "./components/burger-menu/burgerBar";

const MenuPage = lazy(() => import("./pages/menuPage"));
const AfishaPage = lazy(() => import("./pages/afishaPage"));
const CollabPage = lazy(() => import("./pages/collabPage"));
const GalleryPage = lazy(() => import("./pages/galleryPage"));
const NewsPage = lazy(() => import("./pages/newsPage"));

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const widthScreen = window.innerWidth;
  return (
    <div className="App">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      {(widthScreen <= 950 && (
        <BurgerBar menuActive={menuActive} setMenuActive={setMenuActive} />
      )) || <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />}
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/afisha" element={<AfishaPage />} />
          <Route path="/collab" element={<CollabPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
