let usuario = document.querySelector("#usuario-github");
let botao = document.querySelector("#buscar-github");
let avatar_link = document.querySelector(".avatar");
let avatar_img = avatar_link.querySelector("img");
let nome = document.querySelector(".content h1");
let total_repo = document.querySelectorAll(".status li a strong")[0];
let total_gist = document.querySelectorAll(".status li a strong")[1];
let total_seg = document.querySelectorAll(".status li a strong")[2];

const getGitHubInfo = function (username) {
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            nome.innerText = ajax.name;
            avatar_img.src = ajax.avatar_url;
            console.log(ajax);
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};
botao.addEventListener("click", e => {
    e.preventDefault();
    getGitHubInfo(usuario.value);
})