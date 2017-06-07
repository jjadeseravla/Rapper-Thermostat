function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaveMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(number){
  this.temperature += number;
};

Thermostat.prototype.down = function(number){
  if (this.temperature - number < this.MINIMUM_TEMPERATURE) {
    this.temperature = this.MINIMUM_TEMPERATURE;
    throw new Error('Minimum of ' + this.MINIMUM_TEMPERATURE + ' degree reached. Temp set to min.');
  } else {
    this.temperature -= number;
  }
}

Thermostat.prototype.inPowerSaveMode = function(){
  return this.powerSaveMode;
}


module.exports = Thermostat;
