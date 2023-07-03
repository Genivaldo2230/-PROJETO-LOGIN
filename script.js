function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") /*codigo refactored usando o toggle*/

  //pega img na taqg #profile
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    /*linha e condicional boolean*/
    //se tiver light mode. adiciona a imagen light
    img.setAttribute("src", "./assents/Gda-Light.png")
  } else {
    img.setAttribute("src", "./assents/avatar-gda.png")
  }
   
}
