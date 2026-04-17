const meusProjetos = [
    {
        titulo: "E-commerce Tech",
        descricao: "Uma loja virtual feita com HTML e CSS.",
        link: "https://github.com"
    },
    {
        titulo: "App de Clima",
        descricao: "Consumo de API meteorológica em JS.",
        link: "https://github.com"
    },
    {
        titulo: "Task List",
        descricao: "Gerenciador de tarefas com LocalStorage.",
        link: "https://github.com"
    }
];



const container = document.getElementById('lista-projetos');

meusProjetos.forEach(projeto => {
    const card = `
        <div class="card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver repositório</a>
        </div>
    `;
    container.innerHTML += card;
});

// Seleciona o formulário
const formContato = document.querySelector('#contato form');

formContato.addEventListener('submit', function (event) {
    // 1. Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    // 2. Captura os valores dos campos (opcional, para uso futuro)
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // 3. Simulação de feedback ao usuário
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // 4. Limpa o formulário após o "envio"
    formContato.reset();
});