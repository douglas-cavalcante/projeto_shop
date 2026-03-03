var legumes = [
  {
    id: 1,
    imagem:
      "https://img.freepik.com/vetores-gratis/tomate-fresco_1053-566.jpg?semt=ais_hybrid&w=740&q=80",
    nome: "tomate",
    gramas_unidade: 250,
    preco: 3,
    fornecedor: "pomar senai",
    preco_quilo: 12,
  },
  {
    id: 2,
    imagem:
      "https://static.vecteezy.com/system/resources/thumbnails/020/943/780/small/three-fresh-orange-carrots-isolated-with-clipping-path-and-shadow-in-file-format-close-up-of-healthy-vegetable-root-with-full-focus-png.png",
    nome: "cenoura",
    gramas_unidade: 200,
    preco: 2.5,
    fornecedor: "horta verde",
    preco_quilo: 12.5,
  },
  {
    id: 3,
    imagem:
      "https://img.freepik.com/fotos-gratis/batatas-deliciosas-em-fundo-branco_1203-1899.jpg?semt=ais_hybrid&w=740&q=80",
    nome: "batata",
    gramas_unidade: 300,
    preco: 1.8,
    fornecedor: "campo fresco",
    preco_quilo: 6,
  },
  {
    id: 4,
    imagem:
      "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Abobrinha_italiana_600x600[1]-1000x1000.jpg",
    nome: "abobrinha",
    gramas_unidade: 220,
    preco: 2.2,
    fornecedor: "fazenda alegre",
    preco_quilo: 10,
  },
];

// etapa 2

legumes.forEach((legume) => {
  // Montar o bloco html que deseja inserir

  var htmlProduto = `
    <div class="produto">

     <div class="imagem_container">
        <img
          width="100px"
          src=${legume.imagem}
        />
      </div>

        <div class="produto_nome_container">
          <h2>${legume.nome}</h2>
          <span>Cada - Aprox. ${legume.gramas_unidade}g</span>
        </div>

        <span>${legume.fornecedor}</span>

        <div class="produto_precos_container">
          <span>${legume.preco} reais</span>
          <span>R$ ${legume.preco_quilo} por KG</span>
        </div>

        <div class="produto_botoes_container">
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <button>Add 1 item</button>
        </div>
      </div>`;

  document.getElementById("lista").insertAdjacentHTML("beforeend", htmlProduto);
});

/* 1 forma - Funcao nomeada
legumes.forEach(function renderizarItem() {});

// 2 form - Sem passar nome da funcao
legumes.forEach(function (item) {});

// 3 form - Funcoes anomimas
legumes.forEach((item) => {});
*/
