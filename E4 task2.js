// E4 Задание 2
function checkObjectProperty(str, obj){
    let result = false
    for (let key in obj){
      if(key === str){
        result = true
      } 
    }return result
  }
  