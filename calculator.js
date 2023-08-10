

// Make calculator for Two Number using "if else" .


 function calculator(operator,num1,num2) {
   
   let result;
   
  if (operator=='+') {
    result = num1 + num2;
    
  } else if (operator=='-') {
    result = num1 - num2;
    
  }else if (operator=='*') {
    result = num1 * num2;
    
  }else if (operator=='/') {
    result = num1 / num2;
    
  }else if(operator=='%') {
    result = num1 % num2;
    
  } else {
    result= "Invalid operation";
  }
  
  return result

}

console.log('Addition : '+ (calculator( '+', 20,15)));
console.log('Subtraction : '+ (calculator( '-', 20,15)));
console.log('Multiplication : '+ (calculator( '*', 20,15)));
console.log('Division : '+ (calculator( '/', 20,15)));
console.log('Modulus : '+ (calculator( '%', 23,2)));



// Make calculator for Two Number using "switch" .

/*

function calculator(operator,num1, num2) {
  
let result;

  switch (operator) {

    case ('+'):
      result = num1 + num2;
      break;
    
      case ('-'):
        result = num1 - num2;
      break;
    
      case ('*'):
        result = num1 * num2;
      break;
    
      case ('/'):
        result = num1 / num2;
      break;
    
      case ('%'):
        result = num1 % num2;
        break;
    
    default:
      result = 'Invalid operation';
      break;
  }

  return result;
}



console.log('Addition : '+ (calculator( '+', 10,15)));
console.log('Subtraction : '+ (calculator( '-', 10,15)));
console.log('Multiplication : '+ (calculator( '*', 10,15)));
console.log('Division : '+ (calculator( '/', 10,15)));
console.log('Modulus : '+ (calculator( '%', 13,2)));


*/
