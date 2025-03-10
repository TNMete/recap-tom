let my_list = [];

// Funktion zur Erstellung einer HTML-Liste aus einem Array
function createHTMLList(liste) {
    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`);
    let flattenedList = htmlElements.join("");
    return `<ul>${flattenedList}</ul>`;
}

// Funktion zum Aktualisieren der Liste in HTML
function setListContent() {
    let listDiv = document.getElementById("liste");
    listDiv.innerHTML = createHTMLList(my_list);
}

// Funktion zum Verarbeiten von Nutzereingaben mit mehreren Werten
function setUserInputList() {
    let userInput = document.getElementById("userInput");
    let text = userInput.value.trim(); // entfernt Leerzeichen
    if (text !== "") {
        let textList = text.split(",");
        my_list = my_list.concat(textList.map(item => item.trim())); // entfernt Leerzeichen
        setListContent();
        userInput.value = ""; // Löscht das Eingabefeld nach dem Hinzufügen
    }
}

// Funktion zum Hinzufügen eines einzelnen Elements zur Liste
function addSingleItem() {
    let singleInput = document.getElementById("singleInput");
    let text = singleInput.value.trim(); // Leerzeichen entfernen
    if (text !== "") {
        my_list.push(text); // Element anfügen
        setListContent();
        singleInput.value = ""; // Eingabe nach dem Hinzufügen leeren
    }
}