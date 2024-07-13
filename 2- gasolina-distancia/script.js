function calcular() {
    const distancia = parseFloat(document.getElementById("distancia").value);
    const consumo = parseFloat(document.getElementById("consumo").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const passageiros = parseInt(document.getElementById("passageiros").value);
  
    const quantidadeGasolina = distancia / consumo;
  
    const custoViagem = quantidadeGasolina * preco;
  
    const custoPessoa = custoViagem / passageiros;
  
    document.getElementById("resultado_gasolina_litros").textContent = quantidadeGasolina.toFixed(2);
    document.getElementById("resultado_custo").textContent = `R$ ${custoViagem.toFixed(2)}`;
    document.getElementById("resultado_custo_pessoa").textContent = `R$ ${custoPessoa.toFixed(2)}`;
  }