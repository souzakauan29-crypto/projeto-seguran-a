
function responder(correto) {
    const resultado = document.getElementById("resultado");

    if (correto) {
        resultado.textContent =
            "✅ Muito bem! Sempre verifique a mensagem antes de clicar em links.";
        resultado.style.color = "#087f4f";
    } else {
        resultado.textContent =
            "❌ Cuidado! Essa atitude pode colocar seus dados em risco. Tente novamente!";
        resultado.style.color = "#c62828";
    }
}
