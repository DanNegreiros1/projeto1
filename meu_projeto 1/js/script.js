// Função chamada quando a página carrega
window.onload = function() {
    // Obtém o perfil do usuário armazenado no sessionStorage
    const user = sessionStorage.getItem('user');
    console.log(user);  // Adicionando log para verificar o valor de 'user'

    // Verifica se o usuário está logado
    if (!user) {
        window.location.href = 'login.html';  // Redireciona para o login se não houver usuário
    }

    // Altera o conteúdo da página conforme o perfil do usuário
    const userActions = document.getElementById('user-actions');
    if (user === 'admin') {
        userActions.innerHTML = `
            <h3>Ações do Administrador</h3>
            <button onclick="criarOS()">Criar OS</button>
            <button onclick="atribuirOS()">Atribuir OS</button>
            <button onclick="gerarRelatorio()">Gerar Relatório</button>
        `;
    } else if (user === 'tecnico') {
        userActions.innerHTML = `
            <h3>Ações do Técnico</h3>
            <button onclick="atualizarStatus()">Atualizar Status</button>
            <button onclick="colherAssinatura()">Colher Assinatura</button>
        `;
    } else if (user === 'cliente') {
        userActions.innerHTML = `
            <h3>Ações do Cliente</h3>
            <button onclick="solicitarServico()">Solicitar Serviço</button>
            <button onclick="verHistorico()">Ver Histórico</button>
        `;
    }
};

// Funções de ações (simulação)
function criarOS() {
    alert("Ação: Criar Ordem de Serviço");
}

function atribuirOS() {
    alert("Ação: Atribuir Ordem de Serviço");
}

function gerarRelatorio() {
    alert("Ação: Gerar Relatório em Excel");
}

function atualizarStatus() {
    alert("Ação: Atualizar Status da Ordem de Serviço");
}

function colherAssinatura() {
    alert("Ação: Colher Assinatura do Cliente");
}

function solicitarServico() {
    alert("Ação: Solicitar Serviço de Refrigeração");
}

function verHistorico() {
    alert("Ação: Ver Histórico de Ordens de Serviço");
}

function logout() {
    sessionStorage.removeItem('user');
    window.location.href = 'login.html';  // Redireciona para o login
}
