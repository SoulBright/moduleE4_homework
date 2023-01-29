// E3 - Задание 4
function foo(n, k) {
    let begin = n;
    
    let timerId = setInterval(function() {
      console.log(begin)
        if(begin == k){
          clearInterval(timerId)
        }
        begin++;            
    }, 1000);
  }
  
  foo(5, 15)
  