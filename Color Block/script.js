//Psuedocode

// Make a function that adds a listener to each color
//  For the listener:
    /*
        once button is clicked, 
        search for the color clicked in each array
        then display each result
    */
// Apply that same function for all the colors


    
const allColors = ['redblock.jpg', 'orangeblock.jpg', 'yellowblock.jpg', 'yellowgreenblock.jpg', 'greenblock.jpg', 'bluegreenblock.jpg', 'lightblueblock.jpg', 'blueblock.jpg', 'bluepurpleblock.jpg', 'purpleblock.jpg', 'magentablock.jpg', 'pinkblock.jpg'];
let complementaryCombos = [];
let triadCombos = [];
let analogousCombos = [];
let complementaryCombo= [];
let triadCombo= [];
let analogousCombo= [];
let allCombos=[];

// Make color combos
// Complemenetary colors: 6 difference

for (var i = 0; i < 6 ; i++){
    complementaryCombos[i] = [allColors[i], allColors[i+6]];
}

// Triad: 4 difference
for (var i = 0; i < 4; i++){
    triadCombos[i] = [allColors[i], allColors[i+4], allColors[i+8]];
}
// Analogous: 1 difference
for (var i = 0; i < 11; i++){
    analogousCombos[i] = [allColors[i], allColors[i+1]];
}

let findCombos = function(color){
    // Finds all arrays that contain the number selected
    // Finds complementary combo

    for (var i = 0; i<complementaryCombos.length; i++){
        if(complementaryCombos[i].includes(color)){
            complementaryCombo = complementaryCombos[i];
        }
    }
    // Finds triad combo
    for (var i =0; i<triadCombos.length; i++){
        if(triadCombos[i].includes(color)){
            triadCombo = triadCombos[i];
        }
    }

    for (var i=0; i<analogousCombos.length; i++){
        if(analogousCombos[i].includes(color)){
            analogousCombo = analogousCombos[i];
        }
    }
    allCombos = [complementaryCombo,triadCombo,analogousCombo];
    return allCombos;
};

// Make an array of combos for each color
const redCombos = findCombos("redblock.jpg");
const orangeCombos = findCombos("orangeblock.jpg");
const yellowCombos = findCombos("yellowblock.jpg");
const yellowgreenCombos = findCombos("yellowgreenblock.jpg");
const greenCombos = findCombos("greenblock.jpg");
const bluegreenCombos = findCombos("bluegreenblock.jpg");
const lightblueCombos = findCombos("lightblueblock.jpg");
const blueCombos = findCombos("blueblock.jpg");
const bluepurpleCombos = findCombos("bluepurpleblock.jpg");
const purpleCombos = findCombos("purpleblock.jpg");
const magentaCombos = findCombos("magentablock.jpg");
const pinkCombos = findCombos("pinkblock.jpg");
let comboArr = [redCombos, orangeCombos, yellowCombos, yellowgreenCombos, greenCombos, bluegreenCombos, lightblueCombos, blueCombos, bluepurpleCombos, purpleCombos, magentaCombos, pinkCombos];
// Color buttons themselves
let red = document.getElementById("redblock.jpg");
let orange = document.getElementById("orangeblock.jpg");
let yellow = document.getElementById("yellowblock.jpg");
let yellowgreen = document.getElementById("yellowgreenblock.jpg");
let green = document.getElementById("greenblock.jpg");
let bluegreen = document.getElementById("bluegreenblock.jpg");
let lightblue = document.getElementById("lightblueblock.jpg");
let blue = document.getElementById("blueblock.jpg");
let bluepurple = document.getElementById("bluepurpleblock.jpg");
let purple = document.getElementById("purpleblock.jpg");
let magenta = document.getElementById("magentablock.jpg");
let pink = document.getElementById("pinkblock.jpg");
let colorArr = [red, orange, yellow, yellowgreen, green, bluegreen, lightblue, blue, bluepurple, purple, magenta, pink];

// Makes a map of colors and its corresponding colors
let correspondingCombos = new Map();
for (var i = 0; i < colorArr.length; i++){
    correspondingCombos.set(colorArr[i], comboArr[i]);
}
    
    
// Function that displays the results on click
// Parameters: color
    
let clickListener = function(color){
    color.addEventListener('click', function(){
        let first = correspondingCombos.get(color)[0];
        let second = correspondingCombos.get(color)[1];
        let third = correspondingCombos.get(color)[2];
        document.getElementById('pair1').src = first[0];
        document.getElementById('pair2').src = first[1];
        document.getElementById('trip1').src = second[0];
        document.getElementById('trip2').src = second[1];
        document.getElementById('trip3').src = second[2];
        document.getElementById('couple1').src = third[0];
        document.getElementById('couple2').src = third[1];
    }
)};

//For loop that creates the event handlers
for (var i = 0; i < colorArr.length; i++){
    clickListener(colorArr[i]);
}

   









