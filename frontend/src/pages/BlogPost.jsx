// src/pages/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { useTheme } from "../theme/ThemeProvider"; 

export default function BlogPost() {
    const { slug } = useParams();
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const post = blogPosts.find((p) => p.slug === slug);
    
    // Clases para animación
    const ANIMATION_CLASSES = "opacity-0 animate-fade-in-up";
    const primaryColor = isDark ? 'var(--color-primary-dark)' : 'var(--color-primary)';
    
    // Estilos de lectura para el contenido, centrado y legible
    const contentStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem',
        color: 'var(--color-text)',
    };


    if (!post) {
        return (
            <main className="blog-post-page bg-[var(--color-bg)] text-[var(--color-text)] py-20">
                <section className="blog-post-not-found text-center max-w-xl mx-auto">
                    <h1 className="text-4xl font-extrabold mb-4">Artículo no encontrado</h1>
                    <p className="text-lg text-[var(--color-muted)]">El contenido que buscas ya no está disponible o el enlace es incorrecto.</p>
                    <Link to="/blog" className="blog-back-link mt-6 inline-block font-semibold text-[var(--color-primary)] hover:underline">
                        Volver al blog
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="blog-post-page bg-[var(--color-bg)] py-12 md:py-16">
            <article className="blog-post max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* === CABECERA Y METADATOS === */}
                <header 
                    className={`blog-post-header text-center ${ANIMATION_CLASSES} delay-100`} 
                    style={contentStyle}
                >
                    <span 
                        className="blog-post-tag inline-block px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: primaryColor, marginBottom: '0.5rem' }}
                    >
                        {post.categoria}
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] my-2">
                        {post.titulo}
                    </h1>
                    
                    <p className={`blog-post-meta text-lg text-[var(--color-muted)] ${ANIMATION_CLASSES} delay-200`}>
                        {post.fecha} · por <strong style={{ color: primaryColor }}>ProTech Dev</strong>
                    </p>
                </header>

                {/* === IMAGEN DESTACADA === */}
                <div 
                    className={`blog-post-image-wrapper relative w-full overflow-hidden rounded-xl shadow-xl mt-8 ${ANIMATION_CLASSES} delay-300`}
                    style={{ maxHeight: '450px', margin: '0 auto', maxWidth: '1000px' }}
                >
                    <img 
                        src={post.imagen} 
                        alt={post.titulo} 
                        className="w-full h-full object-cover" 
                        style={{ minHeight: '300px' }}
                    />
                </div>

                {/* === CONTENIDO DEL ARTÍCULO - CORRECCIÓN DE TIPOGRAFÍA === */}
                <section 
                    className={`blog-post-content text-lg ${ANIMATION_CLASSES} delay-400`} 
                    // CORRECCIÓN 1: Reducimos el line-height (antes 1.8) y el font-size (antes 18px o text-lg)
                    style={{ ...contentStyle, marginTop: '2.5rem', lineHeight: 1.6, fontSize: '1.05rem' }}
                >
                    {/* Renderiza los párrafos y aplica estilos de lectura */}
                    {post.contenido
                        .trim()
                        .split("\n")
                        .map((parrafo, index) =>
                            parrafo.trim() === "" ? null : (
                                <p 
                                    key={index} 
                                    // CORRECCIÓN 2: Reducimos el margen entre párrafos
                                    style={{ marginBottom: '1rem' }} 
                                >
                                    {parrafo.trim()}
                                </p>
                            )
                        )}
                </section>

                {/* === FOOTER DE NAVEGACIÓN === */}
                <footer className={`blog-post-footer text-center mt-12 ${ANIMATION_CLASSES} delay-500`}>
                    <Link to="/blog" className="blog-back-link font-semibold text-xl text-[var(--color-primary)] hover:underline">
                        ← Volver al blog
                    </Link>
                </footer>
            </article>
        </main>
    );
}