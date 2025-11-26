// App.jsx
import { Routes, Route } from "react-router-dom";

// Componentes globales
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Páginas principales
import Inicio from "./pages/Inicio.jsx";
import NuestrosServicios from "./pages/NuestrosServicios.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import AvisoPrivacidad from "./pages/AvisoPrivacidad.jsx";

// 🆕 Importaciones de BLOG
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-shell">
        <Routes>
          {/* Rutas existentes */}
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<NuestrosServicios />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route
            path="/aviso-de-privacidad"
            element={<AvisoPrivacidad />}
          />

          {/* 🆕 RUTAS DEL BLOG */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}