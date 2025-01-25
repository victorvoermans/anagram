const regex = /[^a-z]/g;

function go(){
    document.getElementById("wrong").innerHTML = "";
    let original = document.getElementById("original").value.toLowerCase().replaceAll(regex,""); // cristovarnovem
    let anagram = document.getElementById("anagram").value.toLowerCase().replaceAll(regex,""); // timvan
    let letters = original.split(""); // c,r,i,s,t,o,v,a,r,n,o,v,e,m
    for (let i = 0; i < anagram.length; i++){
        if (anagram[i] && letters.includes(anagram[i])){
            for (let j = 0; j < letters.length; j++){
                if (letters[j] == anagram[i]){
                    letters.splice(j,1);
                    j = letters.length;
                }
            }
        } else {
            document.getElementById("wrong").innerHTML = "Je hebt een fout gemaakt: verwijder een <b>" + anagram[i] + "</b>.";
        }
    } // c,r,s,o,r,o,v,e
    let display = letters.join(""); //crsorove
    if (display == ""){
        document.getElementById("letters").innerHTML = "&mdash;";
    } else {
        document.getElementById("letters").innerHTML = display;
    }
}