const inputField = document.querySelector(".text-input");
const wordCountDisplay = document.querySelector("[data-word-count]");
const characterCountDisplay = document.querySelector("[data-character-count]");
const sentenceCountDisplay = document.querySelector("[data-sentence-count]");
const paragraphCountDisplay = document.querySelector("[data-paragraph-count]");

function updateCounts() {
    if (!inputField.value) {
        resetCounts();
        return;
    }

    const wordsArray = inputField.value.trim().split(/\s+/).filter(word => word !== "");
    wordCountDisplay.textContent = wordsArray.length;

    characterCountDisplay.textContent = inputField.value.length;

    const sentenceArray = inputField.value.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCountDisplay.textContent = sentenceArray.length;

    const paragraphArray = inputField.value.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
    paragraphCountDisplay.textContent = paragraphArray.length;
}

function resetCounts() {
    wordCountDisplay.textContent =
        characterCountDisplay.textContent =
        sentenceCountDisplay.textContent =
        paragraphCountDisplay.textContent = "0";
}

inputField.addEventListener("input", updateCounts);
