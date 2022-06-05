function calcular() {
    event.preventDefault();

    let valorA = document.getElementById("inputA").value;
    let valorB = document.getElementById("inputB").value;

    let mdc = 0;
    let resto = -1;

    while (valorB !== 0) {
        resto = valorA % valorB;
        valorA = valorB;
        valorB = resto;

        if (resto === 0) {
            mdc = valorA;
            break;
        }
    }

    document.getElementById("mdc").innerText = "MDC(a, b) = " + mdc;

    let resultados = document.getElementById("resultados");

    if (resultados.classList.contains("esconde")) {
        resultados.classList.remove("esconde");
    }
}