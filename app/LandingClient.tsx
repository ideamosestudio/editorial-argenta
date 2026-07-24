"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const readers = [
  { src: assetPath("/hero/reader-planeta.png"), label: "Planeta Vida" },
  { src: assetPath("/hero/reader-1984.png"), label: "1984" },
  { src: assetPath("/hero/reader-batalla.png"), label: "El poder de ganar la batalla" },
];

const books = [
  ["Hacia el país soñado", "Rodolfo Walsh", assetPath("/images/hacia-el-pais-sonado.jpg")],
  ["Hablemos claro sobre el grooming", "Leonardo R. S.", assetPath("/images/grooming.jpg")],
  ["Progestinaciones", "Nora Fagundez", assetPath("/images/progestinaciones.jpg")],
  ["El poder de ganar la batalla", "María José Villarreal", assetPath("/images/el-poder.jpg")],
  ["3 Ideas", "Carlos Curi", assetPath("/images/tres-ideas.jpg")],
  ["Las vías de la vida", "Ricardo Geddo", assetPath("/images/vias-vida.jpg")],
  ["Deuda interna II", "Carlos A. Galli", assetPath("/images/deuda-interna.jpg")],
  ["Charlas del alma", "Laura de Silva", assetPath("/images/charlas-alma.jpg")],
  ["La brújula del tiempo", "Dasso", assetPath("/images/brujula-tiempo.jpg")],
  ["Revisionismo historiográfico", "E. Vilte", assetPath("/images/revisionismo.jpg")],
  ["La topología de la realidad", "J. M. Torres", assetPath("/images/topologia.jpg")],
  ["Sol de frío", "Alejandro R. García", assetPath("/images/sol-frio.jpg")],
];

const launches = [
  {
    title: "Hablemos claro sobre el grooming",
    author: "Leonardo R. S.",
    image: assetPath("/images/grooming.jpg"),
    href: "https://editorialargenta.com.ar/producto/grooming/",
  },
  {
    title: "Progestinaciones",
    author: "Raquel Fagundez",
    image: assetPath("/images/lanzamiento-progestinaciones.jpg"),
    href: "https://editorialargenta.com.ar/producto/progestinaciones/",
  },
  {
    title: "3 Ideas",
    author: "Carlos Curi",
    image: assetPath("/images/lanzamiento-3-ideas.jpg"),
    href: "https://editorialargenta.com.ar/producto/3-ideas/",
  },
  {
    title: "La aventura de explorar",
    author: "Belén Herrera",
    image: assetPath("/images/lanzamiento-aventura-explorar.jpg"),
    href: "https://editorialargenta.com.ar/producto/la-aventura-de-explorar/",
  },
  {
    title: "Las vías de la vida",
    author: "Ricardo Geddo",
    image: assetPath("/images/vias-vida.jpg"),
    href: "https://editorialargenta.com.ar/producto/las-vias-de-la-vida/",
  },
  {
    title: "Deuda interna II",
    author: "Carlos A. Galli",
    image: assetPath("/images/deuda-interna.jpg"),
    href: "https://editorialargenta.com.ar/producto/deuda-interna-ii/",
  },
  {
    title: "Charlas del alma",
    author: "Laura de Silva",
    image: assetPath("/images/charlas-alma.jpg"),
    href: "https://editorialargenta.com.ar/producto/charlas-del-alma/",
  },
  {
    title: "La brújula del tiempo",
    author: "Dasso",
    image: assetPath("/images/brujula-tiempo.jpg"),
    href: "https://editorialargenta.com.ar/producto/la-brujula-del-tiempo/",
  },
];

const services = [
  ["Edición", "Lectura, corrección y decisiones editoriales que fortalecen la obra sin borrar la voz del autor."],
  ["Diseño", "Cubiertas y páginas interiores con identidad, legibilidad y criterio comercial."],
  ["Producción", "Impresión digital y offset, tiradas piloto, encuadernación y terminaciones profesionales."],
  ["Distribución", "Canales tradicionales y alternativos para llevar cada título a sus lectores."],
  ["Difusión", "Prensa, contenidos y presencia pública para construir una conversación alrededor del libro."],
  ["Marketing", "Estrategia, posicionamiento y acciones comerciales pensadas para cada proyecto."],
];

