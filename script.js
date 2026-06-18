function showVocab(word, meaning, example){

    document.getElementById("vocabTitle").innerText = word;
    document.getElementById("vocabMeaning").innerText = meaning;
    document.getElementById("vocabExample").innerText = example;

    document.getElementById("vocabModal").style.display = "block";
}

function showTerm(word, meaning, example){

    document.getElementById("termTitle").innerText = word;
    document.getElementById("termMeaning").innerText = meaning;
    document.getElementById("termExample").innerText = example;

    document.getElementById("termModal").style.display = "block";
}

function closeModal(){

    document.getElementById("vocabModal").style.display = "none";
    document.getElementById("termModal").style.display = "none";
}

window.onclick = function(event){

    if(event.target.classList.contains("modal")){
        closeModal();
    }
}