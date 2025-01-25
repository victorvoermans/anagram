const notAllowed = /[^\p{Ll}]/gu; // Everything but lowercase letters

function go(){
    document.getElementById("errorMessage").innerHTML = "";
    let anagramSource = document.getElementById("anagramSource").value.toLowerCase().replaceAll(notAllowed,"");
    let anagramAttempt = document.getElementById("anagramAttempt").value.toLowerCase().replaceAll(notAllowed,"");
    let leftoverLetters = anagramSource.split("");
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
    let leftoverLettersString = leftoverLetters.join("");
    if (leftoverLettersString == ""){
        document.getElementById("leftoverLetters").innerHTML = "&mdash;";
    } else {
        document.getElementById("leftoverLetters").innerHTML = leftoverLettersString;
    }
}