export default function LandingClient() {
  const [activeReader, setActiveReader] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveReader((current) => (current + 1) % readers.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateNav = () => setNavScrolled(window.scrollY > 48);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  function moveHero(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--mouse-x", `${x * 28}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y * 18}px`);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Consulta editorial de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nProyecto:\n${message}`,
    );
    setSent(true);
    window.location.href = `mailto:info@editorialargenta.com?subject=${subject}&body=${body}`;
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-nav ${menuOpen ? "menu-is-open" : ""} ${navScrolled ? "is-scrolled" : ""}`}>
        <a className="logo" href="#inicio" onClick={closeMenu} aria-label="Editorial Argenta">
          <span>Editorial</span>
          <strong>ARGENTA</strong>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#editorial">Editorial</a>
          <a href="#catalogo">Libros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="nav-cta" href="#contacto">
          Publicá tu libro <span>↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-links">
          {[
            ["Editorial", "#editorial"],
            ["Libros", "#catalogo"],
            ["Servicios", "#servicios"],
            ["Contacto", "#contacto"],
          ].map(([label, href], index) => (
            <a href={href} onClick={closeMenu} key={href}>
              <small>0{index + 1}</small>
              {label}
              <span>↗</span>
            </a>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <a href="mailto:info@editorialargenta.com">info@editorialargenta.com</a>
          <span>Buenos Aires · Argentina</span>
        </div>
      </div>

      <section
        className="hero"
        id="inicio"
        ref={heroRef}
        onMouseMove={moveHero}
      >
        <div
          className="hero-bg"
          style={{ backgroundImage: `url("${assetPath("/hero/library-bg.jpg")}")` }}
        />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-seal" aria-hidden="true">
          <strong>56</strong>
          <span>años de<br />oficio editorial</span>
        </div>
        <div className="hero-copy">
          <p className="hero-kicker">Editorial Argenta — fundada en 1970</p>
          <h1>
            Ideas que
            <br />
            merecen un <span>libro</span>
          </h1>
          <p className="hero-lead">
            Hacemos realidad proyectos editoriales, desde la edición hasta la
            difusión y el marketing. ¿Tenés una idea? Escribinos.
          </p>
          <div className="hero-actions">
            <a className="hero-button hero-button-light" href="#catalogo">
              <span>Ver catálogo</span>
              <i>↘</i>
            </a>
            <a className="hero-button hero-button-line" href="#contacto">
              <span>Quiero editar mi libro</span>
              <i>↗</i>
            </a>
          </div>
        </div>

        <div className="reader-stage" aria-live="polite">
          {readers.map((reader, index) => (
            <img
              key={reader.src}
              src={reader.src}
              alt={`Lector con el libro ${reader.label}`}
              className={index === activeReader ? "is-active" : ""}
            />
          ))}
        </div>
        <div className="reader-controls">
          <span>Lecturas Argenta</span>
          <div>
            {readers.map((reader, index) => (
              <button
                type="button"
                key={reader.src}
                className={index === activeReader ? "is-active" : ""}
                onClick={() => setActiveReader(index)}
                aria-label={`Mostrar ${reader.label}`}
              >
                <i />
              </button>
            ))}
          </div>
          <strong>0{activeReader + 1} / 03</strong>
        </div>
      </section>

      <section className="launches" aria-label="Nuevos lanzamientos">
        <div className="launches-heading">
          <div>
            <p className="section-tag">Recién llegados</p>
            <h2>Nuevos lanzamientos</h2>
          </div>
          <a href="#catalogo">Ver catálogo completo <span>↗</span></a>
        </div>
        <div className="launches-window">
          <div className="launches-track">
            {[0, 1].map((group) => (
              <div className="launches-group" aria-hidden={group === 1} key={group}>
                {launches.map((launch, index) => (
                  <a
                    className="launch-card"
                    href={launch.href}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={group === 1 ? -1 : undefined}
                    key={`${group}-${launch.title}`}
                  >
                    <span className="launch-number">0{index + 1}</span>
                    <div className="launch-cover">
                      <img src={launch.image} alt={group === 0 ? `Portada de ${launch.title}` : ""} />
                    </div>
                    <div className="launch-meta">
                      <span>{launch.author}</span>
                      <h3>{launch.title}</h3>
                    </div>
                    <i>↗</i>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="editorial">
        <p className="section-tag" data-reveal>01 — La editorial</p>
        <div className="manifesto-main">
          <h2 data-reveal>
            Un libro no se limita
            <br />
            a ocupar un estante.
            <br />
            <span>Abre un mundo.</span>
          </h2>
          <div className="manifesto-copy" data-reveal>
            <p>
              Desde 1970 acompañamos autores y obras en todo el recorrido:
              transformamos manuscritos en libros con identidad, presencia y
              proyección.
            </p>
            <p>
              Oficio editorial, mirada contemporánea y una estrategia concreta
              para que cada publicación encuentre a sus lectores.
            </p>
            <a href="#servicios">Cómo trabajamos <span>↘</span></a>
          </div>
        </div>
        <div className="manifesto-ticker" aria-hidden="true">
          <div>EDITAR · DISEÑAR · PRODUCIR · DISTRIBUIR · COMUNICAR ·</div>
          <div>EDITAR · DISEÑAR · PRODUCIR · DISTRIBUIR · COMUNICAR ·</div>
        </div>
      </section>

      <section className="editorial-pick">
        <div className="editorial-pick-art" data-reveal>
          <span className="pick-orbit" aria-hidden="true" />
          <img
            src={assetPath("/images/hacia-pais-3d.png")}
            alt="Libro Hacia el país soñado, de Miguel A. Walsh"
          />
        </div>
        <div className="editorial-pick-copy" data-reveal>
          <p className="section-tag">Elegido por Argenta</p>
          <h2>Hacia el país<br />soñado</h2>
          <p className="pick-author">Miguel A. Walsh</p>
          <p className="pick-description">
            Una mirada sobre el desarrollo argentino que transforma el
            diagnóstico en propuestas. Un libro para discutir el país posible,
            imaginar su futuro y volver a pensar lo que podemos construir.
          </p>
          <a
            href="https://editorialargenta.com.ar/producto/hacia-el-pais-sonado/"
            target="_blank"
            rel="noreferrer"
          >
            Conocer el libro <span>↗</span>
          </a>
        </div>
        <div className="pick-index" aria-hidden="true">01 / DESTACADO</div>
      </section>

      <section className="catalog" id="catalogo">
        <div className="section-head" data-reveal>
          <div>
            <p className="section-tag">02 — Catálogo</p>
            <h2>Conocé nuestro<br />catálogo.</h2>
          </div>
          <a href="https://editorialargenta.com.ar/#libreria" target="_blank" rel="noreferrer">
            Ver todos <span>↗</span>
          </a>
        </div>
        <div className="books-grid">
          {books.map(([title, author, cover], index) => (
            <a
              className="book"
              href="https://editorialargenta.com.ar/#libreria"
              target="_blank"
              rel="noreferrer"
              key={title}
              data-reveal
              style={{ "--delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
            >
              <div className="book-cover">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={cover} alt={`Portada de ${title}`} />
                <i>Ver libro ↗</i>
              </div>
              <h3>{title}</h3>
              <p>{author}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="feature">
        <div className="feature-bg" />
        <div className="feature-copy" data-reveal>
          <p className="section-tag">Lanzamiento destacado</p>
          <h2>Planeta<br />Vida</h2>
          <p>
            José Luis Cesana propone un cambio radical y pacífico de los
            paradigmas del modelo social vigente. Un ensayo crítico y optimista,
            basado en hechos, que invita a tomar conciencia de la importancia
            de la vida y a construir otra realidad posible.
          </p>
          <a href="https://editorialargenta.com.ar/producto/planeta-vida/" target="_blank" rel="noreferrer">
            Descubrir el libro <span>↗</span>
          </a>
        </div>
        <div className="feature-reader" data-reveal>
          <img src={assetPath("/images/planeta-vida-transparent.png")} alt="Libro Planeta Vida, de José Luis Cesana" />
        </div>
        <div className="feature-word" aria-hidden="true">PLANETA VIDA</div>
      </section>

      <section className="services" id="servicios">
        <div className="services-title" data-reveal>
          <p className="section-tag">03 — Servicios</p>
          <h2>Del manuscrito<br />a los lectores.</h2>
        </div>
        <div className="services-grid">
          {services.map(([title, copy], index) => (
            <article key={title} data-reveal>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="impact">
        <div data-reveal>
          <strong>56</strong>
          <span>años de trayectoria</span>
        </div>
        <div data-reveal>
          <strong>1.730</strong>
          <span>libros editados</span>
        </div>
        <div data-reveal>
          <strong>6.570</strong>
          <span>puntos de venta</span>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-intro" data-reveal>
          <p className="section-tag">04 — Contacto</p>
          <h2>
            Tu libro puede
            <br />
            empezar <span>hoy.</span>
          </h2>
          <p>
            Contanos en qué etapa está tu proyecto. Nuestro equipo te responderá
            para pensar el próximo paso.
          </p>
        </div>
        <form onSubmit={submitForm} data-reveal>
          <label>
            <span>Nombre y apellido</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            <span>Teléfono</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="full-field">
            <span>Contanos sobre tu proyecto</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit">
            <span>{sent ? "Mensaje preparado" : "Enviar consulta"}</span>
            <i>{sent ? "✓" : "↗"}</i>
          </button>
          {sent && (
            <p className="form-note">
              Se abrió tu aplicación de correo. Si no la ves, escribinos a{" "}
              <a href="mailto:info@editorialargenta.com">info@editorialargenta.com</a>.
            </p>
          )}
        </form>
      </section>

      <footer>
        <div className="footer-top">
          <a className="logo footer-logo" href="#inicio">
            <span>Editorial</span>
            <strong>ARGENTA</strong>
          </a>
          <h2>Ideas que merecen un libro.</h2>
        </div>
        <div className="footer-grid">
          <div>
            <small>Contacto</small>
            <a href="mailto:info@editorialargenta.com">info@editorialargenta.com</a>
            <a href="tel:+541144914593">+54 11 4491 4593</a>
          </div>
          <div>
            <small>Estudio</small>
            <p>Av. Corrientes 1250, 3º F<br />Buenos Aires, Argentina</p>
          </div>
          <div>
            <small>Navegación</small>
            <a href="#editorial">Editorial</a>
            <a href="#catalogo">Libros</a>
            <a href="#servicios">Servicios</a>
          </div>
          <div>
            <small>Legal</small>
            <p>© 2026 Editorial Argenta<br />Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
