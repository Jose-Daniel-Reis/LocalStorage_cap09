const form = document.querySelector("form");
const imgClube = document.querySelector("#imgClube");
const divTitulo = document.querySelector("#divTitulo");
const inRadios = document.querySelectorAll("input");
const h4 = document.querySelector("h4");

const trocarClube = () => {
  const clubes = ["Cruzeiro", "Atletico", "America"];

  let selecao;

  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selecao = i;
      break;
    }
  }
  if (selecao <= 2) {
    divTitulo.className = `row cores-${clubes[selecao]}`;
    imgClube.src = `image/${clubes[selecao].toLowerCase()}.png`;
    imgClube.className = "img-fluid";
    imgClube.alt = `Simbolo do ${clubes[selecao]}`;
    localStorage.setItem("clube", clubes[selecao]);
  } else {
    divTitulo.className = "row";
    imgClube.className = "d-none";
    imgClube.alt = "";
    localStorage.removeItem("clube");
  }
};

form.rbCruzeiro.addEventListener("change", trocarClube);
form.rbAtletico.addEventListener("change", trocarClube);
form.rbAmerica.addEventListener("change", trocarClube);
form.rbNenhum.addEventListener("change", trocarClube);

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube");

    if (clube == "Cruzeiro") {
      inRadios[0].checked = true;
    } else if (clube == "Atletico") {
      inRadios[1].checked = true;
    } else {
      inRadios[2].checked = true;
    }
    trocarClube();
  }
};

const verificarVisitas = () => {
  let visitas = 0;
  if (localStorage.key("visitas")) {
    visitas = Number(localStorage.getItem("visitas"));
    visitas++;
    h4.textContent = `Que bom que voltou! Essa é a sua visita de número ${visitas} ao nosso site.`;
  } else {
    h4.textContent = "Muito Bem-Vindo! Esta é a sua primeira visita.";
    visitas = visitas + 1;
  }

  localStorage.setItem("visitas", visitas);
};

window.addEventListener("load", verificarVisitas);
window.addEventListener("load", verificarClube);
