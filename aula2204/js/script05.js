const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;

    function adivinhar() {
      const palpite = parseInt(document.getElementById("guess").value);
      const dica = document.getElementById("dica");
      const tentativasDisplay = document.getElementById("tentativas");

      // Verificar se o palpite é válido
      if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        dica.textContent = "Por favor, insira um número entre 1 e 10.";
        return;
      }

      tentativas++;

      if (palpite < numeroAleatorio) {
        dica.textContent = "O número é maior! Tente novamente.";
      } else if (palpite > numeroAleatorio) {
        dica.textContent = "O número é menor! Tente novamente.";
      } else {
        dica.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
      }

      // Exibir o número de tentativas feitas
      tentativasDisplay.textContent = `Tentativas feitas: ${tentativas}`;
    }