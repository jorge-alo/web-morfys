import './App.css'
import logo from './assets/morfis-logo.png'
import fondo from './assets/fondo.png'
import whatsapp from './assets/whatsapp.png'
import recepcionista from './assets/recepcionista.png'

export const App = () => {

  const handleDemo = () => {
    window.open('https://morfys.vercel.app/morfis', '_blank');
  }
  return (
    <div className="container-app">

      {/* LOGO */}
      <header className="section-logo">
        <div className="logo">
          <img src={logo} alt="Logo de Morfys" />
        </div>
      </header>
      <main>
        {/* PRESENTACIÓN */}
        <section className="section-presentation" style={{ backgroundImage: `url(${recepcionista})` }}>
          <div className="container-info">
            <div>
              <h1>Tu menú digital moderno, simple y listo para enviar por WhatsApp</h1>
              <button onClick={handleDemo}>Ver menú de ejemplo</button>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="section-beneficios">
          <h2>Transformá tu lista de precios en un menú web rápido, ordenado y fácil de actualizar.</h2>

          <ul className="section-beneficios__ul">
            <li>✔ Más ventas: los clientes ven todo lo que ofrecés.</li>
            <li>✔ Menos preguntas repetidas.</li>
            <li>✔ Imagen profesional.</li>
            <li>✔ Pedidos claros por WhatsApp.</li>
            <li>✔ Actualización rápida de precios.</li>
            <li>✔ Ideal para promociones del día.</li>
          </ul>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="section-galeria" style={{ backgroundImage: `url(${fondo})` }}>
          <div className="section-galeria-overlay">
            <div>
              <ol className="section-galeria__ol">
                <li>Enviás el link del menú al cliente.</li>
                <li>El cliente ve todo ordenado.</li>
                <li> Arma su pedido y lo envía por WhatsApp.</li>
              </ol>
              <button onClick={handleDemo}>Ver menú de ejemplo</button>
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section className="section-plan">
          <h2>Plan Full $20.000</h2>
          <h3>Incluye:</h3>

          <ul>
            <li>✔ Panel fácil de usar desde tu celular.</li>
            <li>✔ Carga inicial completa de productos.</li>
            <li>✔ Cambios de precios masivos.</li>
            <li>✔ Soporte técnico.</li>
            <li>✔ Hosting incluido.</li>
            <li>✔ Actualizaciones ilimitadas.</li>
            <li>✔ Pedidos directos por WhatsApp.</li>
          </ul>
          <a href="https://wa.me/5491144040093" target="_blank">
          <div className='container-whatsapp'><img src={whatsapp} alt="imagen de whatsapp" /></div><span> Contactar por WhatsApp</span>
        </a>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section className="section-question">
          <ul>
            <li>¿Puedo agregar platos todos los días? — Sí.</li>
            <li>¿Necesito una computadora? — No, todo desde tu celular.</li>
            <li>¿Funciona en todos los celulares? — Sí.</li>
            <li>¿Los clientes deben descargar algo? — No.</li>
            <li>¿Qué pasa si no tengo fotos? — Se usa tu logo.</li>
            <li>¿Lo puedo cancelar cuando quiera? — Sí.</li>
          </ul>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>Morfis — Menús digitales para casas de comida</p>
        <a href="https://wa.me/5491144040093" target="_blank">
          <div className='container-whatsapp'><img src={whatsapp} alt="imagen de whatsapp" /></div>Contactar por WhatsApp
        </a>
        <p>© 2025 Morfis — Todos los derechos reservados</p>
      </footer>

    </div>
  )
}

