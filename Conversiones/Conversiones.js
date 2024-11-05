function convertir() {
    let valor = document.getElementById("valor").value;
    let tipo = document.getElementById("tipo").value;

    if (isNaN(valor) || valor === "") {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    valor = parseFloat(valor);
    let resultado;
    let formula;
    let imagen;

    if (tipo === "CtoF") {
        resultado = (valor * 9 / 5) + 32;
        formula = `(${valor} °C × 9/5) + 32`;
        imagen = "fARENHEIT-CELSIUS.png";  
    } else {
        resultado = (valor - 32) * 5 / 9;
        formula = `(${valor} °F − 32) × 5/9`;
        imagen = "CELSIUS-fARENHEIT.png";  
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <div class="resultado-contenido">
            <div>
                <h2>Fórmula: ${formula}</h2>
                <h2>Resultado: ${resultado.toFixed(2)}°</h2>
            </div>
            <img src="${imagen}" alt="Fórmula" class="formula-imagen">
        </div>
    `;
}