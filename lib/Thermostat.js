function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaveMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(number){
  if (~this.inPowerSaveMode && (this.temperature + number) > 32) {
    this.temperature = 32;
    throw new Error('Maximum temperature of 32 reached');
  } else if (this.inPowerSaveMode && (this.temperature + number) > 25) {
    this.temperature = 25;
    throw new Error('Maximum temperature of 25 reached for Power Saving Mode');
  } else {
  this.temperature += number;
};};

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

Thermostat.prototype.changePowerMode = function(){
  this.inPowerSaveMode ? this.powerSaveMode = false : this.powerSaveMode = true;
}


module.exports = Thermostat;
