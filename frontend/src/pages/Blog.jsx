// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1>Blog de iComp</h1>
        <p>
          Ideas, consejos y guías prácticas sobre tecnología, mantenimiento y
          soluciones profesionales para tu empresa.
        </p>
      </section>

      <section className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card-image-wrapper">
              <img src={post.imagen} alt={post.titulo} />
            </div>

            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span className="blog-card-tag">{post.categoria}</span>
                <span className="blog-card-date">{post.fecha}</span>
              </div>

              <h2 className="blog-card-title">{post.titulo}</h2>
              <p className="blog-card-summary">{post.resumen}</p>

              <div className="blog-card-footer">
                <Link to={`/blog/${post.slug}`} className="blog-card-readmore">
                  Leer artículo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}