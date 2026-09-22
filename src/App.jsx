import './App.css'

function App() {

  return (
    <div className="resume-container">
      {/* Cabeçalho / Dados Pessoais */}
      <header className="resume-header">
        <h1>
          César Augusto Novello França
          </h1>
        <p>
          Desenvolvedor JavaScript / React
          </p>
        <div className="contact-info">
          <span>
            Email: cesarsfx1058@gmail.com
            </span> | 
          <span> 
            Telefone: (12) 98877-1919
            </span> | 
          <span>
             <a href="https://www.linkedin.com/in/c%C3%A9sar-fran%C3%A7a-152a062a1/">LinkedIn </a>
             </span>
        </div>
      </header>

      {/* Perfil Profissional */}
      <section className="resume-section">
        <h2>
          Objetivo / Resumo Profissional
          </h2>
        <p>
          Desenvolvedor Front-End em início de carreira, com base sólida teórica e prática em JavaScript (ES6+), HTML5, CSS3 e na biblioteca React. Desenvolvo projetos pessoais aplicando boas práticas de componenteização, versionamento de código com Git/GitHub e design responsivo. Dedicado, autodidata e motivado a solucionar problemas reais por meio do código, buscando integrar um tempo focado em inovação tecnológica.
        </p>
      </section>

      {/* Habilidades Técnicas */}
      <section className="resume-section">
        <h2>
          Habilidades</h2>
        <ul>
          <li>
            JavaScript (ES6+)
            </li>
          <li>
            React.js / HTML5 / CSS3
            </li>
          <li>
            Git & GitHub
            </li>
        </ul>
      </section>

      {/* Formação Acadêmica */}
      <section className="resume-section">
        <h2>
          Formação Acadêmica
          </h2>
        <div className="education-item">
          <h3>
            ADS - Análise e Desenvolvimento de Sistemas / Faculdade
            </h3>
          <p>
            UNIVAP
            </p>
        </div>
      </section>
    </div>
  );
}

export default App
