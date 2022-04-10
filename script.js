let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__result')

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    if (palavra === '') {
        resultado.innerHTML = `<p id="container__significado">Escreva alguma palavra no campo de busca!!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
         
            resultado.innerHTML = `
            <h3 id="container__palavra">${palavra}</h3>
                <p id="container__significado"><span>1º</span> ${data[0].meanings[0].definitions[0].definition}</p>
         `
         let audio = new Audio(`${data[0].phonetics[0].audio}`);
         audio.play();
         
        }).catch(() => {
            resultado.innerHTML = `<p id="container__significado"><span>Não</span> foi possivel encontrar está palavra!! </p>`
        })
    }
})
