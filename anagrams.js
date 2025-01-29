const notAllowed = /[^\p{Ll}]/gu; // Everything but lowercase letters, according to ChatGPT

function go(){
    document.getElementById("message").innerHTML = "";
    let anagramSource = document.getElementById("anagramSource").value.toLowerCase().replaceAll(notAllowed,"");
    let anagramAttempt = document.getElementById("anagramAttempt").value.toLowerCase().replaceAll(notAllowed,"");
    let leftoverLetters = anagramSource.split("");
    let wrongLetters = [];
    for (let i = 0; i < anagramAttempt.length; i++){
        if (anagramAttempt[i] && leftoverLetters.includes(anagramAttempt[i])){
            for (let j = 0; j < leftoverLetters.length; j++){
                if (leftoverLetters[j] == anagramAttempt[i]){
                    leftoverLetters.splice(j,1);
                    j = leftoverLetters.length;
                }
            }
        } else {
            wrongLetters.push(anagramAttempt[i]);
        }
    }
    let leftoverLettersString = leftoverLetters.join("");
    leftoverLettersString = leftoverLettersString == "" ? "&mdash;" : leftoverLettersString;
    document.getElementById("leftoverLetters").innerHTML = leftoverLettersString;
    let wrongLettersString = wrongLetters.join("");
    if (wrongLetters[0]){
        document.getElementById("message").innerHTML = "Je hebt een fout gemaakt. Verwijder <b>" + wrongLettersString + "</b>.";
    }
    if (!wrongLetters[0] && !leftoverLetters[0] && anagramSource != ""){
        document.getElementById("message").innerHTML = "<b>" + document.getElementById("anagramAttempt").value + "</b> is een anagram van <b>" + document.getElementById("anagramSource").value + "</b>.";
    }
}

function clearFields(){
    document.getElementById("anagramSource").value = "";
    document.getElementById("anagramAttempt").value = "";
    go();
}