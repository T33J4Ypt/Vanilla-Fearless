const receitas = [
  {
    nome: "Sardinha Assada",
    producao: 3,
    ingredientes: {
      "Tábuas": 2,
      "Sardinhas Limpas": 6
    }
  },
  {
    nome: "Sardinha Enlatada",
    producao: 1,
    ingredientes: {
      "Sardinhas Limpas": 1,
      "Latas": 1
    }
  },
  {
    nome: "Robalo Recheado",
    producao: 1,
    ingredientes: {
      "Tábuas": 1,
      "Robalos Limpos": 1,
      "Batatas": 2
    }
  },
  {
    nome: "Burrito",
    producao: 1,
    ingredientes: {
      "Carnes Limpas": 1,
      "Tábuas": 1,
      "Pães": 2
    }
  },
  {
    nome: "Hamburger",
    producao: 2,
    ingredientes: {
      "Pães": 2,
      "Tábuas": 2,
      "Carnes": 4
    }
  },
  {
    nome: "Francesinha",
    producao: 2,
    ingredientes: {
      "Pães": 2,
      "Carnes": 4,
      "Batatas": 4
    }
  },
  {
    nome: "Ice Tea",
    producao: 2,
    ingredientes: {
      "Chá": 1,
      "Latas": 2,
      "Águas": 2
    }
  },
  {
    nome: "Cola",
    producao: 2,
    ingredientes: {
      "Café": 1,
      "Latas": 2,
      "Águas": 2
    }
  },
  {
    nome: "Fanta",
    producao: 2,
    ingredientes: {
      "Laranja": 1,
      "Latas": 2,
      "Águas": 2
    }
  },
  {
    nome: "Drena",
    producao: 2,
    ingredientes: {
      "Frascos": 2,
      "Acetonas": 4,
      "Ópios": 8
    }
  }
];

const tabela = document.getElementById("tabela-fabricacao");

receitas.forEach((r, i) => {
  const tr = document.createElement("tr");

  const tdNome = document.createElement("td");
  tdNome.textContent = r.nome;

  const tdInput = document.createElement("td");
  const input = document.createElement("input");
  input.type = "number";
  input.min = 0;
  input.value = 0;
  input.dataset.index = i;
  tdInput.appendChild(input);

  const tdResultado = document.createElement("td");
  tdResultado.id = "res-" + i;
  tdResultado.innerHTML = "-";

  tr.appendChild(tdNome);
  tr.appendChild(tdInput);
  tr.appendChild(tdResultado);
  tabela.appendChild(tr);

  input.addEventListener("input", () => atualizarResultados(i, input.value));
});

function atualizarResultados(index, qtdDesejada) {
  const receita = receitas[index];
  const resultado = {};

  const multiplicador = qtdDesejada / receita.producao;

  for (const ingrediente in receita.ingredientes) {
    resultado[ingrediente] = Math.ceil(receita.ingredientes[ingrediente] * multiplicador);
  }

  const td = document.getElementById("res-" + index);
  td.innerHTML = Object.entries(resultado)
    .map(([ing, qtd]) => `${qtd} ${ing}`)
    .join("<br>");
}
