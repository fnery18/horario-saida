let horas, minutos = "";
let diaSeguinte = false;

let horaResultado = 0;
let minutoResultado = 0;

function atualizaHorario() {
    horas = parseInt(document.getElementById('txtHora').value);
    minutos = parseInt(document.getElementById('txtMinuto').value);

    formataHoraMinutos();

    if(diaSeguinte){
        document.getElementById('horario-saida').innerText = `${horaResultado}:${minutoResultado} do dia seguinte`;
    } else {
        document.getElementById('horario-saida').innerText = `${horaResultado}:${minutoResultado}`;
    }
}

function formataHoraMinutos(){
    if(horas <= 24 && minutos <= 59){
        horaResultado = horas + 9;
        minutoResultado = minutos;
    
        if (horaResultado > 23) {
            horaResultado = horaResultado - 24;
            diaSeguinte = true;
        }
        else{
            diaSeguinte = false;
        }
    
        if(horaResultado.toString().length == 1) {
            horaResultado = `0${horaResultado}`;
        }
    
        if(minutoResultado.toString().length == 1){
            minutoResultado = `0${minutoResultado}`;
        }
    }
    else{
        horaResultado = "00";
        minutoResultado = "00";

        document.getElementById('txtHora').value = '00'
        document.getElementById('txtMinuto').value = '00'
    }
    
}
