function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
