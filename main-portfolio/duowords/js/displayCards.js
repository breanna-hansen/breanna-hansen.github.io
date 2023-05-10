async function getCards() {
    const response = await fetch("js/spanish.json");
const json = await response.json();

    var count = 0;
    if (count < 21) {
        // Get next 5 words/definition that have not reached 10 correct guesses yet
        // Randomize foreign and native word orders
        for (var i = 0; i < 6; i++) {
            var order = Math.floor(Math.random() * 5);
            console.log(order);
        }
        // Display cards in foreign side
        // Display cards in native side
        // Allow user to select two cards to match
        // Get user guesses
        // Check for match of guesses
        // If guess is correct, remove two matching cards
        // Replace two matching cards with new word/definition
        // Repeat guess and replace steps for 20 cards.

        var foriegnCards = document.getElementById("foreign");
        var nativeCards = document.getElementById("native");
        var lesson = json.Introduction;
        //display.innerHTML = JSON.stringify(json.Introduction);
        for (const key in lesson) {
            //foriegn language
            var learningCard = document.createElement("div");
            learningCard.className = "tile";
            learningCard.innerHTML = key;
            // native language
            var nativeCard = document.createElement("div");
            nativeCard.className = "tile";
            nativeCard.innerHTML = lesson[key];
            // append cards
            foriegnCards.append(learningCard);
            nativeCards.append(nativeCard);
        }
        count++;
    }
}

function myRandomInts(quantity, max) {
    const arr = []
    while (arr.length < quantity) {
        var candidateInt = Math.floor(Math.random() * max) + 1
        if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    return (arr)
}

function addForeign(word) {

}

function checkMatch(left, right) {

}