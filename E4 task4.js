//E4 Задание 4
function Devices(name, powerConsumption,){
    this.name = name
    this.powerConsumption = powerConsumption
    this.isPlugged = false
  }
  
  function HouseholdAppliances(name, powerConsumption, color){
    this.name = name
    this.powerConsumption = powerConsumption
    this.color = color
  }
  
  HouseholdAppliances.prototype = new Devices()
  
  function ElectricTools(name, powerConsumption, cableLength, waterproof){
    this.name = name
    this.powerConsumption = powerConsumption
    this.cableLength = cableLength
    this.waterproof = waterproof || folse
  }
  
  ElectricTools.prototype = new Devices()
  
  
  Devices.prototype.turnOn = function(){
      this.isPlugged = true
    }
  Devices.prototype.turnOff = function(){
      this.isPlugged = false
    }
  
  function totalPowerConsumption(){
    let totalPower = 0
    for (let dev in arguments){
      if (arguments[dev].isPlugged === true){
        totalPower += arguments[dev].powerConsumption
      }
    }  return totalPower
  }
  
  let screwGun = new ElectricTools('screwGun', 700, 5)
  let drill = new ElectricTools('drill', 1200, 5)
  let fridge = new HouseholdAppliances('fridge', 2500, 'White')
  
  drill.turnOn()
  fridge.turnOn()
  
  console.log(totalPowerConsumption(screwGun, drill, fridge))
  