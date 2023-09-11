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

let current_content = "";

for (const bnt of buttons){
    
    bnt.addEventListener("click", ()=>{

        const value = bnt.textContent
        
        if (bnt.classList.contains("num")){
            enter_data.innerHTML = current_content + value
            current_content = enter_data.textContent
        }
        else{
            current_content = "";
            first_value.innerHTML = enter_data.textContent;
            operator.innerHTML = value;


        }

    })
    
}


// create a funtion to call equal funtion to return a result

const equal = document.querySelector(".equal")


equal.addEventListener("click", (f)=>{
    let func = Operators[operator.textContent]
    console.log(func)
    
    second_value = enter_data.textContent
    console.log(first_value.textContent)
    console.log(second_value.textContent)
    result = func(first_value.textContent, second_value.textContent)
    enter_data.innerHTML = result
})



