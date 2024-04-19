// Essa função vai verificar se tem a classe e se tiver remove, senão tiver ele adiciona a classe.
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
    // se tiver light manter a imagem normal.
    img.setAttribute('src', 'assets/avatar-light.png')
  } else {
    // Substituir a imagem
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute('alt', 'foto do mike com óculos escuros')
  }


}