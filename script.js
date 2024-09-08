// Funções básicas de operação
function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function deleteLast() {
    let display = document.getElementById("display").innerText;
    document.getElementById("display").innerText = display.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById("display").innerText += character;
}

function calculate() {
    let display = document.getElementById("display").innerText;
    
    // Verifica se o display está vazio
    if (display === "") {
        showError("Erro: Campo vazio!");
        return;
    }
    
    try {
        display = display.replace(/÷/g, '/').replace(/×/g, '*');
        document.getElementById("display").innerText = eval(display);
    } catch {
        showError("Erro: Expressão inválida!");
    }
}

function calculatePercentage() {
    let display = document.getElementById("display").innerText;
    
    if (display === "") {
        showError("Erro: Campo vazio!");
        return;
    }

    try {
        let result = eval(display);
        document.getElementById("display").innerText = result / 100;
    } catch {
        showError("Erro: Expressão inválida!");
    }
}

// Função para mostrar a mensagem de erro
function showError(message) {
    const display = document.getElementById("display");
    display.innerText = message;
    
    display.style.color = "white";
    display.style.backgroundColor = "#ff4f4f";
    display.style.border = "1px solid #ffcccc";
    display.style.borderRadius = "10px";
    display.style.padding = "10px";
    display.style.fontSize = "1.5rem";
    display.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
    display.style.transition = "all 0.3s ease";

    setTimeout(() => {
        display.innerText = "";
        display.style.color = "white";
        display.style.backgroundColor = "transparent";
        display.style.border = "none";
        display.style.borderRadius = "0";
        display.style.padding = "0";
        display.style.fontSize = "2.5em";  // Tamanho da fonte original
        display.style.boxShadow = "none";
    }, 3000);  // Mensagem de erro desaparecerá após 2 segundos
}

// Adiciona interação com o teclado
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const validKeys = "0123456789+-*/.";

    if (validKeys.includes(key)) {
        appendCharacter(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape" || key.toLowerCase() === "c") {
        clearDisplay();
    } else if (key === "%") {
        calculatePercentage();
    } else if (key === "/") {
        appendCharacter("/");
    } else if (key === "*") {
        appendCharacter("*");
    }
});
