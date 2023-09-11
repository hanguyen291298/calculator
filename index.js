function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a -b;
};

function multiply(a, b){
    return a * b;
};

function devision(a, b){
    return a / b;
};

function percentage(a){
    return (a / 100)
};

const Operators = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "%": percentage,
    "÷": devision,
}
console.log(Operators["+"])


const buttons = document.querySelectorAll("button");

let enter_data = document.querySelector(".enter");
let first_value = document.querySelector(".first_value");
let second_value = document.querySelector(".second_value")
let operator = document.querySelector(".operator");
let result;
let current_number = "";

for (const bnt of buttons){
    
    bnt.addEventListener("click", ()=>{
        
        let get_value = bnt.textContent

        if (bnt.classList.contains("num")){
            enter_data.innerHTML = current_number + get_value
            current_number += get_value
        }

        else if (bnt.classList.contains("equal")) { 

            result = Operators[operator.textContent](first_value.textContent, enter_data.textContent)
            second_value.innerHTML = enter_data.textContent
            enter_data.innerHTML = result
            
        }

        else if (bnt.classList.contains("AC")) {
            
            first_value.innerHTML = "";
            second_value.innerHTML = "";
            operator.innerHTML = "";
            enter_data.innerHTML = "0";
            current_number = "";
        }
        else if (bnt.classList.contains("CE")){

            if (current_number.length > 1){
                current_number = current_number.slice(0, current_number.length -1)
                enter_data.innerHTML = current_number
            }
            else {
                enter_data.innerHTML = "0"
            }
        }   
        
        else {

            first_value.innerHTML = enter_data.textContent;         
            operator.innerHTML = get_value
            second_value.innerHTML = "";
            current_number = "";
        }

    })
    
}


// create a funtion to call equal funtion to return a result






