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

// Create Operators and nnumbers object in order to compare if one of those operators are clicked or keydown

const OPERATORS = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "÷": devision,

}

const  NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Create elements of a calculator to use them when we need to update the original version

const CACULATOR = {

    "a_value": "",
    "b_value": "",
    "operator": "",
    "inputvalue": "0",
    "equalmark": "",
    "temp_input": "", // need a TEMP input to keep combining the value when it's clicked or keydown

}

// Get all of elements to interact with a calculator

let first_value = document.querySelector(".first_value");
let second_value = document.querySelector(".second_value");
let operator_mark = document.querySelector(".operator");
let input_value = document.querySelector(".input_value")
let equal_mark = document.querySelector(".equal_mark")

// Create functions to be used for AC button, CE button 

function Update(){

    first_value.innerHTML = CACULATOR.a_value;
    second_value.innerHTML = CACULATOR.b_value
    operator_mark.innerHTML = CACULATOR.operator
    input_value.innerHTML = CACULATOR.inputvalue
    equal_mark.innerHTML = CACULATOR.equalmark
    temp_number = "";

}

function DeleteInpput(){

    if (equal_mark.textContent){
        Update()
    }
    else{
        input_value.innerHTML = CACULATOR.inputvalue
    }
    
}

// Create an event to listen when AC and CE button are clicked

const delete_all = document.querySelector(".AC")
const delete_entry = document.querySelector(".CE")

delete_all.addEventListener("click", Update)
delete_entry.addEventListener("click", DeleteInpput)

// Create equal and backspace funtion and to be used in calculator_handle function if they are clicked or keydown 

function equal(a, b, operator){
    let result = OPERATORS[operator](a, b)
    return result  

}

function backspace(input, input_length){ 
    
    if (input_length > 1){
        input_value.innerHTML = input.slice(0, input_length - 1) // if the length of input > 1 we can keep removing one  else it wil become the default value "0"
    }
    else{
        input_value.innerHTML = CACULATOR.inputvalue
        temp_number = CACULATOR.temp_input;
    }
    
}
 
// Set the default 

let temp_number = CACULATOR.temp_input
let operator = CACULATOR.operator

// We need to make a funtion to handle if those value are clicked or keydown and use them for calculate

function Calculotor_handle(value){

    if (NUMBERS.includes(parseFloat(value))){
        temp_number += value
        input_value.innerHTML = temp_number
    }

    else if(value in OPERATORS){

        if (first_value.textContent && input_value.textContent === temp_number){
           
            let temp_result = equal(first_value.textContent, input_value.textContent, operator_mark.textContent)
            first_value.innerHTML = temp_result
            input_value.innerHTML = temp_result
           
            operator_mark.innerHTML = value
            temp_number = CACULATOR.temp_input
        }
        else{
            

            if (equal_mark.textContent){
                second_value.innerHTML = CACULATOR.b_value
                equal_mark.innerHTML = "";
            }
        
            operator = value
            first_value.innerHTML = input_value.textContent
            operator_mark.innerHTML = operator
            temp_number = CACULATOR.temp_input;
            
        }

        

    
    }

    else if (value === "=" || value === "Enter"){
        
        if (input_value.textContent === "0" && operator_mark.textContent === "÷"){
            second_value.innerHTML = CACULATOR.b_value
            input_value.innerHTML = "Can't not divide by zero"
        }
        else {
            second_value.innerHTML += input_value.textContent;
            equal_mark.innerHTML = "="
            input_value.innerHTML = equal(first_value.textContent, second_value.textContent, operator_mark.textContent)
            
        }
        
    }

    else if (value === "Backspace" || value === "←"){
        
        let input = input_value.textContent
        
        if (!first_value.textContent || (temp_number !== "" && !equal_mark.textContent) ){
            backspace(input, input.length)
        }
        else if (equal_mark.textContent) {
            Update()
            input_value.innerHTML = input
        }      
    }

  
}

// Add an event listener to capture buttons are clicked

function handle_click(){
    document.addEventListener("click", (event)=>{
        const bnts = document.querySelector(".buttons")
        if (!bnts.contains(event.target)){
            Update()
        }
        else{
            let text = event.target.textContent;
            
            Calculotor_handle(text) 
        }
        
    })
}

 handle_click()

// Add an event listener to capture keydown events

function handle_keydown(){
    document.addEventListener('keydown', (event)=>{
        let text = event.key;
        

        if (text == "/"){
            text = "÷";
        }

        else if ( text == "*"){
            text = "x";
        }
        else if ( text === "Enter"){
            event.preventDefault();
        }
        
        Calculotor_handle(text)
    
    });
}

handle_keydown()
