const materiais = [
  {
    nome: "Berbequim",
    producao: 1,
    ingredientes: {
      "Aço": 10,
      "Ferro": 50
    }
  },
  {
    nome: "Drill",
    producao: 1,
    ingredientes: {
      "Aço": 10,
      "Ferro": 50
    }
  },
  {
    nome: "Small C4",
    producao: 1,
    ingredientes: {
      "Pólvora": 10,
      "Plástico": 20
    }
  },
  {
    nome: "Hack Device",
    producao: 1,
    ingredientes: {
      "Alumínio": 5,
      "Plástico": 10
    }
  },
  {
    nome: "Gas Tank",
    producao: 1,
    ingredientes: {
      "Plástico": 10,
      "Enxofre": 10,
      "Ferro": 25
    }
  },
  {
    nome: "Signal Booster",
    producao: 1,
    ingredientes: {
      "Alumínio": 5,
      "Plástico": 10
    }
  },
  {
    nome: "Portable Welding Machine",
    producao: 1,
    ingredientes: {
      "Carvão": 10,
      "Ferro": 20
    }
  },
  {
    nome: "Safe Cracker",
    producao: 1,
    ingredientes: {
      "Ferro": 5,
      "Aço": 30
    }
  },
  {
    nome: "Glass Cutter",
    producao: 1,
    ingredientes: {
      "Aço": 40
    }
  },
  {
    nome: "Laptop",
    producao: 1,
    ingredientes: {
      "Alumínio": 10,
      "Plástico": 20
      }
  },
  {
    nome: "Thermite Bomb",
    producao: 1,
    ingredientes: {
      "Pólvora": 5,
      "Plástico": 20
    }
  }
];

const tabela = document.getElementById("tabela-assaltos");

materiais.forEach((r, i) => {
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
  const material = materiais[index];
  const resultado = {};

  const multiplicador = qtdDesejada / material.assaltos;

  for (const material in receita.materiais) {
    resultado[material] = Math.ceil(receita.materiais[material] * multiplicador);
  }

  const td = document.getElementById("res-" + index);
  td.innerHTML = Object.entries(resultado)
    .map(([ing, qtd]) => `${qtd} ${ing}`)
    .join("<br>");
}
