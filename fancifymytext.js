function convertBigger() {
   document.getElementById("textInput").style.fontSize = "4em";
 
}

//for radio button selection
function makeStyleChange(){

    alert("Radio button changes!");

    const fancy =document.getElementById("fancy");
    const textArea = document.getElementById("textInput");

    if(fancy.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";

    }
}

function addMoo() {
    const textArea = document.getElementById("textInput");

    let text = textArea.value.toUpperCase();

    let lines = text.split(".");

    for(let i=0; i < lines.length; i++) {
        let line = lines[i].trim();
        if(line.length === 0) continue;

        let words = line.split(" ");
        let lastIndex = words.length - 1;

        words[lastIndex] = words[lastIndex] + "-MOO";

        lines[i] = words.join(" ");


    }

text = lines.join(". ");
textArea.value = text;
}
