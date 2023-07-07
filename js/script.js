//função para o botão de tema dark/light
// Verifica se o checkbox está marcado
if (document.getElementById('toggle').checked) {
  // Armazena o estado do checkbox no localStorage
  localStorage.setItem('checkbox', true);
}


// Recupera o estado do checkbox do localStorage e marca o checkbox se estiver ativo
if (localStorage.getItem('checkbox') === 'true') {
  document.getElementById('toggle').checked = true;
} else {
  document.getElementById('toggle').checked = false;
}
// Adiciona um event listener para salvar o estado do checkbox no localStorage quando ele é clicado
document.getElementById('toggle').addEventListener('click', function() {
  localStorage.setItem('checkbox', this.checked);
});
// Adiciona um event listener para restaurar o estado do checkbox quando a página é carregada ou restaurada do cache
window.addEventListener('pageshow', function(event) {
  if (localStorage.getItem('checkbox') === 'true') {
    document.getElementById('toggle').checked = true;
  } else {
    document.getElementById('toggle').checked = false;
  }
});

//menu mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//fechar menu mobile após selecionar algum link
var menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', function() {
    document.querySelector('#nav').classList.remove('active');
  });
});
