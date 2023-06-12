const form = document.querySelector("form");
const pre = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = form.inItem.value;

  if (localStorage.getItem("compras")) {
    const lista = localStorage.getItem("compras") + ";" + item;
    localStorage.setItem("compras", lista);
  } else {
    localStorage.setItem("compras", item);
  }

  mostrarLista();

  form.inItem.focus();
  form.inItem.value = "";
});

const mostrarLista = () => {
  if (!localStorage.getItem("compras")) {
    pre.textContent = "";
    return;
  }

  const items = localStorage.getItem("compras").split(";");
  let listados = [];
  for (i = 0; i < items.length; i++) {
    listados[i] = items[i];
  }
  listados.sort();

  let texto = "";
  for (const it of listados) {
    texto += it + "\n";
  }
  pre.textContent =
    "Produtos Adicionados\n" + "-----------------------\n" + texto;
};

form.btLimpar.addEventListener("click", () => {
  localStorage.removeItem("compras");
  pre.textContent = "";
});

window.addEventListener("load", mostrarLista);
