
// Função para verificar se o e-mail foi enviado, executada quando a pagina principal é iniciada
function checkEmailSent() {
    const params = new URLSearchParams(window.location.search);
    const emailSent = params.get('email'); // Verifica se o parâmetro 'email' está presente

    // Exibe a mensagem somente se o parâmetro 'email=enviado' estiver na URL
    if (emailSent === 'enviado') {
        const message = document.getElementById('success-message');
        message.style.display = 'block'; // Exibe a mensagem

        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);

        // Remove o parâmetro 'email' da URL sem recarregar a página
        const newUrl = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, newUrl);
    }
}

// Chama a função quando a página é carregada
window.onload = checkEmailSent;



