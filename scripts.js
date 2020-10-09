const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
utterance.rate = 2;

function speak() { 
    speechSynthesis.speak(utterance);
}

function cancel() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event.target.innerText;
}