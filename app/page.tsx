const books = [
  {
    title: "Hacia el país soñado",
    author: "Rodolfo Walsh",
    image: "/images/hacia-el-pais-sonado.jpg",
    href: "https://editorialargenta.com.ar/producto/hacia-el-pais-sonado/",
  },
  {
    title: "Hablemos claro sobre el grooming",
    author: "Leonardo R. S.",
    image: "/images/grooming.jpg",
    href: "https://editorialargenta.com.ar/producto/grooming/",
  },
  {
    title: "Progestinaciones",
    author: "Nora Fagundez",
    image: "/images/progestinaciones.jpg",
    href: "https://editorialargenta.com.ar/producto/progestinaciones/",
  },
];

const services = [
  {
    number: "01",
    title: "Edición y diseño",
    text: "Lectura editorial, corrección, diseño de cubierta, diagramación y preparación de originales con estándares profesionales.",
  },
  {
    number: "02",
    title: "Producción e impresión",
    text: "Tiradas piloto, impresión digital y offset, encuadernación y terminaciones pensadas para cada proyecto.",
  },
  {
    number: "03",
    title: "Distribución",
    text: "Una red de canales tradicionales y alternativos para que cada libro encuentre su lugar y llegue a sus lectores.",
  },
  {
    number: "04",
    title: "Difusión y marketing",
    text: "Estrategia, prensa, posicionamiento y acciones comerciales que construyen una presencia sostenida para autores y obras.",
  },
  {
    number: "05",
    title: "Representación",
    text: "Vínculos con instituciones, organismos, ferias y productores para ampliar las posibilidades de cada título.",
  },
  {
    number: "06",
    title: "Asesoría jurídica",
    text: "Registro, protección de derechos de autor y acompañamiento legal especializado en propiedad intelectual.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Editorial Argenta, inicio">
          <span>Editorial</span>
          <strong>ARGENTA</strong>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#editorial">Editorial</a>
          <a href="#libros">Libros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">
          Publicá tu libro <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-kicker">
          <span>Buenos Aires</span>
          <span>Desde 1970</span>
        </div>
        <div className="hero-grid">
          <h1>
            Ideas que
            <br />
            merecen un <em>libro.</em>
          </h1>
          <div className="hero-side">
            <p>
              Editamos, producimos y llevamos cada obra al encuentro con sus
              lectores. Más de medio siglo haciendo libros con oficio, criterio
              y visión.
            </p>
            <a className="text-link" href="#editorial">
              Conocé la editorial <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-signature" aria-hidden="true">
          <span>A</span>
          <div className="signature-lines">
            <i />
            <i />
            <i />
            <i />
          </div>
          <small>Edición · Distribución · Difusión</small>
        </div>
      </section>

      <section className="statement" id="editorial">
        <p className="eyebrow">La editorial</p>
        <div className="statement-copy">
          <h2>
            Un libro no termina cuando se imprime.
            <br />
            <span>Ahí empieza su recorrido.</span>
          </h2>
          <div className="statement-columns">
            <p>
              Desde 1970 acompañamos a autores y autoras en todo el proceso
              editorial: del manuscrito a la librería, de la idea a una obra con
              identidad y proyección.
            </p>
            <p>
              Combinamos experiencia, diseño y estrategia comercial para que
              cada publicación encuentre su forma, su público y su lugar en el
              mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="catalog" id="libros">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selección Argenta</p>
            <h2>Libros recientes</h2>
          </div>
          <a
            className="outline-link"
            href="https://editorialargenta.com.ar/#libreria"
            target="_blank"
            rel="noreferrer"
          >
            Ver catálogo completo <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="book-grid">
          {books.map((book, index) => (
            <a
              className="book-card"
              href={book.href}
              target="_blank"
              rel="noreferrer"
              key={book.title}
            >
              <div className="book-image-wrap">
                <span>0{index + 1}</span>
                <img src={book.image} alt={`Portada de ${book.title}`} />
              </div>
              <div className="book-meta">
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
          <a
            className="book-card book-card-callout"
            href="#contacto"
            aria-label="Publicá tu libro con Editorial Argenta"
          >
            <div>
              <span className="callout-index">04</span>
              <p>Tu obra puede ser la próxima.</p>
              <h3>Publicá con Argenta.</h3>
            </div>
            <span className="callout-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="services-intro">
          <p className="eyebrow">Gestión editorial integral</p>
          <h2>
            Todo lo que un libro necesita para llegar <em>más lejos.</em>
          </h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers" aria-label="Editorial Argenta en cifras">
        <p className="eyebrow">Nuestra trayectoria</p>
        <div className="number-grid">
          <div>
            <strong>56</strong>
            <span>Años de oficio editorial</span>
          </div>
          <div>
            <strong>1.730</strong>
            <span>Libros editados</span>
          </div>
          <div>
            <strong>6.570</strong>
            <span>Puntos de venta</span>
          </div>
          <div>
            <strong>16+</strong>
            <span>Canales de distribución</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-title">
          <p className="eyebrow">Hablemos de tu libro</p>
          <h2>
            Cada gran libro
            <br />
            empieza con una <em>conversación.</em>
          </h2>
        </div>
        <div className="contact-action">
          <p>
            Contanos sobre tu obra, el momento en el que está y hasta dónde
            querés llevarla. Nuestro equipo te responderá para pensar el próximo
            paso.
          </p>
          <a
            className="primary-cta"
            href="mailto:info@editorialargenta.com?subject=Quiero%20publicar%20mi%20libro"
          >
            Escribinos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span>Editorial</span>
          <strong>ARGENTA</strong>
        </a>
        <div className="footer-contact">
          <a href="mailto:info@editorialargenta.com">
            info@editorialargenta.com
          </a>
          <a href="tel:+541144914593">+54 11 4491 4593</a>
        </div>
        <address>
          Av. Corrientes 1250, 3º F
          <br />
          Buenos Aires, Argentina
        </address>
        <p className="footer-note">
          Edición · Producción · Distribución
          <br />© 2026 Editorial Argenta
        </p>
      </footer>
    </main>
  );
}
