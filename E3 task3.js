// E3 - Задание 3

function getNumber(n1){
    return function(n2){
    return n1 + n2
    }
  }
  
  const sumFunc = getNumber(2)
  
  const sum = sumFunc(3)
  
  console.log(sum)
  