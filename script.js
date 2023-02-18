function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //subistituindo imagem de perfil
    //1 - Pegar a imagem usando o mesmo seletor css
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        //substituindo a imagem se estiver em light mode
        //setAttribute("qual atrivuto quer alterar", "valor")
        img.setAttribute("src", "./assets/profileImage-lightmode.png")
        img.setAttribute("alt", "Foto de João Victor Pizetta - lightmode")
    } else {
        //substituindo a imagem se estiver em dark mode
        img.setAttribute("src", "./assets/profileImage.png")
        img.setAttribute("alt", "Foto de João Victor Pizetta - darkmode")
    }
}