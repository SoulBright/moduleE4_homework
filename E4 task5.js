// E4 Задание 5
class Devices{
    constructor(name, powerConsumption){
      this.name = name
      this.powerConsumption = powerConsumption
      this.isPlugged = false
    }
      turnOn(){
        this.isPlugged = true
    }
      turnOff(){
        this.isPlugged = false
    }
  }
  
  class HouseholdAppliances extends Devices{
    constructor(color, name, powerConsumption){
      super(name, powerConsumption);
      this.color = color
    }
  }
  
  class ElectricTools extends Devices{
    constructor(cableLength, waterproof, name, powerConsumption){
      super(name, powerConsumption);
      this.cableLength = cableLength
      this.waterproof = waterproof || folse
    }
  }
  
  function totalPowerConsumption(){
    let totalPower = 0
    for (let dev in arguments){
      if (arguments[dev].isPlugged === true){
        totalPower += arguments[dev].powerConsumption
      }
    }  return totalPower
  }
  
  let screwGun = new ElectricTools(3, true, 'screwGun', 700)
  let drill = new ElectricTools(5, true, 'drill', 1200)
  let fridge = new HouseholdAppliances('White', 'fridge', 2500)
  
  drill.turnOn()
  fridge.turnOn()
  
  console.log(totalPowerConsumption(screwGun, drill, fridge))
  