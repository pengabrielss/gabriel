alert(`ola mundo`);
function tocaSom (seletorAudio) {
    const elemento - document.querySelector(seletorAudio);

    if (elemento && elementomento.localName === `audio`) {
        elemento.play();
        {
    else {
         //alert(`elemento não encontrado`);
         console.log(`elemento não encontrado ou seletor invalido`);
    }

}

const listaDeTeclas = document.querySelectorAll(`.tecla`);

//para
for (let contador =0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrunento = tecla.classList[1];
    const idAudio = `#som_$(instrumento)`; //template string