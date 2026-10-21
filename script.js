function simularCompra() {
    const precoTeclado = 250.00;
    const precoMouse = 150.00;
    const precoHeadset = 300.00;

    function obterQuantidade(nomeProduto) {
        let entrada = prompt(`Quantas unidades de "${nomeProduto}" você deseja comprar?`);
        
        if (entrada === null || entrada.trim() === "") return 0;
        
        let quantidade = Number(entrada);
        
        while (isNaN(quantidade) || quantidade < 0 || !Number.isInteger(quantidade)) {
            alert("Valor inválido! Por favor, digite um número inteiro válido.");
            entrada = prompt(`Quantas unidades de "${nomeProduto}" você deseja comprar?`);
            if (entrada === null || entrada.trim() === "") return 0;
            quantidade = Number(entrada);
        }
        
        return quantidade;
    }

    const qtdTeclado = obterQuantidade("Teclado Mecânico");
    const qtdMouse = obterQuantidade("Mouse Gamer");
    const qtdHeadset = obterQuantidade("Headset Surround");

    if (qtdTeclado === 0 && qtdMouse === 0 && qtdHeadset === 0) {
        alert("Nenhum produto foi selecionado. A simulação foi cancelada.");
        return;
    }

    const totalTeclado = qtdTeclado * precoTeclado;
    const totalMouse = qtdMouse * precoMouse;
    const totalHeadset = qtdHeadset * precoHeadset;
    const totalCompra = totalTeclado + totalMouse + totalHeadset;

    let extrato = "===== RESUMO DA SIMULAÇÃO =====\n\n";
    
    if (qtdTeclado > 0) {
        extrato += `Teclado Mecânico: ${qtdTeclado} un. - R$ ${totalTeclado.toFixed(2)}\n`;
    }
    if (qtdMouse > 0) {
        extrato += `Mouse Gamer: ${qtdMouse} un. - R$ ${totalMouse.toFixed(2)}\n`;
    }
    if (qtdHeadset > 0) {
        extrato += `Headset Surround: ${qtdHeadset} un. - R$ ${totalHeadset.toFixed(2)}\n`;
    }
    
    extrato += `\nTOTAL A PAGAR: R$ ${totalCompra.toFixed(2)}`;

    alert(extrato);
}