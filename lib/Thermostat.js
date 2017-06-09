function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaveMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()) {
    throw new Error('Maximum temperature reached');
  } else {
    this.temperature ++;
  }
};

Thermostat.prototype.down = function(){
  if (this.getCurrentTemperature() < this.MINIMUM_TEMPERATURE) {
    this.temperature = this.MINIMUM_TEMPERATURE;
    throw new Error('Minimum of ' + this.MINIMUM_TEMPERATURE + ' degree reached. Temp set to min.');
  } else {
    this.temperature --;
  }
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
};

Thermostat.prototype.inPowerSaveMode = function(){
  return this.powerSaveMode;
};

Thermostat.prototype.changePowerMode = function(){
  this.inPowerSaveMode() ? this.powerSaveMode = false : this.powerSaveMode = true;
};

Thermostat.prototype.energyUsage = function() {
  switch (true) {
    case this.getCurrentTemperature() < 18:
      return "low-usage";
    case this.getCurrentTemperature() < 25:
      return "medium-usage";
    case this.getCurrentTemperature() >= 25:
      return "high-usage";
  }
};

Thermostat.prototype.isMinTemp = function() {
  if (this.getCurrentTemperature() - 1 < this.MINIMUM_TEMPERATURE) {
    return true;
  }
};

Thermostat.prototype.isMaxTemp = function() {
  if ( !this.inPowerSaveMode() && this.getCurrentTemperature() === 32 ) {
      return true;
    } else if (this.inPowerSaveMode() && this.getCurrentTemperature() === 25) {
      return true;
    } else {
    return false;
  }
};

// module.exports = Thermostat;
