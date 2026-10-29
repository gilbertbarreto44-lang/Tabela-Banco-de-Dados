const produtos = [
    {
      nome: "Furadeira",
      categoria: "Elétrica",
      quantidade: 20,
      preco: 350
    },
    {
        nome: "Martelo",
      categoria: "Manual",
      quantidade: 22,
      preco: 45
    },
    {
        nome: "Alicate",
      categoria: "Manual",
      quantidade: 14,
      preco: 34
    },
    {
        nome: "Parafusadeira",
      categoria: "Elétrica",
      quantidade: 7,
      preco: 420
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }