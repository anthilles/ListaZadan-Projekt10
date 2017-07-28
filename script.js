const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]'); //wyselekcjonowanie wszystkich checkboxów w naszym projekcie

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)) //ustawienie listenera na każdy checkbox. Gdy się kliknie to uruchamia się funkcja handleCheck


let lastChecked; //potrzebujemy tej zmiennej aby zapisywać w niej nasze wcześniejsze kliknięcie 

function handleCheck(e){
    
    let inBetween = false;
    
    if (e.shiftKey && this.checked) { //jeśli przycisk shift został wciśnięty
        checkboxes.forEach(checkbox => { // dla każdego checkbox'a w checkboxes
            if (checkbox === this || checkbox === lastChecked){ // zaznaczenie pierwszego i ostatniego boxu
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;  //jeśli tak to te pomiędzy zaznaczają się również
            }
        
        })
    }
    
        
    lastChecked = this;
}