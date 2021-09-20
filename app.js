var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var btnTranslate = document.querySelector("#btn-translate");

var url = "https://api.funtranslations.com/translate/dothraki.json";

var text = txtInput.value;

console.log(txtInput.value);

function urlGenerator(text)
{
    return url + "?text=" + text;
}

function handlingError()
{
    alert("server is down, please try after some time");
}

function clickHandler()
{
    fetch(urlGenerator(text))
    .then(response => response.json())
    .then(json => {outputDiv.innerText = json.contents.translated})
    .catch(handlingError)
}

btnTranslate.addEventListener("click", clickHandler());

