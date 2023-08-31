

        let valorAtual = "";
        let operadorAtual = "";
        let primeiroOperador = "";

        function valor(num) {
            valorAtual += num;
            document.getElementById("result").value = valorAtual;
        }

        function operador(op) {
            operadorAtual = op;
            primeiroOperador = valorAtual;
            valorAtual = "";
        }

        function calcular() {
            const segundoOperador = valorAtual;
            let resultado;

            switch (operadorAtual) {
                case 'soma':
                    resultado = parseFloat(primeiroOperador) + parseFloat(segundoOperador);
                    break;

                case "subtracao":
                    resultado = parseFloat(primeiroOperador) - parseFloat(segundoOperador);
                    break;

                case "multiplicacao":
                    resultado = parseFloat(primeiroOperador) * parseFloat(segundoOperador);
                    break;

                case "divisao":
                    resultado = parseFloat(primeiroOperador) / parseFloat(segundoOperador);
                    break;
            }
            document.getElementById("result").value = resultado;
            valorAtual = resultado.toString();
            operadorAtual = "";
            primeiroOperador = "";
        }
        function limpa() {
            valorAtual = "";
            document.getElementById("result").value = "";
        }
