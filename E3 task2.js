// E3 - Задание 2

function testPrime(n) {
    if (0 > n || n > 1000) {
      console.log('Данные не верны');
    } else if (n == 0 || n ==1) {
      console.log(`Число ${n} не является простым`);
    } else if (n === 2) {
      console.log(`Число ${n} является простым`);
    } else {
      for(var x = 2; x < n; x++) {
         if(n % x === 0) {
           console.log(`Число ${n} не является простым`);
           break;
         } else {
           console.log(`Число ${n} является простым`);
           break;
         }
       }
    }
  }
  
  test_prime()
  