let horas = 0; // variáveis são utilizadas para armazenar os valores 
let minutos = 0;
let segundos = 0;
let cronometro; //Esta variável é usada para armazenar a referência ao setInterval, permitindo iniciar, pausar e reiniciar o cronômetro.

function iniciarCronometro() { //Esta função utiliza setInterval para criar um intervalo de tempo que incrementa os segundos a cada segundo. Quando os segundos atingem 60, são reiniciados para zero e os minutos são incrementados. O mesmo ocorre para os minutos e as horas.
  cronometro = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
    }

    atualizarDisplay(); // Esta função atualiza o conteúdo exibido na página HTML com os valores atualizados das horas, minutos e segundos.
  }, 1000);
}

function pausarCronometro() { // Esta função utiliza clearInterval para parar o intervalo de tempo criado pelo setInterval, pausando o cronômetro.
  clearInterval(cronometro);
}

function zerarCronometro() { // Esta função utiliza clearInterval para parar o intervalo de tempo, redefine as variáveis de horas, minutos e segundos para zero e, em seguida, chama a função atualizarDisplay() para refletir essas mudanças na página HTML.
  clearInterval(cronometro);
  horas = 0;
  minutos = 0;
  segundos = 0;
  atualizarDisplay(); 
}

function atualizarDisplay() { ////Esta função atualiza os elementos HTML com os IDs 'horas', 'minutos' e 'segundos' para exibir os valores corretos das variáveis de tempo.
  document.getElementById('horas').innerText = formatarTempo(horas);
  document.getElementById('minutos').innerText = formatarTempo(minutos);
  document.getElementById('segundos').innerText = formatarTempo(segundos);
}

function formatarTempo(tempo) { //Esta função formata o tempo para garantir que seja exibido sempre com dois dígitos, adicionando um zero à esquerda se for menor que 10.
  return tempo < 10 ? `0${tempo}` : tempo;
}
