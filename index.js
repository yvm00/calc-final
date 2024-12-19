
const res = document.getElementById("result");
const operators = ['+', '-', '*', '/']

function calculate(value) {  
  const fn = new Function(`return ${value}`);
  const calculatedValue = fn()
    if (isNaN(calculatedValue)) {
  res.value = "Can't divide 0 with 0";
  setTimeout(() => {
    res.value = "";
  }, 1300);    
  } else {
    res.value = calculatedValue;
  }
}

function showOnDisplay(enteredValue) {
  if(res.value.length<17){  
    if(( operators.includes(enteredValue) ) && ((res.value.length == 0) || (res.value.includes(enteredValue)))){ 
      enteredValue = "Invalid input";
      setTimeout(() => {
        res.value = "";
      }, 1000); 
    }

    // if((res.value[0] == "0") && (res.value[1] !== '.')){
    //   res.value =  '';
    // }

    if ((!res.value)) {
      res.value = "";
    } else if((enteredValue == 0) && (res.value== '0')){ 
        res.value = '';    
    } else if((enteredValue == '.') && (res.value.includes('.'))) { 
      enteredValue = " Invalid input";
      setTimeout(() => {
        res.value = "";
      }, 1000);    
    } else if ((res.value[0] == "0") && (enteredValue !== '.') && (res.value[1] !== '.')){
      res.value =  '';
    }
    res.value += enteredValue;  
  }
  else{
    res.value = 'Too long input'
    setTimeout(() => {
      res.value = "";
    }, 1000)
  }
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  if (e.key === "Enter") {
    calculate(result.value);
  }

  if (e.key === "Backspace") {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
