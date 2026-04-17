import { useState } from 'react'
import fotoPerfil from './assets/perfil.jpg'
import background from './assets/bg-portfolio.png'
import './index.css'
import ProjectCard from './components/ProjectCards.jsx'
import SkillBadge from './components/SkillBadge.jsx'

const meusProjetos = [
  {
    id: 1,
    titulo: "E-commerce Tech",
    descricao: "Uma loja virtual feita com HTML e CSS.",
    link: "https://github.com"
  },
  {
    id: 2,
    titulo: "App de Clima",
    descricao: "Consumo de API meteorológica em JS.",
    link: "https://github.com"
  },
  {
    id: 3,
    titulo: "Task List",
    descricao: "Gerenciador de tarefas com LocalStorage.",
    link: "https://github.com"
  }
];

const minhasHabilidades = [
  { id: 1, nome: "React", icone: "⚛️" },
  { id: 2, nome: "JavaScript", icone: "💛" },
  { id: 3, nome: "HTML5", icone: "🟠" },
  { id: 4, nome: "CSS3", icone: "🔵" },
];


function App() {
  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    // 1. Impede o comportamento padrão de recarregar a página
    e.preventDefault();
    console.log(formData);
    // 3. Simulação de feedback ao usuário
    alert(`Obrigado, ${formData.nome}! Sua mensagem foi enviada com sucesso.`);

    // 4. Limpa o formulário após o "envio"
    setFormData({ nome: '', email: '', msg: '' });
  }

  return (
    <><header>
      <nav>
        <div className="logo">Portfolio</div>
        <ul>
          <li><a href="#sobre">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header><main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <img src={fotoPerfil} alt="Foto de Renê Andrade" />
          <div className="nome">
            <h4>Renê Andrade</h4>
          </div>
          <div className="descricao">
            <p>Olá! Sou estudante de Sistemas para Internet e desenvolvedor em busca de novos desafios. Apaixonado
              por tecnologia.</p>
          </div>
        </section>

        <section id="habilidades">
          <h2>Minhas Habilidades</h2>
          <div className="grid-habilidades">
            {minhasHabilidades.map((skill) => (
              <SkillBadge
                key={skill.id}
                nome={skill.nome}
                icone={skill.icone}
              />
            ))}
          </div>
        </section>

        <section id="projetos">
          <div className="card">
            <h2>Meus Projetos</h2>
            <div id="lista-projetos" className="grid-projetos">
              {meusProjetos.map((projeto) => (
                <ProjectCard
                  key={projeto.id}
                  titulo={projeto.titulo}
                  descricao={projeto.descricao}
                  link={projeto.link} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="campo">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                required
                value={formData.msg}
                onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
              ></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </section>

        <section id="contato-email">
          <h2>Contato por E-mail</h2>

          <p>Entre em contato comigo através do email: <a href="mailto: renelerus@gmail.com">renelerus@gmail.com</a>
          </p>
        </section>
      </main><footer>
        <p>&copy; 2026 - Desenvolvido por Renê Andrade</p>
      </footer></>

  )
}

export default App
