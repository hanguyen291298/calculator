// Math function for a calculator

function add(a, b){
    return parseFloat(a) + parseFloat(b);
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


const Operators = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "÷": devision,
}

const  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const calculator = {

    "firstvalue": "",
    "secondvalue": "",
    "operator": "",
    "currententry": "0",
    "equalmark": "",

}

let bnts = document.querySelectorAll("button")
let first_value = document.querySelector(".first_value");
let second_value = document.querySelector(".second_value");
let operator_mark = document.querySelector(".operator");
let input_value = document.querySelector(".input_value")
let equal_mark = document.querySelector(".equal_mark")

let result;



// Add an event listener to capture buttons are clicked


function equal(a, b, operator){
    result = Operators[operator](a, b)
    equal_mark.innerHTML = "="
    return result    
}

function Update(){
    first_value.innerHTML = calculator.firstvalue;
    second_value.innerHTML = calculator.secondvalue
    operator_mark.innerHTML = calculator.operator
    input_value.innerHTML = calculator.currententry
    equal_mark.innerHTML = calculator.equalmark
    current_number = "";
}

function DeleteInpput(){
    if (equal_mark.textContent){
        Update()
    }
    else{
        input_value.innerHTML = calculator.currententry
    }
    
}

function backspace(){
    let input_length = input_value.textContent
    if (input_length.length > 1){
        input_value.innerHTML = input_length.slice(0, input_length.length - 1)
    }
    else{
        input_value.innerHTML = "0"
    }
    
}

const delete_all = document.querySelector(".AC")
const delete_entry = document.querySelector(".CE")
const back = document.querySelector(".back")


delete_all.addEventListener("click", Update)
delete_entry.addEventListener("click", DeleteInpput)



let current_number = ""
let operator = ""
function Get_value(value){
    if (numbers.includes(parseFloat(value))){
        current_number += value
        input_value.innerHTML = current_number
    }
    else if(value in Operators){
        operator = value
        first_value.innerHTML = input_value.textContent
        operator_mark.innerHTML = operator
        current_number = "";
    }
    else if (value === "="){
        second_value.innerHTML += input_value.textContent;
        input_value.innerHTML = equal(first_value.textContent, second_value.textContent, operator_mark.textContent)
    }
    else if (value === "Backspace"){
        backspace()
    }
}


function handle_click(){
    document.addEventListener("click", (event)=>{
        let text = event.target.textContent;
        Get_value(text) 
    })
}

 handle_click()

// Add an event listener to capture keydown events

function handle_keydown(){
    document.addEventListener('keydown', (event)=>{
        let text = event.key;
        Get_value(text)
    
    })
}

handle_keydown()
