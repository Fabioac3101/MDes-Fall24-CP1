const slider = document.getElementById("slider");
const puzzleImage = document.getElementById("puzzleImage");
const decoy1 = document.getElementById("decoy1");
const decoy2 = document.getElementById("decoy2");
const decoy3 = document.getElementById("decoy3");
const decoy4 = document.getElementById("decoy4");

const correctPosition = 70; 
const decoyPosition1 = 170;  
const decoyPosition2 = 212;
const decoyPosition3 = 115;
const decoyPosition4 = 20;
const tolerance = 0.5;      

function checkSlider() {
    const sliderValue = parseFloat(slider.value); 

  
    console.log(`Slider Value: ${sliderValue}`);

    
    if (Math.abs(sliderValue - correctPosition) <= tolerance) {
        
        puzzleImage.style.display = "block";
    } else {
        
        puzzleImage.style.display = "none";
    }

    
    if (Math.abs(sliderValue - decoyPosition1) <= tolerance) {
        
        decoy1.style.display = "block";
    } else {
        
        decoy1.style.display = "none";
    }

    if (Math.abs(sliderValue - decoyPosition2) <= tolerance) {

        decoy2.style.display = "block";
    } else {
    
        decoy2.style.display = "none";
    }

    if (Math.abs(sliderValue - decoyPosition3) <= tolerance) {

        decoy3.style.display = "block";
    } else {
    
        decoy3.style.display = "none";
    }

    if (Math.abs(sliderValue - decoyPosition4) <= tolerance) {

        decoy4.style.display = "block";
    } else {
    
        decoy4.style.display = "none";
    }
    }



// Add event listener to the slider
slider.addEventListener("input", checkSlider);
