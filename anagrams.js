const notAllowed = /[^\p{Ll}]/gu; // Everything but lowercase letters

let anagramSource;
let anagramAttempt;
let leftoverLetters;
let leftoverLettersString;

function go(){
    resetErrorMessage();
    getAnagramSource();
    getAnagramAttempt();
    generateLeftoverLetters();
    displayLeftoverLetters(); // This also displays the error message; it would be better to separate them
}

function resetErrorMessage(){
    document.getElementById("errorMessage").innerHTML = "";
}

function getAnagramSource(){
    anagramSource = document.getElementById("anagramSource").value.toLowerCase().replaceAll(notAllowed,"");
}
function getAnagramAttempt(){
    anagramAttempt = document.getElementById("anagramAttempt").value.toLowerCase().replaceAll(notAllowed,"");
}

function generateLeftoverLetters(){
    leftoverLetters = anagramSource.split("");
    for (let i = 0; i < anagramAttempt.length; i++){
        if (anagramAttempt[i] && leftoverLetters.includes(anagramAttempt[i])){
            for (let j = 0; j < leftoverLetters.length; j++){
                if (leftoverLetters[j] == anagramAttempt[i]){
                    leftoverLetters.splice(j,1);
                    j = leftoverLetters.length;
                }
            }
        } else {
            document.getElementById("errorMessage").innerHTML = "Je hebt een fout gemaakt: verwijder een <b>" + anagramAttempt[i] + "</b>.";
        }
    }
}

function displayLeftoverLetters(){
    leftoverLettersString = leftoverLetters.join("");
    if (leftoverLettersString == ""){
        document.getElementById("leftoverLetters").innerHTML = "&mdash;";
    } else {
        document.getElementById("leftoverLetters").innerHTML = leftoverLettersString;
    }
}