const form = document.querySelector("form");
const h3 = document.querySelector("h3");
const h5 = document.querySelector("h5");
const pre = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const servico = form.inServico.value;

  if (localStorage.getItem("lista")) {
    const lista = localStorage.getItem("lista") + ";" + servico;
    localStorage.setItem("lista", lista);
  } else {
    localStorage.setItem("lista", servico);
  }

  verificarLista();
  form.inServico.value = "";
  form.inServico.focus();
});

const verificarLista = () => {
  if (!localStorage.getItem("lista")) {
    h3.textContent = "";
  } else {
    const lista = localStorage.getItem("lista").split(";");
    h3.textContent = "Serviços Pendentes: " + lista.length;
  }
};

form.btExecutarServico.addEventListener("click", () => {
  if (!localStorage.getItem("lista")) {
    h5.textContent = "";
    pre.textContent = "";
  } else {
    const lista = localStorage.getItem("lista").split(";");
    let texto = lista.shift();

    h3.textContent = "Serviços Pendentes: " + lista.length;
    h5.textContent = "Serviço em Execução:";
    pre.textContent = texto;

    if (lista.length === 0) {
      localStorage.removeItem("lista");
    } else {
      localStorage.setItem("lista", lista.join(";"));
    }
  }
});

window.addEventListener("load", verificarLista);
