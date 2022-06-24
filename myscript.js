//Reading of numbers in the program
const num1 = parseFloat(prompt('Enter Num1: '));//convert string to number
//Reading of operators in the program
const operator = prompt('Enter operator to use: (+, -, /)');
const num2 = parseFloat(prompt('Enter Name;: '));//convert string to number to perform operation;

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('!wrong input Refresh and try again.');
} else{
        if(operator == '+'){
            result = num1 + num2;
        }else if(operator == '-'){
            result = num1 - num2;
        }else if(operator == '*'){
            result = num1 * num2;
        }else if(operator == '/'){
            result = num1 / num2;
    }  
    alert(num1 + ' '+ operator  + ' ' + num2 +' = '  + result)
}
