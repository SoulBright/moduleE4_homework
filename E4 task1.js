// E4 Задание 1
function getObjectProperty(obj){
    for (let key in obj)
      if (obj.hasOwnProperty(key))
        console.log(`Ключь = ${key}, Значение =  ${obj[key]}`)
  }
  